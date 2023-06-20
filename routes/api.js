const express = require("express");
const app = express();

const AlbumRoute = require("./api/AlbumRoute");
const SongRoute = require("./api/SongRoute");
const UserRoute = require("./api/UserRoute");

app.use("/album", AlbumRoute);
app.use("/song", SongRoute);
app.use("/user", UserRoute);

module.exports = app;
