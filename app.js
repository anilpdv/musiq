// : loading the modules needed
const express = require("express");
const expressOasGenerator = require("express-oas-generator");
const path = require("path");
const cors = require("cors");

// : routes
const searchRoute = require("./routes/search");

const app = express();

// : oas setup
expressOasGenerator.init(app, {});
app.use(cors());

// : middle ware
app.use("/api", searchRoute);

// : listening to the port
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("server is started and listening on the port 3000");
});
