import { Box, Button, TextField } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div style={{textAlign:'center',marginTop:'100px'}}>
        <h2>Sign Up</h2>
        <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '40ch' } }}
      noValidate
      autoComplete="off"
    >
      <TextField id="filled-basic" label="Username" variant="standard" /><br />
      <TextField id="filled-basic" label="Email" variant="standard" /><br />
      <TextField id="filled-basic" label="Password" variant="standard" /><br />
      <TextField id="filled-basic" label="Phone" variant="standard" /><br />
      <Link to='/login'><Button variant="contained" style={{width:'100px',backgroundColor:'black',color:'yellow'}}>Register</Button></Link>
    </Box>
    </div>
  )
}

export default Register
