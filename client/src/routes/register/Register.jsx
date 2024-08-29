import React, { useState } from "react";
import "./register.scss";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import apiRequest from "../../lib/apiRequest";

function Register() {
  const [error, setError] = useState(false);
  const [isLoadoing, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (en) => {
    en.preventDefault();
    setError("");
    setIsLoading(true);
    const formData = new FormData(en.target);
    const username = formData.get("username");
    const firstName = formData.get("firstname");
    const lastName = formData.get("lastname");
    const email = formData.get("email");
    const password = formData.get("password");

    try {
      const res = await apiRequest.post("/auth/register", {
        username,
        firstName,
        lastName,
        email,
        password,
      });
      if (res.status === 200) {
        navigate("/login");
      }
      if (res.status === 400) {
        console.log("USER INPUT ERROR");
        console.log(res.status);
        setError(res.error);
      }
    } catch (error) {
      if (error.code == "ERR_NETWORK") {
        console.log("ERR_NETWORK SERVER IS DOWN", ERR_NETWORK);
      }
      console.log(error);
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="register">
      <form onSubmit={handleSubmit} className="registerForm">
        <h3> Register on Computicket</h3>

        <Box className="inputBox" sx={{ width: 500, maxWidth: "100%" }}>
          <TextField
            name="username"
            fullWidth
            label="User name"
            id="username"
          />
        </Box>

        <Box className="inputBox" sx={{ width: 500, maxWidth: "100%" }}>
          <TextField
            name="firstname"
            fullWidth
            label="First Name"
            id="firstname"
          />
        </Box>

        <Box className="inputBox" sx={{ width: 500, maxWidth: "100%" }}>
          <TextField
            name="lastname"
            fullWidth
            label="Last Name"
            id="lastname"
          />
        </Box>

        <Box className="inputBox" sx={{ width: 500, maxWidth: "100%" }}>
          <TextField name="email" fullWidth label="Email" id="email" />
        </Box>

        <Box className="inputBox" sx={{ width: 500, maxWidth: "100%" }}>
          <TextField
            name="password"
            type="password"
            fullWidth
            label="Password"
            id="password"
          />
        </Box>

        <FormControlLabel
          className="checkBox"
          control={<Checkbox defaultChecked />}
          label="Daily sales updates (for organisers)"
        />

        <Button
          type="submit"
          sx={{ width: 500, maxWidth: "100%" }}
          variant="contained"
          size="medium"
        >
          Register
        </Button>

        <p>
          By clicking <b>Register</b>, I confirm that I agree with the{" "}
          <Link to={`/`}>Computicket terms of service</Link>{" "}
        </p>

        <p>
          Already have a Quicket account? <Link to={`/login`}> Log in</Link>{" "}
        </p>
      </form>
    </div>
  );
}

export default Register;
