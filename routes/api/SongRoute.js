const Router = require("express").Router();
const SongController = require("../../app/Http/Controller/SongController");

Router.get("/", SongController.getSongs);
Router.get("/:id", SongController.getSongById);
Router.post("/", SongController.addSong);
Router.put("/:id", SongController.editSong);
Router.delete("/:id", SongController.deleteSong);

module.exports = Router;
