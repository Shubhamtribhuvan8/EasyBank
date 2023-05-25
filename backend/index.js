const express = require("express");
const dotenv = require("dotenv");
const connection = require("./DB/db");
const LoginRouter = require("./Controllers/Router.controller");
const routerss = require("./Controllers/user.controller");
const cors = require("cors");
const AccountRouter = require("./Controllers/Account.module");
const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();
app.use("/bank", LoginRouter);
app.use("/banklogin", routerss);
app.use("/account", AccountRouter);
const port = process.env.PORT || 8000;
app.listen(port, () => {
  try {
    connection();
    console.log("Port is running on:" + port);
  } catch (error) {
    console.log(error);
  }
});
