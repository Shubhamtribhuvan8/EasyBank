import React from "react";
import { Route, Routes } from "react-router-dom";
import Transactions from "./TransactionPage/Transactions";
import Alltransaction from "./AllTransaction/Alltransaction";
import SingleTransaction from "./AllTransaction/SingleTransaction";
import BankerLogin from "./BankerLogin/BankerLogin";
import Login from "./BankLogin/Login";
export default function Routers() {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <h1>
              <br />
              <br />
              <Login /> <BankerLogin />
            </h1>
          }
        />
        <Route
          path="/transactions"
          element={
            <h1>
              <Transactions />
            </h1>
          }
        />
        <Route
          path="/alltransactions"
          element={
            <h1>
              <Alltransaction />
            </h1>
          }
        />
        <Route
          path="/transaction-details/:transactionId"
          element={<SingleTransaction />}
        />
      </Routes>
    </div>
  );
}
