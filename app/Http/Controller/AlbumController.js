const { nanoid } = require("nanoid");
const path = require("path");
const fs = require("fs");
const Response = require("../Utils/HttpResponse");
const { Pool } = require("pg");
const autoBind = require("auto-bind");

const pool = new Pool();

const AlbumController = {
  getAlbums: async (req, res) => {
    try {
      const query = {
        text: "SELECT * FROM album",
      };

      const albums = pool.query(query);

      Response.success(res, albums);
    } catch (error) {
      console.error(error);
      return Response.error(res, "Something went wrong");
    }
  },
  addAlbum: async (req, res) => {
    try {
      const id = `album-${nanoid(16)}`;
      const { name, year } = req.body;

      const query = {
        text: "INSERT INTO album VALUES($1, $2, $3) RETURNING id",
        values: [id, name, year],
      };

      const resp = await pool.query(query);

      Response.success(res, `Album ID ${resp.rows[0].id} successfully added`);
    } catch (error) {
      console.error(error);
      Response.error(res, `Album failed to be added: ${error.message}`);
    }
  },
};

module.exports = AlbumController;
