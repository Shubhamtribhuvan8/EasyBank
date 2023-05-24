const express = require("express");
const dotenv = require("dotenv");
const connection = require("./DB/db");
const routerss = require("./Controllers/router");
const app = express();
// app.use(express.json());
dotenv.config();
app.use("/api", routerss);
const port = process.env.PORT || 8000;
app.listen(port, () => {
  try {
    connection();
    console.log("Port is running on:" + port);
  } catch (error) {
    console.log(error);
  }
});
