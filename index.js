require("dotenv").config();

let express = require("express");
let app = express();
let routeApi = require("./routes/api");
let bodyParser = require("body-parser");
const cors = require("cors");

const port = process.env.PORT || 1337;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use("/api", routeApi);

app.listen(port, () => console.log("listening on port " + port));

module.exports = app;
