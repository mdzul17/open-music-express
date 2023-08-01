const Response = require("../Utils/HttpResponse");
const CollaborationService = require("../Service/CollaborationService");

const CollaborationController = {
  addCollaboration: async (req, res) => {
    try {
      const collabs = await CollaborationService.addCollaboration(req.params);

      return Response.success(res, collabs.rows[0].id);
    } catch (error) {
      console.error(error);
      return Response.error(res, "Something went wrong");
    }
  },
  deleteCollaboration: async (req, res) => {
    try {
      const collabs = await CollaborationService.deleteCollaboration(req.body);

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
