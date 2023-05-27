import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, CircularProgress } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import LazyLoad from "react-lazyload";

export default function Alltransaction(props) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    axios
      .get("https://precious-fashion-dog.cyclic.app/account/details")
      .then((response) => {
        setData(response.data);
        setLoading(false); // Set loading state to false after data is fetched
      })
      .catch((error) => {
        console.log(error);
        setLoading(false); // Set loading state to false if there's an error
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
      {loading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "50px",
          }}
        >
          <CircularProgress size={100} />
        </div>
      ) : (
        <div
          style={{
            margin: "50px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
          }}
        >
          {data.map((transaction) => (
            <LazyLoad key={transaction._id} height={200} once>
              <div
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
            </LazyLoad>
          ))}
        </div>
      )}
    </div>
  );
}
