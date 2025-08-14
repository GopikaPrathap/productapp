import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{backgroundColor:'black'}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{color:'yellow'}}>
           <strong>MyStore</strong> 
          </Typography>
          <Link to='/login'><Button color="inherit" style={{color:'yellow'}}>Login</Button></Link>
          <Link to='/addproduct'><Button color="inherit" style={{color:'yellow'}}>Add Product</Button></Link>
          <Button color="inherit" style={{color:'yellow'}}>Logout</Button>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  )
}

export default Navbar
