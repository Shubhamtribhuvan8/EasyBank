import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Logout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("papa");
    setTimeout(() => {
      navigate("/");
    }, 2000);
    toast.success("Logout successful!");
  };

  return (
    <div>
      <Button onClick={handleLogout} variant="outlined">
        Logout
      </Button>
    </div>
  );
}
