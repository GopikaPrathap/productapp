import { Box, Button, TextField } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
    const [form,setForm]=useState({
    email:'',
    password:''
  })

  const navigate=useNavigate()
  
  function checkValue(e){
    e.preventDefault()
    axios.post('http://localhost:8000/user/login',form)
    .then((res)=>{
      console.log("form submitted...",form)
      alert(res.data.message)
      if(res.data.message==='Login Successful'){
          navigate('/')
      }
      
    })
    .catch((er)=>{
        console.error(er)
        alert("Invalid Login Credential")
        navigate('/login')
      })
  }

  return (
    <div style={{textAlign:'center',marginTop:'100px'}}>
        <h2>User Login</h2>
      <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '40ch' } }}
      noValidate
      autoComplete="off"
    >
      <TextField id="filled-basic" label="Username" variant="standard" name='email' value={form.email} onChange={(e)=>setForm({...form,email:e.target.value})}/><br />
      <TextField id="filled-basic" label="Password" variant="standard" name='password' value={form.password} onChange={(e)=>setForm({...form,password:e.target.value})}/><br />
      <Button variant="contained" style={{width:'100px',backgroundColor:'yellow',color:'black'}} onClick={checkValue}>Login</Button>
      <Link to='/adduser'><Button variant="contained" style={{width:'100px',backgroundColor:'black',color:'yellow'}}>Sign Up</Button></Link>
    </Box>
    </div>
  )
}

export default Login
