import React, { useContext, useState } from "react";
import "./login.scss";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import apiRequest from "../../lib/apiRequest";

function Login() {
  const [error, setError] = useState(false);
  const [isLoadoing, setIsLoading] = useState(false);

  const { updateUser } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleSubmit = async (en) => {
    en.preventDefault();
    setError("");
    setIsLoading(true);
    const formData = new FormData(en.target);
    const email = formData.get("email");
    const password = formData.get("password");

    try {
      const res = await apiRequest.post("/auth/login", {
        email,
        password,
      });
      if (res.status === 200) {
        updateUser(res.data);
        navigate("/");
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
    <div className="">
      <form className="login" onSubmit={handleSubmit}>
        <h3> Log in to Computicket</h3>

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

        <Button
          type="submit"
          sx={{ width: 500, maxWidth: "100%" }}
          variant="contained"
          size="medium"
        >
          Log in
        </Button>

        <p>
          <Link to={`/account/forgotpassword`}>Forgot your password?</Link>{" "}
        </p>

        <p>
          Don't have account? <Link to={`/register`}>Signup</Link>{" "}
        </p>
      </form>
    </div>
  );
}

export default Login;
