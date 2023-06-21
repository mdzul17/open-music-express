const express = require("express");
const app = express();

const AlbumRoute = require("./api/AlbumRoute");
const SongRoute = require("./api/SongRoute");
const UserRoute = require("./api/UserRoute");
const AuthRoute = require("./api/AuthRoute");

app.use("/albums", AlbumRoute);
app.use("/songs", SongRoute);
app.use("/users", UserRoute);
app.use("/auth", AuthRoute);

module.exports = app;
