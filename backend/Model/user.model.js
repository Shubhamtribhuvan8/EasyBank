const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  //   accessToken: { type: String, required: true },
  // role: { type: String, enum: ["customer", "banker"], required: true },
  createdAt: { type: Date, default: Date.now },
});

let UserLogin = mongoose.model("User", userSchema);
module.exports = UserLogin;
