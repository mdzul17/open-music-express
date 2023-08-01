const multer = require("multer");
const Datauri = require("datauri");
const path = require("path");
const rootPath = require("app-root-path");

const memoryStorage = multer.memoryStorage();
const diskStorage = multer.diskStorage({
  destination: "storage",
  filename: function (req, file, cb) {
    cb(
      null,
      file.originalname + "-" + Date.now() + "." + file.mimetype.split("/")[1]
    );
  },
});

const multerUploads = multer({ storage: memoryStorage }).single("image");
const localUpload = multer({ dest: `${rootPath}/public` });
const storage = multer({
  storage: diskStorage,
  dest: `${rootPath}/storage`,
  limits: {
    fileSize: 52428800,
  },
});

const dUri = new Datauri();

/**
 * @description This function converts the buffer to data url
 * @param {Object} req containing the field object
 * @returns {String} The data url from the string buffer
 */

const dataUri = (req) =>
  dUri.format(path.extname(req.file.originalname).toString(), req.file.buffer);

module.exports = { multerUploads, localUpload, storage, dataUri };
