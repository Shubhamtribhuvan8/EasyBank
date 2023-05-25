const experess = require("express");
const routerss = experess.Router();
const UserLogin = require("../Model/login.model");

routerss.post("/register", async (req, res) => {
  try {
    const userDatafinal = await UserLogin.find();
    return res.status(200).send(userDatafinal);
  } catch (error) {
    res.status(500).send(error);
  }
});

routerss.post("/login", async (req, res) => {
  try {
    const userDatafinal = await UserLogin.create(req.body);
    return res.status(200).send(userDatafinal);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = routerss;
