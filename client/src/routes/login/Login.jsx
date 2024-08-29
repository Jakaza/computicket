import React from 'react'
import "./login.scss"
import { Box, Button, Checkbox, FormControlLabel, TextField } from '@mui/material'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className='login'>
    <h3> Log in to Computicket</h3>
  
  <Box className="inputBox" sx={{ width: 500, maxWidth: '100%' }}>
    <TextField fullWidth label="Email" id="email" />
  </Box>

  <Box className="inputBox" sx={{ width: 500, maxWidth: '100%' }}>
    <TextField type="password" fullWidth label="Password" id="password" />
  </Box>

  <Button sx={{ width: 500, maxWidth: '100%' }} variant="contained" size="medium">
        Log in
  </Button>

  <p><Link to={`/`}>Forgot your password?</Link> </p>

  <p>Don't have account? <Link to={`/register`}>Signup</Link> </p>

  </div>
  )
}

export default Login