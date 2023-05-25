const express = require("express");
const app = express.Router();
const Account = require("../Model/account.model");

app.post("/deposit", async (req, res) => {
  try {
    const { userId, amount } = req.body;
    const user = await Account.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    user.balance += amount;
    await user.save();
    return res.json({ message: "Deposit successful" });
  } catch (error) {
    console.error("Error during deposit:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
});

app.post("/withdraw", async (req, res) => {
  try {
    const { userId, amount } = req.body;
    const user = await Account.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    if (amount > user.balance) {
      return res.status(400).json({ message: "Insufficient Funds" });
    }
    user.balance -= amount;
    await user.save();
    return res.json({ message: "Withdrawal successful" });
  } catch (error) {
    console.error("Error during withdrawal:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
});
