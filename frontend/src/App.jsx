import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import Product from './components/Product'
import AddProduct from './components/AddProduct'
import Register from './components/Register'
import Home from './components/Home'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/product' element={<Product/>}></Route>
        <Route path='/addproduct' element={<AddProduct/>}></Route>
        <Route path='/adduser' element={<Register/>}></Route>
      </Routes>
    </div>
  )
}

export default App
