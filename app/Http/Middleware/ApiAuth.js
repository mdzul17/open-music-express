require("dotenv").config();
const jwt = require("jsonwebtoken");
const { Pool } = require("pg");

const pool = new Pool();

const ApiAuth = async (req, res, next) => {
  let apiKey = req.headers.authorization;
  if (!apiKey) {
    return res.json({
      message: "No api key has been set",
      status: 403,
      data: {},
      errors: true,
    });
  }

  apiKey = apiKey.split(" ")[1];
  let verify = {};

  try {
    verify = await jwt.verify(apiKey, process.env.ACCESS_TOKEN_KEY);
  } catch (error) {
    return res.json({
      message: "api key not valid",
      status: 403,
      data: {},
      errors: true,
    });
  }

  const user = await pool.query("SELECT * FROM users WHERE id = $1", [
    verify.id,
  ]);
  if (!user.rows[0]) {
    return res.json({
      message: "user not found",
      status: 403,
      data: {},
      errors: true,
    });
  }

  return next();
};

module.exports = ApiAuth;
