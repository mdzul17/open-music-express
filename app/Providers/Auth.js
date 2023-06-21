require("dotenv").config();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { Pool } = require("pg");

const pool = new Pool();

module.exports = {
  user: async (req) => {
    let apiKey = req.headers.authorization,
      decoded;
    if (!apiKey) {
      return {
        message: "No api key has been set",
        error: true,
      };
    }

    apiKey = apiKey.split(" ")[1];
    try {
      decoded = await jwt.verify(apiKey, process.env.ACCESS_TOKEN_KEY);
    } catch (error) {
      return false;
    }

    const query = {
      text: "SELECT * FROM users WHERE id = $1",
      values: [decoded.id],
    };
    const user = await pool.query(query);

    delete user.rows[0].password;

    return user;
  },
  attempt: async (credential) => {
    let user = await pool.query("SELECT * FROM users WHERE username = $1", [
      credential.username,
    ]);

    let userData = user.rows[0];

    if (!userData.length) {
      return {
        message: "Couldn't find user in pool",
        error: true,
      };
    }

    const isPasswordMatch = await bcrypt.compare(
      credential.password,
      userData.password
    );

    if (!isPasswordMatch) {
      return {
        message: "Wrong password",
        error: true,
      };
    }

    const apiKey = await jwt.sign(
      { id: userData.id, username: userData.username },
      process.env.ACCESS_TOKEN_KEY,
      { expiresIn: 1000 * 60 * 30 }
    );

    userData = userData.toJSON();
    userData.apiKey = apiKey;

    delete userData["id"];
    delete userData["password"];

    return userData;
  },
  register: async (req) => {
    let { fullname, username, email, password } = req.body;
    const id = `user-${nanoid(16)}`;

    const hashPassword = await bcrypt.hash(password, 10);
    const user = await pool.query(
      "INSERT INTO users VALUES($1, $2, $3, $4, $5) RETURNING id",
      [id, username, hashPassword, fullname, email]
    );

    if (!user.rows[0].id) {
      return false;
    }

    return true;
  },
};
