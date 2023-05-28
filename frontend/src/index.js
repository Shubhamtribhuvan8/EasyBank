import React from "react";
import ReactDOM from "react-dom";
import { createPortal } from "react-dom"; // Import createPortal from react-dom
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

const portalRoot = document.getElementById("portal-root"); // Define a root element for the portal

const AppWithPortal = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

ReactDOM.render(
  <React.StrictMode>
    {/* Render the portal using createPortal */}
    {createPortal(AppWithPortal, portalRoot)}
  </React.StrictMode>,
  document.getElementById("root")
);
