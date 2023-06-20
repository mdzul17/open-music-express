const express = require("express");
const app = express();

const AlbumRoute = require("./api/AlbumRoute");

app.use("/album", AlbumRoute);
app.use("/song", SongRoute);

module.exports = app;
