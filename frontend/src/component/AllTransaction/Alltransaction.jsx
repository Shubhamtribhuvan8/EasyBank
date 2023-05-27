import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Button,
  CircularProgress,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import LazyLoad from "react-lazyload";

export default function Alltransaction(props) {
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

  const Homepage = () => {
    setTimeout(() => {
      navigate("/");
    }, 3000);
    toast.success("Redirecting To Homepage!");
  };

  return (
    <div style={{ textAlign: "center" }}>
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
        <TableContainer component={Paper} style={{ marginTop: "50px" }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align="center">Name</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((transaction) => (
                <LazyLoad key={transaction._id} height={200} once>
                  <TableRow>
                    <TableCell align="center">
                      <div
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        {transaction.name}
                      </div>
                    </TableCell>
                    <TableCell align="center">
                      <Link to={`/transaction-details/${transaction._id}`}>
                        <Button variant="outlined">Details</Button>
                      </Link>
                    </TableCell>
                  </TableRow>
                </LazyLoad>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </div>
  );
}
