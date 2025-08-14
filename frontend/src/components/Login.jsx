import { Box, Button, TextField } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div style={{textAlign:'center',marginTop:'100px'}}>
        <h2>User Login</h2>
      <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '40ch' } }}
      noValidate
      autoComplete="off"
    >
      <TextField id="filled-basic" label="Username" variant="standard" /><br />
      <TextField id="filled-basic" label="Password" variant="standard" /><br />
      <Button variant="contained" style={{width:'100px',backgroundColor:'yellow',color:'black'}}>Login</Button>
      <Link to='/adduser'><Button variant="contained" style={{width:'100px',backgroundColor:'black',color:'yellow'}}>Sign Up</Button></Link>
    </Box>
    </div>
  )
}

export default Login
