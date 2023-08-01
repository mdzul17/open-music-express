const { nanoid } = require("nanoid");
const { Pool } = require("pg");

const pool = new Pool();

module.exports = {
  getSongs: async () => {
    const query = {
      text: "SELECT * FROM songs",
    };

    return await pool.query(query);
  },
  getSongById: async (id) => {
    const query = {
      text: "SELECT * FROM songs where id = $1",
      values: [id],
    };

    return await pool.query(query);
  },
  addSong: async (payload) => {
    const id = `song-${nanoid(16)}`;

    const { title, year, genre, performer, duration, albumid } = payload;

    const query = {
      text: "INSERT INTO songs VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING id",
      values: [id, title, year, genre, performer, duration, albumid],
    };

    return await pool.query(query);
  },
  editSong: async (payload) => {
    const { id, title, year, genre, performer, duration, albumid } = payload;

    const query = {
      text: "UPDATE songs SET title = $1, year = $2, genre = $3, performer = $4, duration = $5, albumid = $6 WHERE id = $7 RETURNING id",
      values: [title, year, genre, performer, duration, albumid, id],
    };

    return await pool.query(query);
  },
  deleteSong: async (id) => {
    const query = {
      text: "DELETE FROM songs WHERE id = $1 RETURNING id",
      values: [id],
    };

    return await pool.query(query);
  },
};
