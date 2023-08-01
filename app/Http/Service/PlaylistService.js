const { Pool } = require("pg");
const { nanoid } = require("nanoid");

const pool = new Pool();

module.exports = {
  addPlaylist: async (payload) => {
    const { name, owner } = payload;
    const id = `playlist-${nanoid(16)}`;
    const query = {
      text: "INSERT INTO playlists VALUES($1, $2, $3) RETURNING id",
      values: [id, name, owner],
    };

    return await pool.query(query);
  },
  getPlaylists: async () => {
    const query = {
      text: "SELECT * FROM playlists",
    };

    return await pool.query(query);
  },
};
