const { nanoid } = require("nanoid");
const { Pool } = require("pg");
const pool = new Pool();

module.exports = {
  addCollaboration: async (payload) => {
    const { albumId, userId } = payload;

    const id = `collab-${nanoid(16)}`;
    const query = {
      text: "INSERT INTO collaborations VALUES ($1, $2, $3) RETURNING id",
      values: [id, albumId, userId],
    };

    return await pool.query(query);
  },
  deleteCollaboration: async (payload) => {
    const { albumId, userId } = payload;

    const query = {
      text: "DELETE FROM collaborations WHERE album_id = $1 and user_id = $2 RETURNING id",
      values: [albumId, userId],
    };

    return await pool.query(query);
  },
};
