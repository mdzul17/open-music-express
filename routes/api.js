const express = require("express");
const app = express();

const AlbumRoute = require("./api/AlbumRoute");
const SongRoute = require("./api/SongRoute");
const UserRoute = require("./api/UserRoute");
const AuthRoute = require("./api/AuthRoute");
const PlaylistRoute = require("./api/PlaylistRoute");

app.use("/albums", AlbumRoute);
app.use("/songs", SongRoute);
app.use("/users", UserRoute);
app.use("/auth", AuthRoute);
app.use("/playlist", PlaylistRoute);

module.exports = app;
