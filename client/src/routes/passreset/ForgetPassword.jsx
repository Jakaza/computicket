import React from 'react'
import  "./forgetPassword.scss"
import { Box, Button, TextField } from '@mui/material'
import { Link } from 'react-router-dom'



function ForgetPassword() {
  return (
    <div className='resetPassword'>
    <h3> RESET PASSWORD</h3>

    <p>Forgotten your password?</p>

    <p>Enter the email address registered with your Computicket account below and we will email you a password reset link. If you don't see the email in your inbox, please check other folders in your email account such as Promotions OR Spam.</p>
  
  <Box className="inputBox" sx={{ width: 500, maxWidth: '100%' }}>
    <TextField fullWidth label="Email" id="email" />
  </Box>

  <Button sx={{ width: 500, maxWidth: '100%' }} variant="contained" size="medium">
        SUBMIT
  </Button>
  </div>
  )
}

export default ForgetPassword