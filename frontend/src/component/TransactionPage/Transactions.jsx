import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Button } from "@mui/material";

export default function TransactionPage() {
  const [user, setUser] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("papa");
    if (token) {
      axios
        .post("http://localhost:8080/bank/verify", { token })
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
        .get("http://localhost:8080/account/details")
        .then((response) => {
          const accountDetails = response.data;
          let isUserFound = false;

          for (let i = 0; i < accountDetails.length; i++) {
            if (user.name === accountDetails[i].name) {
              setData(accountDetails[i]);
              console.log(accountDetails[i]);
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
        "http://localhost:8080/account/deposit",
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
      const response = await axios.post("/withdraw", {
        userId: "userId_here",
        amount: withdrawAmount,
      });
      setBalance(response.data);
    } catch (error) {
      console.error(error);
      toast.error("Something went Wrong!");
    }
  };

  return (
    <div>
      <h6>Transaction Page</h6>
      {data && (
        <div>
          <h5>Balance: {data.balance}.00 Rs</h5>
          <h5>After Deposit: {balanced}.00 Rs</h5>
        </div>
      )}

      {user && (
        <div>
          <h6>Name: {user.name}</h6>
          <h6>Email: {user.email}</h6>
        </div>
      )}
      <div>
        <label htmlFor="depositAmount">Deposit Amount:</label>
        <br />
        <input
          type="number"
          id="depositAmount"
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
        <label htmlFor="withdrawAmount">Withdraw Amount:</label>
        <br />
        <input
          type="number"
          id="withdrawAmount"
          value={withdrawAmount}
          onChange={(e) => setWithdrawAmount(e.target.value)}
        />
        <br />
        <Button onClick={handleWithdraw} variant="contained">
          Withdraw
        </Button>
        <br />
      </div>
      <br />
    </div>
  );
}
