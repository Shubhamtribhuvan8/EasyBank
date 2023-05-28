/* eslint-disable no-dupe-keys */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Button, TextField, CircularProgress } from "@mui/material";
import Logout from "../BankLogin/Logout";

export default function TransactionPage() {
  const [user, setUser] = useState(null);
  const [data, setData] = useState(null);
  const [depositAmount, setDepositAmount] = useState("");
  const [withdrawAmount, setWithdrawAmount] = useState("");
  const [balanceAfterDeposit, setBalanceAfterDeposit] = useState(null);
  const [isDepositing, setIsDepositing] = useState(false);
  const [isWithdrawing, setIsWithdrawing] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("papa");
    if (token) {
      axios
        .post("https://precious-fashion-dog.cyclic.app/bank/verify", { token })
        .then((response) => {
          const user = response.data.user;
          setUser(user);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);

  useEffect(() => {
    if (user) {
      axios
        .get("https://precious-fashion-dog.cyclic.app/account/details")
        .then((response) => {
          const accountDetails = response.data;
          const currentUserAccount = accountDetails.find(
            (account) => account.name === user.name
          );
          if (currentUserAccount) {
            setData(currentUserAccount);
          } else {
            console.log("User account not found");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [user]);

  const handleDeposit = async () => {
    if (!depositAmount || isNaN(depositAmount) || depositAmount <= 0) {
      toast.error("Please enter a valid deposit amount.");
      return;
    }

    setIsDepositing(true);

    try {
      const response = await axios.post(
        "https://precious-fashion-dog.cyclic.app/account/deposit",
        {
          name: user.name,
          amount: depositAmount,
        }
      );
      setData(response.data);
      setBalanceAfterDeposit(response.data.balance);
      toast.success("Deposit successful!");
      setDepositAmount("");
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Please try again.");
    }

    setIsDepositing(false);
  };

  const handleWithdraw = async () => {
    if (!withdrawAmount || isNaN(withdrawAmount) || withdrawAmount <= 0) {
      toast.error("Please enter a valid withdrawal amount.");
      return;
    }

    setIsWithdrawing(true);

    try {
      const response = await axios.post(
        "https://precious-fashion-dog.cyclic.app/account/withdraw",
        {
          name: user.name,
          amount: withdrawAmount,
        }
      );
      setData(response.data);
      toast.success("Withdrawal successful!");
      setWithdrawAmount("");
    } catch (error) {
      console.error(error);
      toast.error(
        "Insufficient funds. Please enter a valid withdrawal amount."
      );
    }

    setIsWithdrawing(false);
  };

  return (
    <div>
      <h2>Transaction Page</h2>
      {user && (
        <div
          style={{
            display: "flex",
            gap: "92px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h5 style={{ textDecoration: "underline" }}>
            Account Holder Name: {user.name}
          </h5>
          <h5 style={{ textDecoration: "underline" }}>
            Account Holder Email: {user.email}
          </h5>
        </div>
      )}
      <br />
      {data && (
        <div
          style={{
            boxShadow: "0 0 10px black",
            padding: "10px",
            margin: "10px",
            width: "28rem",
            margin: "0 auto",
            backgroundColor: "floralwhite",
          }}
        >
          <h4>Balance: {data.balance}.00 Rs</h4>
          {balanceAfterDeposit && (
            <h4>After Deposit: {balanceAfterDeposit}.00 Rs</h4>
          )}
        </div>
      )}
      <br />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "12px",
        }}
      >
        <div>
          <h4>Deposit Amount:</h4>
          <TextField
            type="number"
            id="depositAmount"
            placeholder="Deposit Amount"
            value={depositAmount}
            onChange={(e) => setDepositAmount(e.target.value)}
          />
          <br />
          <Button onClick={handleDeposit} variant="outlined">
            {isDepositing ? <CircularProgress size={20} /> : "Deposit"}
          </Button>
        </div>
        <div>
          <h4>Withdraw Amount:</h4>
          <TextField
            type="number"
            id="withdrawAmount"
            placeholder="Withdraw Amount"
            value={withdrawAmount}
            onChange={(e) => setWithdrawAmount(e.target.value)}
          />
          <br />
          <Button onClick={handleWithdraw} variant="outlined">
            {isWithdrawing ? <CircularProgress size={20} /> : "Withdraw"}
          </Button>
        </div>
      </div>
      <br />
      <Logout />
    </div>
  );
}
