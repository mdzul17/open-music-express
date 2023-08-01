const Response = require("../Utils/HttpResponse");
const PlaylistService = require("../Service/PlaylistService");

const PlaylistController = {
  addPlaylist: async (req, res) => {
    try {
      const resp = await PlaylistService.addPlaylist(req.body);

      return Response.success(
        res,
        `Playlist ID ${resp.rows[0].id} added successfully`
      );
    } catch (error) {
      console.error(res, error);
      return Response.error(res, error);
    }
  },
  getPlaylists: async (req, res) => {
    try {
      const playlists = await PlaylistService.getPlaylists();

      return Response.success(res, playlists.rows);
    } catch (error) {
      console.error(error);
      return Response.error(res, "Something went wrong!");
    }
  },
  addSongPlaylist: async (req, res) => {},
  getSongPlaylist: async (req, res) => {},
  deletePlaylist: async (req, res) => {},
  deleteSongPlaylist: async (req, res) => {},
};

module.exports = PlaylistController;
