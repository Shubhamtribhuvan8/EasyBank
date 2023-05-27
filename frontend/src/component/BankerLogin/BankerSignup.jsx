import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import TextField from "@mui/material/TextField";
import { toast } from "react-toastify";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import CircularProgress from "@mui/material/CircularProgress";

function BankerSignup() {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false); // New loading state

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  async function handleSubmit(event) {
    event.preventDefault();
    const data = {
      name: name,
      email: email,
      password: password,
    };

    if (!email.endsWith("@yahoo.com")) {
      toast.error("Please provide a valid Yahoo email address!");
      const warningSound = new Audio(
        "http://commondatastorage.googleapis.com/codeskulptor-assets/week7-button.m4a"
      );
      warningSound.play();
      return;
    }

    try {
      setLoading(true); // Start loading
      await axios.post(
        "https://precious-fashion-dog.cyclic.app/bank/register",
        data
      );
      toast.success("Registered!");
      const successSound = new Audio(
        "http://codeskulptor-demos.commondatastorage.googleapis.com/descent/gotitem.mp3"
      );
      successSound.play();
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
      <Button variant="white" onClick={() => setShow(true)}>
        <AddCircleOutlineIcon size="small" />
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
            Create an Account in EasyBank
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit} style={{ textAlign: "center" }}>
            <TextField
              required
              type="text"
              value={name}
              onChange={handleNameChange}
              placeholder="Name"
              style={{ width: "345px" }}
            />
            <br /> <br />
            <TextField
              required
              type="text"
              value={email}
              onChange={handleEmailChange}
              placeholder="Email"
              style={{ width: "345px" }}
            />
            <br /> <br />
            <TextField
              required
              type="text"
              value={password}
              onChange={handlePasswordChange}
              placeholder="Password"
              style={{ width: "345px" }}
            />
            <br /> <br />
            <Button
              variant="outline-secondary"
              id="button-addon2"
              type="submit"
              disabled={loading} // Disable the button while loading
            >
              {loading ? <CircularProgress size={20} /> : "Signup"}
            </Button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default BankerSignup;
