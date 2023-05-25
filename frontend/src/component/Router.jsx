import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./BankLogin/Login";
// import Signup from "./BankLogin/Signup";
import Transactions from "./TransactionPage/Transactions";
import BankerLogin from "./BankerLogin/BankerLogin";
import Alltransaction from "./AllTransaction/Alltransaction";
import SingleTransaction from "./AllTransaction/SingleTransaction";
export default function Routers() {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <h1>
              <Login />
              <BankerLogin />
              {/* <Signup /> */}
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
          path="/transaction-details"
          element={
            <h1>
              <SingleTransaction />
            </h1>
          }
        />
      </Routes>
    </div>
  );
}
