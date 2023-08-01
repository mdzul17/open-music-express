const SongService = require("../Service/SongService");
const Response = require("../Utils/HttpResponse");

const SongController = {
  getSongs: async (req, res) => {
    try {
      const songs = await SongService.getSongs();

      return Response.success(res, songs.rows);
    } catch (error) {
      console.error(error);
      return Response.error(res, "Something went wrong");
    }
  },
  getSongById: async (req, res) => {
    try {
      const song = await SongService.getSongById(req.params.id);

      if (!song.rows.length) {
        return Response.notFound(res, "No song found");
      }

      return Response.success(res, song.rows);
    } catch (error) {
      console.error(error.message);
      return Response.error(res, `Something went wrong`);
    }
  },
  addSong: async (req, res) => {
    try {
      const resp = await SongService.addSong(req.body);

      return Response.success(
        res,
        `Song ID ${resp.rows[0].id} successfully added`
      );
    } catch (error) {
      console.error(error);
      return Response.error(res, `Something went wrong`);
    }
  },
  editSong: async (req, res) => {
    try {
      const resp = await SongService.editSong({ ...req.body, ...req.params });

      if (!resp.rows.length) {
        return Response.notFound(res, "No song found");
      }

      return Response.success(
        res,
        `Song ID ${resp.rows[0].id} successfully updated`
      );
    } catch (error) {
      console.error(error);
      return Response.error(res, `Something went wrong`);
    }
  },
  deleteSong: async (req, res) => {
    try {
      const song = await SongService.deleteSong(req.params.id);

      if (!song.rows.length) {
        return Response.notFound(
          res,
          `Song failed to be deleted, ${id} is not found`
        );
      }

      return Response.success(res, `Song successfully deleted`);
    } catch (error) {
      console.error(error);
      return Response.error(res, `Something went wrong`);
    }
  },
};

module.exports = SongController;
