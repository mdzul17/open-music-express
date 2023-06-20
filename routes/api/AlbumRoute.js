const Router = require("express").Router();
const AlbumController = require("../../app/Http/Controller/AlbumController");

Router.get("/", AlbumController.getAlbums);
Router.post("/", AlbumController.addAlbum);
// Router.put("/:id", AlbumController.editAlbum);
// Router.delete("/:id", AlbumController.deleteAlbum);

module.exports = Router;
