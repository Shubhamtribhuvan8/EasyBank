const mongoose = require("mongoose");

const userLoginSchema = new mongoose.Schema(
  {
    username: {
      type: String,
    },
    password: {
      type: String,
    },
  },
  { timestamps: true }
);

const LoginData = mongoose.model("userlogin", userLoginSchema);
module.exports = LoginData;
