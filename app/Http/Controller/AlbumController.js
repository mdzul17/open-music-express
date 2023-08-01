const AlbumService = require("../Service/AlbumService");
const Response = require("../Utils/HttpResponse");

const AlbumController = {
  getAlbums: async (req, res) => {
    try {
      const albums = await AlbumService.getAlbums();

      return Response.success(res, albums.rows);
    } catch (error) {
      console.error(error);
      return Response.error(res, "Something went wrong");
    }
  },
  getAlbumById: async (req, res) => {
    try {
      const album = await AlbumService.getAlbumById(req.params.id);

      if (!album.rows.length) {
        return Response.notFound(res, "No albums found");
      }

      return Response.success(res, album.rows);
    } catch (error) {
      console.error(error.message);
      return Response.error(res, `Something went wrong`);
    }
  },
  addAlbum: async (req, res) => {
    try {
      const resp = await AlbumService.addAlbum({ ...req.body });

      return Response.success(
        res,
        `Album ID ${resp.rows[0].id} successfully added`
      );
    } catch (error) {
      console.error(error);
      return Response.error(res, `Something went wrong`);
    }
  },
  editAlbum: async (req, res) => {
    try {
      const resp = await AlbumService.editAlbum({ ...req.params, ...req.body });

      if (!resp.rows.length) {
        return Response.notFound(res, "No albums found");
      }

      return Response.success(
        res,
        `Album ID ${resp.rows[0].id} successfully updated`
      );
    } catch (error) {
      console.error(error);
      return Response.error(res, `Something went wrong`);
    }
  },
  deleteAlbum: async (req, res) => {
    try {
      const album = await AlbumService.deleteAlbum(req.params.id);

      if (!album.rows.length) {
        return Response.notFound(
          res,
          `Album failed to be deleted, ${id} is not found`
        );
      }

      return Response.success(res, `Album successfully deleted`);
    } catch (error) {
      console.error(error);
      return Response.error(res, `Something went wrong`);
    }
  },
  addAlbumCover: async (req, res) => {
    try {
      const coverPath = await AlbumService.addAlbumCover({
        cover: req.file,
        ...req.params,
      });

      if (!coverPath.rows[0]) {
        return Response.error(res, "Failed to add cover to album");
      }

      return Response.success(res, coverPath.rows[0].id);
    } catch (error) {
      console.error(error);
      return Response.error(res, "Something went wrong");
    }
  },
};

module.exports = AlbumController;
