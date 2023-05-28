import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, CircularProgress, Paper } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import LazyLoad from "react-lazyload";

export default function AllTransaction(props) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://precious-fashion-dog.cyclic.app/account/details")
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  const navigate = useNavigate();

  const homepage = () => {
    setTimeout(() => {
      navigate("/");
    }, 3000);
    toast.success("Redirecting To Homepage!");
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>All Transactions</h1>
      <Button variant="contained" onClick={homepage}>
        Home Page
      </Button>
      {loading ? (
        <div
          style={{
            display: "grid",
            justifyContent: "center",
            marginTop: "50px",
          }}
        >
          <CircularProgress size={100} />
        </div>
      ) : (
        <div
          style={{
            display: "grid",
            justifyContent: "center",
            marginTop: "50px",
            gap: "16px",
          }}
        >
          {data.map((transaction) => (
            <LazyLoad key={transaction._id} height={200} once>
              <Paper
                style={{
                  width: "400px",
                  padding: "20px",
                  textAlign: "center",
                }}
              >
                <h2 style={{ fontFamily: "serif" }}>{transaction.name}</h2>
                <Link to={`/transaction-details/${transaction._id}`}>
                  <Button variant="outlined">Details</Button>
                </Link>
              </Paper>
            </LazyLoad>
          ))}
        </div>
      )}
    </div>
  );
}
