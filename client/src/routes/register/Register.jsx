import React from 'react'
import "./register.scss"
import { Box, Button, Checkbox, FormControlLabel, TextField } from '@mui/material'
import { Link } from 'react-router-dom'


function Register() {
  return (
    <div className='register'>
      <h3> Register on Computicket</h3>

    <Box className="inputBox" sx={{ width: 500, maxWidth: '100%' }}>
      <TextField fullWidth label="First Name" id="firstname" />
    </Box>

    <Box className="inputBox" sx={{ width: 500, maxWidth: '100%' }}>
      <TextField fullWidth label="Last Name" id="lastname" />
    </Box>

    
    <Box className="inputBox" sx={{ width: 500, maxWidth: '100%' }}>
      <TextField fullWidth label="Email" id="email" />
    </Box>

    <Box className="inputBox" sx={{ width: 500, maxWidth: '100%' }}>
      <TextField type="password" fullWidth label="Password" id="password" />
    </Box>

    <FormControlLabel className='checkBox' control={<Checkbox defaultChecked />} label="Daily sales updates (for organisers)" />

    <Button sx={{ width: 500, maxWidth: '100%' }} variant="contained" size="medium">
          Register
    </Button>

    <p>By clicking <b>Register</b>, I confirm that I agree with the <Link to={`/`}>Computicket terms of service</Link> </p>

    <p>Already have a Quicket account? <Link to={`/login`}>  Log in</Link> </p>

    </div>
  )
}

export default Register