import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Alltransaction() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/account/details")
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const navigate = useNavigate();

  const Homepage = () => {
    setTimeout(() => {
      navigate("/");
    }, 3000);
    toast.success("Redirecting To Homepage!");
  };
  return (
    <div>
      <h1>All Transactions here</h1>
      <Button variant="contained" onClick={Homepage}>
        Home Page
      </Button>
      {data.map((transaction) => (
        <div key={transaction._id}>
          <p>Transaction ID: {transaction._id}</p>
          <p>Name: {transaction.name}</p>
          <Link
            to="/transaction-details/"
            onClick={() => {
              const transactionId = transaction._id;
              navigate("/transaction-details/" + transactionId);
            }}
          >
            <Button variant="outlined">Details</Button>
          </Link>
          {/* <p>Amount: {transaction.balance}.00 Rs</p> */}
          <hr />
        </div>
      ))}
    </div>
  );
}
