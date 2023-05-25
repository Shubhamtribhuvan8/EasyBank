import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Logout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("papa");
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  return (
    <div>
      <Button onClick={handleLogout} variant="contained">
        Logout
      </Button>
    </div>
  );
}
