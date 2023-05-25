const User = require("../Model/user.model");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

async function register(name, email, password) {
  let userFlag = await User.findOne({ email });
  if (userFlag) {
    throw new Error("User already exists");
  }

  let newUser = new User({
    name,
    email,
    password,
  });

  let savedUser = await newUser.save();

  let userObj = savedUser.toJSON();
  delete userObj.password;
  return userObj;
}
async function login(email, password) {
  let user = await User.findOne({ email });

  if (!user) {
    throw new Error("User does not exist");
  }

  console.log("Stored password:", user.password);
  console.log("Provided password:", password);

  if (user.password !== password) {
    throw new Error("Incorrect password");
  }

  let obj = {
    _id: user._id,
    name: user.name,
    email: user.email,
  };

  let token = generateToken(obj);
  let userObj = user.toJSON();
  delete userObj.password;

  return {
    token,
    user: userObj,
  };
}

async function Verify(token) {
  let user = jwt.verify(token, process.env.JWT_SECRET);
  return user;
}

function generateToken(payload) {
  let token = jwt.sign(payload, process.env.JWT_SECRET);
  return token;
}

async function getUser(email) {
  let user = await User.findOne({ email });
  if (!user) {
    throw new Error("User not found");
  }
  let userObj = user ? user.toObject() : null;
  if (userObj) {
    delete userObj.password;
  }
  return userObj;
}

module.exports = { register, login, Verify, getUser };
