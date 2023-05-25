const mongoose = require("mongoose");
const accountschema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  balance: {
    type: Number,
    default: 0,
  },
});

const Account = mongoose.model("Account", accountschema);
module.exports = Account;
