const { nanoid } = require("nanoid");
const path = require("path");
const fs = require("fs");
const Response = require("../Utils/HttpResponse");
const { Pool } = require("pg");
const bcrypt = require("bcrypt");

const pool = new Pool();

const UserController = {
  getUsers: async (req, res) => {
    try {
      const query = {
        text: "SELECT * FROM users",
      };

      const users = await pool.query(query);

      return Response.success(res, users.rows);
    } catch (error) {
      console.error(error);
      return Response.error(res, "Something went wrong");
    }
  },
  getUserById: async (req, res) => {
    try {
      const { id } = req.params;

      const query = {
        text: "SELECT * FROM users where id = $1",
        values: [id],
      };

      const user = await pool.query(query);

      if (!user.rows.length) {
        return Response.notFound(res, "No user found");
      }

      return Response.success(res, user.rows);
    } catch (error) {
      console.error(error.message);
      return Response.error(res, `Something went wrong`);
    }
  },
  addUser: async (req, res) => {
    try {
      const id = `user-${nanoid(16)}`;
      const { username, fullname, password, email } = req.body;

      const hashedPassword = await bcrypt.hash(password, 10);

      const query = {
        text: "INSERT INTO users VALUES($1, $2, $3, $4, $5) RETURNING id",
        values: [id, username, hashedPassword, fullname, email],
      };

      const resp = await pool.query(query);

      return Response.success(
        res,
        `User ID ${resp.rows[0].id} successfully added`
      );
    } catch (error) {
      console.error(error);
      return Response.error(res, `Something went wrong`);
    }
  },
  editUser: async (req, res) => {
    try {
      const { id } = req.params;
      const { username, fullname, password, email } = req.body;
      const hashedPassword = await bcrypt.hash(password, 10);

      const query = {
        text: "UPDATE users SET username = $1, fullname = $2, password = $3, email = $4 WHERE id = $5 RETURNING id",
        values: [username, fullname, hashedPassword, email, id],
      };

      const resp = await pool.query(query);

      if (!resp.rows.length) {
        return Response.notFound(res, "No user found");
      }

      return Response.success(
        res,
        `User ID ${resp.rows[0].id} successfully updated`
      );
    } catch (error) {
      console.error(error);
      return Response.error(res, `Something went wrong`);
    }
  },
  deleteUser: async (req, res) => {
    try {
      const { id } = req.params;

      const query = {
        text: "DELETE FROM users WHERE id = $1 RETURNING id",
        values: [id],
      };

      const user = await pool.query(query);

      if (!user.rows.length) {
        return Response.notFound(
          res,
          `User failed to be deleted, ${id} is not found`
        );
      }

      return Response.success(res, `User successfully deleted`);
    } catch (error) {
      console.error(error);
      return Response.error(res, `Something went wrong`);
    }
  },
};

module.exports = UserController;
