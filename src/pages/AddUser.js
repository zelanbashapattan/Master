import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { addUser } from "../redux/actions";

const AddUser = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    contact: "",
    address: "",
  });

  const dispatch = useDispatch();

  const [error, setError] = useState("");

  let navigate = useNavigate();
  const handleBack = () => {
    navigate("/");
  };

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  }; 

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !address || !contact) {
      setError("Please fill all the input fileds...!");
    } else {
        dispatch(addUser(state));
        navigate("/");
        setError("");
    }
  };

  const { name, email, contact, address } = state;
  return (
    <div>
      <Button
        style={{ width: "100px", marginTop: "20px" }}
        variant="contained"
        color="secondary"
        onClick={handleBack}
      >
        Go Back
      </Button>
      <h2> Add User</h2>
      { error && <h3 style={{ color: "red"}}>{error}</h3>}
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "45ch" },
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <TextField
          id="standard-basic"
          label="name"
          name="name"
          type="text"
          value={name}
          variant="standard"
          onChange={handleInputChange}
        />
        <TextField
          id="standard-basic"
          label="email"
          type="email"
          name="email"
          value={email}
          variant="standard"
          onChange={handleInputChange}
        />
        <TextField
          id="standard-basic"
          label="contact"
          type="number"
          name="contact"
          value={contact}
          variant="standard"
          onChange={handleInputChange}
        />
        <TextField
          id="standard-basic"
          label="address"
          type="text"
          name="address"
          value={address}
          variant="standard"
          onChange={handleInputChange}
        />
        <Button
          style={{ width: "100px" }}
          variant="contained"
          color="primary"
          type="submit"
        >
          Submit
        </Button>
      </Box>
    </div>
  );
};

export default AddUser;
