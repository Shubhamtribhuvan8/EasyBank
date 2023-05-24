const express = require("express");
const dotenv = require("dotenv");
const connection = require("./DB/db");
const app = express();
// app.use(express.json());
dotenv.config();
// const router = require('./Routes/router');
// app.use('/api', router);
const port = process.env.PORT || 8000;
app.listen(port, () => {
  try {
    connection();
    console.log("Port is running on:" + port);
  } catch (error) {
    console.log(error);
  }
});
