import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function SingleTransaction() {
  const [data, setData] = useState([]);
  const { transactionId } = useParams();
  useEffect(() => {
    fetch(`http://localhost:8080/transaction-details/${transactionId}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, [transactionId]);
  const navigate = useNavigate();
  const Homepage = () => {
    setTimeout(() => {
      navigate("/alltransactions");
    }, 1000);
  };
  return (
    <div>
      <h1>Transaction Details</h1>
      <Button variant="contained" onClick={Homepage}>
        Home Page
      </Button>
      <ul>
        {data.map((transaction) => (
          <li key={transaction._id}>
            <p>Transaction ID: {transaction._id}</p>
            <p>Name: {transaction.name}</p>
            <p>Amount: {transaction.amount}</p>
            <p>Date: {transaction.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
