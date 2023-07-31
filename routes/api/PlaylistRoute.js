const Router = require("express").Router();
const PlaylistController = require("../../app/Http/Controller/PlaylistController");
const ApiAuth = require("../../app/Http/Middleware/ApiAuth");

Router.post("/", [ApiAuth], PlaylistController.addPlaylist)
  .get("/", [ApiAuth], PlaylistController.getPlaylists)
  .post("/:id/songs", [ApiAuth], PlaylistController.addSongPlaylist)
  .get("/:id/songs", [ApiAuth], PlaylistController.getSongPlaylist)
  .delete("/:id", [ApiAuth], PlaylistController.deletePlaylist)
  .delete("/:id/songs", [ApiAuth], PlaylistController.deleteSongPlaylist);

module.exports = Router;
