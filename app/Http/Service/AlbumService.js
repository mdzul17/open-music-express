const { nanoid } = require("nanoid");
const { Pool } = require("pg");
const pool = new Pool();

module.exports = {
  getAlbums: async () => {
    const query = {
      text: "SELECT * FROM albums",
    };

    return await pool.query(query);
  },

  getAlbumById: async (id) => {
    const query = {
      text: "SELECT * FROM albums WHERE id = $1",
      values: [id],
    };

    return await pool.query(query);
  },
  addAlbum: async (payload) => {
    const id = `album-${nanoid(16)}`;
    const { name, year } = payload;

    const query = {
      text: "INSERT INTO albums VALUES($1, $2, $3) RETURNING id",
      values: [id, name, year],
    };

    return await pool.query(query);
  },
  editAlbum: async (payload) => {
    const { id, name, year } = payload;

    const query = {
      text: "UPDATE albums SET name = $1, year = $2 WHERE id = $3 RETURNING id",
      values: [name, year, id],
    };

    return await pool.query(query);
  },
  deleteAlbum: async (id) => {
    const query = {
      text: "DELETE FROM albums WHERE id = $1 RETURNING id",
      values: [id],
    };

    return await pool.query(query);
  },
  addAlbumCover: async (payload) => {
    const { cover, id } = payload;

    const query = {
      text: 'UPDATE albums SET "coverUrl" = $1 WHERE id = $2 RETURNING id',
      values: [cover.path, id],
    };

    return await pool.query(query);
  },
};
