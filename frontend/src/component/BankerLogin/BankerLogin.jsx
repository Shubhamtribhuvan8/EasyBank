import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import { toast } from "react-toastify";
import PersonIcon from "@mui/icons-material/Person";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import BankerSignup from "./BankerSignup";
import CircularProgress from "@mui/material/CircularProgress";

function BankerLogin() {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  async function handleSubmit(event) {
    event.preventDefault();
    const data = {
      email: email,
      password: password,
    };
    try {
      setLoading(true); // Start loading
      let tokens = await axios.post(
        "https://precious-fashion-dog.cyclic.app/bank/login",
        data
      );
      localStorage.setItem("papa", tokens.data.user.token);
      const successSound = new Audio(
        "http://codeskulptor-demos.commondatastorage.googleapis.com/descent/gotitem.mp3"
      );
      setTimeout(() => {
        navigate("/alltransactions");
      }, 5000);
      successSound.play();
      toast.success("Welcome!");
    } catch (error) {
      toast.error("Wrong Credentials!");
      const warningSound = new Audio(
        "http://commondatastorage.googleapis.com/codeskulptor-assets/week7-button.m4a"
      );
      warningSound.play();
    } finally {
      setLoading(false); // Stop loading
    }
  }

  return (
    <>
      <Button
        variant="dark"
        style={{ backgroundColor: "darkmagenta" }}
        onClick={() => setShow(true)}
      >
        <PersonIcon style={{ fontSize: "40px" }} />
        <p>Banker Login</p>
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
            Banker Login
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit} style={{ textAlign: "center" }}>
            <TextField
              required
              type="text"
              value={email}
              onChange={handleEmailChange}
              placeholder="johndoe@yahoo.com"
              style={{ width: "345px" }}
            />
            <br /> <br />
            <TextField
              required
              type="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder="12345"
              style={{ width: "345px" }}
            />
            <br /> <br />
            <Button
              variant="outline-secondary"
              id="button-addon2"
              type="submit"
              disabled={loading}
            >
              {loading ? <CircularProgress size={20} /> : "Banker Login"}
            </Button>
          </form>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Create Account
          <BankerSignup />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default BankerLogin;
