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
      console.log("new product added",form)
      alert(res.data.message)
      navigate('/')
    })
    .catch((er)=>{
        console.error(er)
        alert("Failed to add product")
        navigate('/addproduct')
      })
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
      <TextField id="title" label="Title" variant="standard" name='title' onChange={(e)=>setForm({...form,title:e.target.value})}/><br />
      <TextField id="description" label="Description" variant="standard" name='description' onChange={(e)=>setForm({...form,description:e.target.value})}/><br />
      <TextField id="status" label="Status" variant="standard" name='status' onChange={(e)=>setForm({...form,status:e.target.value})}/><br />
      <TextField id="image" label="Image URL" variant="standard" name='image' onChange={(e)=>setForm({...form,image:e.target.value})}/><br />
      <Button variant="contained" style={{width:'100px',backgroundColor:'yellow',color:'black'}} onClick={submitValue}>Add</Button>
      
    </Box>
    </div>
    </div>
  )
}

export default AddProduct
