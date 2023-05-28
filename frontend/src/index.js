import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
// const root = ReactDOM.createRoot(document.getElementById("root"));
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
