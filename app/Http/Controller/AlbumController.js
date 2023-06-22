const { nanoid } = require("nanoid");
const path = require("path");
const fs = require("fs");
const Response = require("../Utils/HttpResponse");
const { Pool } = require("pg");
const pool = new Pool();

const AlbumController = {
  getAlbums: async (req, res) => {
    try {
      const query = {
        text: "SELECT * FROM albums",
      };

      const albums = await pool.query(query);

      return Response.success(res, albums.rows);
    } catch (error) {
      console.error(error);
      return Response.error(res, "Something went wrong");
    }
  },
  getAlbumById: async (req, res) => {
    try {
      const { id } = req.params;

      const query = {
        text: "SELECT * FROM albums where id = $1",
        values: [id],
      };

      const album = await pool.query(query);

      if (!album.rows.length) {
        return Response.notFound(res, "No albums found");
      }

      return Response.success(res, album.rows);
    } catch (error) {
      console.error(error.message);
      return Response.error(res, `Something went wrong`);
    }
  },
  addAlbum: async (req, res) => {
    try {
      const id = `album-${nanoid(16)}`;
      const { name, year } = req.body;

      const query = {
        text: "INSERT INTO albums VALUES($1, $2, $3) RETURNING id",
        values: [id, name, year],
      };

      const resp = await pool.query(query);

      return Response.success(
        res,
        `Album ID ${resp.rows[0].id} successfully added`
      );
    } catch (error) {
      console.error(error);
      return Response.error(res, `Something went wrong`);
    }
  },
  editAlbum: async (req, res) => {
    try {
      const { id } = req.params;
      const { name, year } = req.body;

      const query = {
        text: "UPDATE albums SET name = $1, year = $2 WHERE id = $3 RETURNING id",
        values: [name, year, id],
      };

      const resp = await pool.query(query);

      if (!resp.rows.length) {
        return Response.notFound(res, "No albums found");
      }

      return Response.success(
        res,
        `Album ID ${resp.rows[0].id} successfully updated`
      );
    } catch (error) {
      console.error(error);
      return Response.error(res, `Something went wrong`);
    }
  },
  deleteAlbum: async (req, res) => {
    try {
      const { id } = req.params;

      const query = {
        text: "DELETE FROM albums WHERE id = $1 RETURNING id",
        values: [id],
      };

      const album = await pool.query(query);

      if (!album.rows.length) {
        return Response.notFound(
          res,
          `Album failed to be deleted, ${id} is not found`
        );
      }

      return Response.success(res, `Album successfully deleted`);
    } catch (error) {
      console.error(error);
      return Response.error(res, `Something went wrong`);
    }
  },
  addAlbumCover: async (req, res) => {
    try {
      const cover = req.file;
      const { id } = req.params;

      const coverPath = await pool.query(
        'UPDATE albums SET "coverUrl" = $1 WHERE id = $2 RETURNING id',
        [cover.path, id]
      );

      if (!coverPath.rows[0]) {
        return Response.error(res, "Failed to add cover to album");
      }

      return Response.success(res, coverPath.rows[0].id);
    } catch (error) {
      console.error(error);
      return Response.error(res, "Something went wrong");
    }
  },
};

module.exports = AlbumController;
