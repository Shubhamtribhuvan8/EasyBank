const express = require("express");
const AccountRouter = express.Router();
const Account = require("../Model/account.model");
AccountRouter.post("/deposit", async (req, res) => {
  try {
    const { name, amount } = req.body;
    if (isNaN(amount)) {
      return res.status(400).json({ message: "Invalid amount" });
    }
    let user = await Account.findOne({ name });
    if (!user) {
      const newAccount = new Account({
        name: name,
        balance: parseFloat(amount),
      });
      user = await newAccount.save();
    } else {
      user.balance += parseFloat(amount);
      await user.save();
    }
    return res.json(user);
  } catch (error) {
    console.error("Error during deposit:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
});

AccountRouter.get("/details", async (req, res) => {
  try {
    const accounts = await Account.find();
    return res.json(accounts);
  } catch (error) {
    console.error("Error retrieving account details:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
});
AccountRouter.get("/transactionId:", async (req, res) => {
  try {
    const transactionId = req.params.transactionId;
    const account = await Account.findOne({ transactionId });
    if (!account) {
      return res.status(404).json({ message: "Account not found" });
    }

    return res.json(account);
  } catch (error) {
    console.error("Error finding account:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
});

AccountRouter.post("/withdraw", async (req, res) => {
  try {
    const { name, amount } = req.body;
    if (isNaN(amount)) {
      return res.status(400).json({ message: "Invalid amount" });
    }
    const user = await Account.findOne({ name });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    if (user.balance < parseFloat(amount)) {
      return res.status(400).json({ message: "Insufficient balance" });
    }
    user.balance -= parseFloat(amount);
    await user.save();
    return res.json({
      message: "Withdrawal successful",
      balance: user.balance,
    });
  } catch (error) {
    console.error("Error during withdrawal:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = AccountRouter;
