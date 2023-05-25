import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export default function SingleTransaction() {
  const [data, setData] = useState({});
  const { transactionId } = useParams();
  useEffect(() => {
    axios
      .get(`https://precious-fashion-dog.cyclic.app/account/${transactionId}`)
      .then((response) => {
        setData(response.data);
        // console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [transactionId]);

  const navigate = useNavigate();

  return (
    <div>
      <h1>Transaction Details</h1>
      <Button variant="contained" onClick={() => navigate("/alltransactions")}>
        Home Page
      </Button>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          boxShadow: "0 0 10px black",
          padding: "10px",
          margin: "10px",
          fontSize: "30px",
          fontWeight: "bold",
          textAlign: "initial",
        }}
      >
        <ul>
          <p>Transaction ID: {data._id}</p>
          <p>Account Holder Name: {data.name}</p>
          <p>Account Balance: {data.balance}.00 Rs</p>
        </ul>
      </div>
    </div>
  );
}
