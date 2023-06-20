const express = require("express");
const app = express();

const AlbumRoute = require("./api/AlbumRoute");

app.use("/album", AlbumRoute);

module.exports = app;
