import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Button } from "@mui/material";
import Logout from "../BankLogin/Logout";
export default function TransactionPage() {
  const [user, setUser] = useState(null);
  const [data, setData] = useState([]);

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
          let isUserFound = false;
          for (let i = 0; i < accountDetails.length; i++) {
            if (user.name === accountDetails[i].name) {
              setData(accountDetails[i]);
              // console.log(accountDetails[i]);
              isUserFound = true;
              break;
            }
          }

          if (!isUserFound) {
            console.log("User not found");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [user]);
  const [depositAmount, setDepositAmount] = useState("");
  const [withdrawAmount, setWithdrawAmount] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [balanced, setBalance] = useState([]);
  const handleDeposit = async () => {
    try {
      const response = await axios.post(
        "https://precious-fashion-dog.cyclic.app/account/deposit",
        {
          name: user.name,
          amount: depositAmount,
        }
      );
      setBalance(response.data.balance);
      setData(response.data.balance);
      toast.success("Deposit Done!");
    } catch (error) {
      console.error(error);
      toast.error("Something went Wrong!");
    }
  };
  const handleWithdraw = async () => {
    try {
      const response = await axios.post(
        "https://precious-fashion-dog.cyclic.app/account/withdraw",
        {
          name: user.name,
          amount: withdrawAmount,
        }
      );
      setBalance(response.data.balance);
      toast.success("Withdraw Done!");
    } catch (error) {
      console.error(error);
      toast.error("Insufficient funds!");
    }
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
          <h5>Account Holder Name: {user.name}</h5>
          <h5>Account Holder Email: {user.email}</h5>
        </div>
      )}
      {data && (
        <div
          style={{
            boxShadow: "0 0 10px black",
            padding: "10px",
            margin: "10px",
          }}
        >
          <h4>Balance: {data.balance}.00 Rs</h4>
          <h4>After Deposit: {balanced}.00 Rs</h4>
        </div>
      )}
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
          <input
            style={{ width: "11rem", fontSize: "21px" }}
            type="number"
            id="depositAmount"
            placeholder="Deposit Amount"
            value={depositAmount}
            onChange={(e) => setDepositAmount(e.target.value)}
          />
          <br />
          <Button onClick={handleDeposit} variant="contained">
            Deposit
          </Button>
        </div>
        <br />
        <div>
          <h4>Withdraw Amount:</h4>
          <input
            style={{ width: "11rem", fontSize: "21px" }}
            type="number"
            id="withdrawAmount"
            placeholder="Withdraw Amount"
            value={withdrawAmount}
            onChange={(e) => setWithdrawAmount(e.target.value)}
          />
          <br />
          <Button onClick={handleWithdraw} variant="contained">
            Withdraw
          </Button>
          <br />
        </div>
      </div>

      <br />
      <Logout />
    </div>
  );
}
