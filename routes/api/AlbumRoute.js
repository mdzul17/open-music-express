const Router = require("express").Router();
const ApiAuth = require("../../app/Http/Middleware/ApiAuth");
const AlbumController = require("../../app/Http/Controller/AlbumController");
const Multer = require("../../app/Http/Middleware/Multer");

Router.get("/", AlbumController.getAlbums);
Router.get("/:id", AlbumController.getAlbumById);
Router.post("/", AlbumController.addAlbum);
Router.post(
  "/:id/cover",
  [Multer.storage.single("file"), ApiAuth],
  AlbumController.addAlbumCover
);
Router.put("/:id", AlbumController.editAlbum);
Router.delete("/:id", AlbumController.deleteAlbum);

module.exports = Router;
