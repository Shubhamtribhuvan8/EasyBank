const express = require("express");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
const { register, login, Verify, getUser } = require("./login.module");
const LoginRouter = express.Router();

LoginRouter.post("/register", async (req, res) => {
  try {
    let { name, email, password } = req.body;
    let user = await register(name, email, password);
    console.log(user);
    res.send({
      message: "User Registered Successful",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      error: "User went Wrong",
    });
  }
});
LoginRouter.get("/getUser", async (req, res) => {
  try {
    let email = req.query.email;
    let user = await getUser(email);
    console.log(user);
    res.send(user);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

LoginRouter.post("/login", async (req, res) => {
  try {
    let { email, password } = req.body;
    let user = await login(email, password);
    console.log(user);
    res.send({
      message: "Login successfull",
      user,
    });
  } catch (error) {
    console.log(error + "Please check Login Crediantials");
    res.status(500).send({
      error: error,
    });
  }
});
function decryptToken(token) {
  try {
    const decryptedToken = jwt.verify(token, process.env.JWT_SECRET);
    return decryptedToken;
  } catch (error) {
    throw new Error("Token decryption failed");
  }
}

LoginRouter.post("/verify", async (req, res) => {
  try {
    const { token } = req.body;
    const decryptedToken = decryptToken(token);
    const user = await Verify(decryptedToken);
    res.send({ user });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});
module.exports = LoginRouter;
