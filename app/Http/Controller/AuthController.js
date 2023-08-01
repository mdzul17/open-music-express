const Response = require("../Utils/HttpResponse");
const Auth = require("../../Providers/Auth");
const Randomstring = require("../Utils/RandomString");
const bcrypt = require("bcrypt");
const Mailer = require("../Service/Mailer");
const jwt = require("jsonwebtoken");
const { Pool } = require("pg");

const pool = new Pool();

const AuthController = {
  login: async (req, res) => {
    try {
      const { username, password } = req.body;
      const attempt = await Auth.attempt({ username, password });
      if (attempt.error) {
        return Response.validationError(res, attempt.message);
      }

      return Response.success(res, attempt);
    } catch (error) {
      console.error(res, error);
      return Response.error(res, error);
    }
  },
  register: async (req, res) => {
    try {
      const query = {
        text: "SELECT * FROM users WHERE username = $1 OR email = $2 LIMIT 1",
        values: [req.body.username, req.body.email],
      };
      const currentUser = await pool.query(query);
      if (!currentUser.rows.length) {
        const registerUser = await Auth.register(req);
        if (!registerUser) {
          return Response.error(res, "Something went wrong!");
        } else {
          const token = jwt.sign(
            { user_id: registerUser },
            process.env.ACCESS_TOKEN_KEY
          );
          const url =
            process.env.NODE_ENV === "production"
              ? process.env.PROD_URL
              : process.env.TESTING_URL;

          await Mailer.sendVerif(
            req.body.email,
            `${url}/email-verification?token=${token}`
          );
        }
      } else {
        return Response.error(res, "Username or Email has been registered");
      }

      return Response.success(res, { success: true });
    } catch (error) {
      console.error(error);
      return Response.error(res, "Something went wrong!");
    }
  },
  verify: async (req, res) => {
    try {
      const auth = await Auth.user(req);
      if (!auth) return Response.error(res, "Auth");

      return Response.success(res, auth);
    } catch (error) {
      console.error(res, error);
      return Response.error(res, "Something went wrong!");
    }
  },
  resetPassword: async (req, res) => {
    try {
      const { email } = req.body;
      const query = {
        text: "SELECT * FROM users WHERE email = $1 LIMIT 1",
        values: [email],
      };
      const user = await pool.query(query);
      if (!user.rows.length) {
        return Response.notFound(res, "User not found!");
      }

      const code = Randomstring.make(16).toLocaleUpperCase();
      const queryPw = {
        text: "INSERT INTO reset_password VALUES($1, $2, $3",
        values: [user.rows[0].id, false, code],
      };
      const createResetCode = await pool.query(queryPw);
      if (!createResetCode.rows.length)
        return Response.error(res, "Something went wrong");

      await Mailer.sendCode(email, code);

      return Response.success(
        res,
        "Reset password link has been sent to your email address"
      );
    } catch (error) {
      console.error(res, error);
      return Response.error(res, "Something went wrong");
    }
  },
  changePassword: async (req, res) => {
    try {
      const { old_password, new_password, confirm_password, code } = req.body;

      if (new_password !== confirm_password) {
        return Response.validationError(res, "Password is not match");
      }

      const resetPassword = await pool.query(
        "SELECT * FROM resetPassword WHERE code = $1",
        [code]
      );

      if (!resetPassword.rows.length) {
        return Response.error(res, "Something went wrong");
      }

      return Response.success(res, "Password successfully changed!");
    } catch (error) {
      console.error(res, error);
      return Response.error(res, error);
    }
  },
};

module.exports = AuthController;
