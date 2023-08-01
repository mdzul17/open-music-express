const { nanoid } = require("nanoid");
const Response = require("../Utils/HttpResponse");
const { Pool } = require("pg");
const pool = new Pool();

const CollaborationController = {
  addCollaboration: async (req, res) => {
    try {
      const { albumId, userId } = req.body;

      const id = `collab-${nanoid(16)}`;

      const query = {
        text: "INSERT INTO collaborations VALUES ($1, $2, $3) RETURNING id",
        values: [id, albumId, userId],
      };

      const collabs = await pool.query(query);

      return Response.success(res, collabs.rows[0].id);
    } catch (error) {
      console.error(error);
      return Response.error(res, "Something went wrong");
    }
  },
  deleteCollaboration: async (req, res) => {
    try {
      const { albumId, userId } = req.body;

      const query = {
        text: "DELETE FROM collaborations WHERE album_id = $1 and user_id = $2 RETURNING id",
        values: [albumId, userId],
      };

      const collabs = await pool.query(query);

      if (!collabs.rows.length) {
        return Response.notFound(res, `Collaborations failed to be deleted`);
      }

      return Response.success(res, `Collaborations successfully deleted`);
    } catch (error) {
      console.error(error);
      return Response.error(res, `Something went wrong`);
    }
  },
};

module.exports = CollaborationController;
