import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function SingleTransaction() {
  const [data, setData] = useState([]);
  const { transactionId } = useParams();
  useEffect(() => {
    fetch(`http://localhost:8080/account/transactionId/${transactionId}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data);
        setData(data.data);
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
        {data.map((e) => (
          <li key={e._id}>
            <p>Transaction ID: {e._id}</p>
            <p>Name: {e.name}</p>
            <p>Amount: {e.amount}</p>
            <p>Date: {e.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
