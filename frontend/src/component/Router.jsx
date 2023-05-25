import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./BankLogin/Login";
import Signup from "./BankLogin/Signup";
import Transactions from "./TransactionPage/Transactions";
export default function Routers() {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <h1>
              <Login />
            </h1>
          }
        />
        <Route
          path="/"
          element={
            <h1>
              <Signup />
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
      </Routes>
    </div>
  );
}
