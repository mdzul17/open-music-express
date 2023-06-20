const { nanoid } = require("nanoid");
const path = require("path");
const fs = require("fs");
const Response = require("../Utils/HttpResponse");
const { Pool } = require("pg");

const pool = new Pool();

const SongController = {
  getSongs: async (req, res) => {
    try {
      const query = {
        text: "SELECT * FROM song",
      };

      const songs = await pool.query(query);

      return Response.success(res, songs.rows);
    } catch (error) {
      console.error(error);
      return Response.error(res, "Something went wrong");
    }
  },
  getSongById: async (req, res) => {
    try {
      const { id } = req.params;

      const query = {
        text: "SELECT * FROM song where id = $1",
        values: [id],
      };

      const song = await pool.query(query);

      if (!song.rows.length) {
        return Response.notFound(res, "No song found");
      }

      return Response.success(res, song.rows);
    } catch (error) {
      console.error(error.message);
      return Response.error(res, `Something went wrong`);
    }
  },
  addSong: async (req, res) => {
    try {
      const id = `song-${nanoid(16)}`;
      const { title, year, genre, performer, duration, albumid } = req.body;

      const query = {
        text: "INSERT INTO song VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING id",
        values: [id, title, year, genre, performer, duration, albumid],
      };

      const resp = await pool.query(query);

      return Response.success(
        res,
        `Song ID ${resp.rows[0].id} successfully added`
      );
    } catch (error) {
      console.error(error);
      return Response.error(res, `Something went wrong`);
    }
  },
  editSong: async (req, res) => {
    try {
      const { id } = req.params;
      const { title, year, genre, performer, duration, albumid } = req.body;

      const query = {
        text: "UPDATE song SET title = $1, year = $2, genre = $3, performer = $4, duration = $5, albumid = $6 WHERE id = $7 RETURNING id",
        values: [title, year, genre, performer, duration, albumid, id],
      };

      const resp = await pool.query(query);

      if (!resp.rows.length) {
        return Response.notFound(res, "No song found");
      }

      return Response.success(
        res,
        `Song ID ${resp.rows[0].id} successfully updated`
      );
    } catch (error) {
      console.error(error);
      return Response.error(res, `Something went wrong`);
    }
  },
  deleteSong: async (req, res) => {
    try {
      const { id } = req.params;

      const query = {
        text: "DELETE FROM song WHERE id = $1 RETURNING id",
        values: [id],
      };

      const song = await pool.query(query);

      if (!song.rows.length) {
        return Response.notFound(
          res,
          `Song failed to be deleted, ${id} is not found`
        );
      }

      return Response.success(res, `Song successfully deleted`);
    } catch (error) {
      console.error(error);
      return Response.error(res, `Something went wrong`);
    }
  },
};

module.exports = SongController;
