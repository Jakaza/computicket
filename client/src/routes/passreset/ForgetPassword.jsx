import React, { useState } from "react";
import "./forgetPassword.scss";
import { Box, Button, TextField } from "@mui/material";
import apiRequest from "../../lib/apiRequest";
import { useNavigate } from "react-router-dom";

function ForgetPassword() {
  const [error, setError] = useState(false);
  const [isLoadoing, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (en) => {
    en.preventDefault();
    setError("");
    setIsLoading(true);

    const formData = new FormData(en.target);
    const email = formData.get("email");

    try {
      const res = await apiRequest.post("/auth/forgot", {
        email,
      });
      if (res.status === 200) {
        console.log("YOU GOT LINK TO RESET PASSWORD CHECK EMAILS");
        console.log(res);
      }
      if (res.status === 400) {
        console.log("USER INPUT ERROR");
        console.log(res.status);
        setMessage(res.data.message);
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
    <div className="resetPassword">
      <h3> RESET PASSWORD</h3>

      <p>Forgotten your password?</p>

      <p>
        Enter the email address registered with your Computicket account below
        and we will email you a password reset link. If you don't see the email
        in your inbox, please check other folders in your email account such as
        Promotions OR Spam.
      </p>

      <form onSubmit={handleSubmit}>
        <Box className="inputBox" sx={{ width: 500, maxWidth: "100%" }}>
          <TextField fullWidth label="Email" id="email" name="email" />
        </Box>

        <Button
          type="submit"
          sx={{ width: 500, maxWidth: "100%" }}
          variant="contained"
          size="medium"
        >
          SUBMIT
        </Button>

        <p>{message}</p>
      </form>
    </div>
  );
}

export default ForgetPassword;
