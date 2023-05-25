const UserLogin = require("../Model/user.model");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
async function register(name, email, password) {
  let userFlag = await UserLogin.findOne({ email });

  if (userFlag) {
    return new Error("User already exist");
  }

  let obj = {
    name,
    email,
    password,
  };

  let user = await UserLogin.create(obj);
  let dta = user.toJSON();
  delete dta.password;
  return dta;
}

async function login(email, password) {
  let user = await UserLogin.findOne({ email: email });
  if (!user) {
    throw new Error("User does not Exist");
  }
  if (user.password.localeCompare(password)) {
    throw new Error("User password is Wrong");
  }
  let obj = {
    _id: user._id,
    name: user.name,
    email: user.email,
  };
  let token = genrateToken(obj);
  let dta = user.toJSON();
  delete dta.password;
  console.log(dta);
  return {
    token,
    user: dta,
  };
}

async function Verify(token) {
  let user = jwt.verify(token, process.env.JWT_SECRET);
  return user;
}

function genrateToken(payload) {
  let token = jwt.sign(payload, process.env.JWT_SECRET);
  return token;
}

async function getUser(email) {
  let user = await UserLogin.findOne({ email });
  console.log(user);
  let dta = user.toJSON();
  delete dta.password;
  return dta;
}

module.exports = { register, login, Verify, getUser };
