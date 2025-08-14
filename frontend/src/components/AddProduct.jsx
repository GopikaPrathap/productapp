import React, { useState } from 'react'
import { Box, Button, TextField } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const AddProduct = () => {
  const [form,setForm]=useState({
    title:'',
    description:'',
    status:'',
    image:''
  })

  const navigate=useNavigate()
  
  function submitValue(e){
    e.preventDefault()
    axios.post('http://localhost:8000/product/add',form)
    .then((res)=>{
      
    })
    .catch()
  }

  return (
    <div>
      <div style={{textAlign:'center',marginTop:'100px'}}>
        <h2>New Product</h2>
      <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '40ch' } }}
      noValidate
      autoComplete="off"
    >
      <TextField id="filled-basic" label="Title" variant="standard" /><br />
      <TextField id="filled-basic" label="Description" variant="standard" /><br />
      <TextField id="filled-basic" label="Status" variant="standard" /><br />
      <TextField id="filled-basic" label="Image URL" variant="standard" /><br />
      <Button variant="contained" style={{width:'100px',backgroundColor:'yellow',color:'black'}}>Add</Button>
      
    </Box>
    </div>
    </div>
  )
}

export default AddProduct
