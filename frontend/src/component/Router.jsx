import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./BankLogin/Login";
import Signup from "./BankLogin/Signup";
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
      </Routes>
    </div>
  );
}
