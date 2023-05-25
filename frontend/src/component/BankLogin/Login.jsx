import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import { toast } from "react-toastify";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import TextField from "@mui/material/TextField";
import Signup from "./Signup";
import { useNavigate } from "react-router-dom";
function Login() {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handlemeailchange = (event) => {
    setEmail(event.target.value);
  };

  const handlepasswordchange = (event) => {
    setPassword(event.target.value);
  };

  async function handleSubmit(event) {
    event.preventDefault();
    const data = {
      email: email,
      password: password,
    };
    const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail.com$/;
    if (!emailRegex.test(email)) {
      toast.error("Invalid Email!");
      return;
    }
    try {
      let tokens = await axios.post("http://localhost:8080/bank/login", data);
      localStorage.setItem("papa", tokens.data.user.token);
      const successs = new Audio(
        "http://codeskulptor-demos.commondatastorage.googleapis.com/descent/gotitem.mp3"
      );
      setTimeout(() => {
        navigate("/transactions");
      }, 5000);
      successs.play();
      toast.success("Welcome!");
    } catch (error) {
      toast.error("Wrong Credentials!");
      const warningSound = new Audio(
        "http://commondatastorage.googleapis.com/codeskulptor-assets/week7-button.m4a"
      );
      warningSound.play();
    }
  }
  return (
    <>
      <Button variant="dark" onClick={() => setShow(true)}>
        <AccountCircleIcon style={{ fontSize: "40px" }} />
        <p>Customer Login</p>
      </Button>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title
            id="example-custom-modal-styling-title"
            style={{ textAlign: "center" }}
          >
            Customer Login
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit} style={{ textAlign: "center" }}>
            <TextField
              required
              type="text"
              value={email}
              onChange={handlemeailchange}
              placeholder="Email"
              style={{ width: "345px" }}
            />
            <br /> <br />
            <TextField
              required
              type="text"
              value={password}
              onChange={handlepasswordchange}
              placeholder="Password"
              style={{ width: "345px" }}
            />
            <br /> <br />
            <Button
              variant="outline-secondary"
              id="button-addon2"
              type="submit"
            >
              Login
            </Button>
          </form>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Create Account
          <Signup />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Login;
