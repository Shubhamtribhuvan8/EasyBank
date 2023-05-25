import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Alltransaction(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://precious-fashion-dog.cyclic.app/account/details")
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
      <h1>All Transactions</h1>
      <Button variant="contained" onClick={Homepage}>
        Home Page
      </Button>
      <div
        style={{
          margin: "50px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
        }}
      >
        {data.map((transaction) => (
          <div
            key={transaction._id}
            style={{
              boxShadow: "0 0 10px black",
              padding: "10px",
              margin: "10px",
            }}
          >
            <p>{transaction.name}</p>
            <Link to={`/transaction-details/${transaction._id}`}>
              <Button variant="outlined">Details</Button>
            </Link>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
}
