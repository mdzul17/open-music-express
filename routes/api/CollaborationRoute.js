const Router = require("express").Router();
const CollaborationController = require("../../app/Http/Controller/CollaborationController");
const ApiAuth = require("../../app/Http/Middleware/ApiAuth");

Router.post("/", [ApiAuth], CollaborationController.addCollaboration).delete(
  "/",
  [ApiAuth],
  CollaborationController.deleteCollaboration
);

module.exports = Router;
