const Router = require("express").Router();
const AlbumController = require("../../app/Http/Controller/AlbumController");

Router.get("/", AlbumController.getAlbums);
Router.get("/:id", AlbumController.getAlbumById);
Router.post("/", AlbumController.addAlbum);
Router.put("/:id", AlbumController.editAlbum);
Router.delete("/:id", AlbumController.deleteAlbum);

module.exports = Router;
