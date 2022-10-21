import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { userUpdate, singleUser } from "../redux/actions";

const EditUser = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    contact: "",
    address: "",
  });

  const { name, email, contact, address } = state;
  const dispatch = useDispatch();
  const [error, setError] = useState("");
  let { id } = useParams();
  let navigate = useNavigate();
  const { user } = useSelector((state) => state.userData);

  useEffect(() =>{
    if(user){
        setState({ ...user })
    }
  },[user])

  useEffect(() => {
    dispatch(singleUser(id));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
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
      dispatch(userUpdate(state, id));
      navigate("/");
      setError("");
    }
  };

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
      <h2> Edit User</h2>
      {error && <h3 style={{ color: "red" }}>{error}</h3>}
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
          value={name || ""}
          variant="standard"
          onChange={handleInputChange}
        />
        <TextField
          id="standard-basic"
          label="email"
          type="email"
          name="email"
          value={email || ""}
          variant="standard"
          onChange={handleInputChange}
        />
        <TextField
          id="standard-basic"
          label="contact"
          type="number"
          name="contact"
          value={contact || ""}
          variant="standard"
          onChange={handleInputChange}
        />
        <TextField
          id="standard-basic"
          label="address"
          type="text"
          name="address"
          value={address || ""}
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

export default EditUser;
