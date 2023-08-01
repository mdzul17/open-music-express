const Response = require("../Utils/HttpResponse");
const Auth = require("../../Providers/Auth");
const Randomstring = require("../Utils/RandomString");
const bcrypt = require("bcrypt");
const Mailer = require("../Service/Mailer");
const jwt = require("jsonwebtoken");
const { Pool } = require("pg");
const { nanoid } = require("nanoid");

const pool = new Pool();

const PlaylistController = {
  addPlaylist: async (req, res) => {
    try {
      const { name, owner } = req.body;
      const id = `playlist-${nanoid(16)}`;

      const query = {
        text: "INSERT INTO playlists VALUES($1, $2, $3) RETURNING id",
        values: [id, name, owner],
      };

      const resp = await pool.query(query);

      return Response.success(
        res,
        `Playlist ID ${resp.rows[0].id} added successfully`
      );
    } catch (error) {
      console.error(res, error);
      return Response.error(res, error);
    }
  },
  getPlaylists: async (req, res) => {
    try {
      const query = {
        text: "SELECT * FROM playlists",
      };

      const playlists = await pool.query(query);

      return Response.success(res, playlists.rows);
    } catch (error) {
      console.error(error);
      return Response.error(res, "Something went wrong!");
    }
  },
  addSongPlaylist: async (req, res) => {},
  getSongPlaylist: async (req, res) => {},
  deletePlaylist: async (req, res) => {},
  deleteSongPlaylist: async (req, res) => {},
};

module.exports = PlaylistController;
