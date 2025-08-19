import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../axiosinterceptor';

const Home = () => {
    // const products=[
    //     {title:"Mamaearth Ubtan FaceWash",description:"Customers find this face wash effective at removing tan and pollution, leaving skin smooth and bright. The product contains natural ingredients like saffron and turmeric, and customers appreciate its soothing fragrance.",status:"Available",image:"https://mamaearth.lk/wp-content/uploads/2023/12/61EhOk8Z2bL._SL1200_-600x600.jpg"},

    //     {title:"Mamaearth Tea Tree FaceWash",description:"Mamaearth Tea Tree Foaming Face Wash is enriched with the antibacterial properties of tea tree oil and the acne-fighting benefits of salicylic acid. Together, they clear pores, fight bacteria, and control excess oil secretion. The face wash comes with an in-built silicone brush for easy application.",status:"Available",image:"https://peacock.lk/wp-content/uploads/2024/11/Mama-earth-tree-1.jpg"},

    //     {title:"Mamaearth Vitamin C FaceWash",description:"Mamaearth Vitamin C Face Wash with the goodness of Vitamin C and Turmeric has brightening properties to give your skin a natural glow. It also helps in skin repair by boosting collagen production and blood circulation, leaving the skin radiant and healthy.",status:"Notavailable",image:"https://kisanhut1313.com/upload/product/_O1481.webp"}
    // ]
    const [products,setProducts]=useState([])
    useEffect(()=>{
            axios.get("http://localhost:8000/product/")
            .then((response)=>{
                setProducts(response.data)
            })
            .catch((er)=>{
                console.error(er)
            })
    },[])



//function for deletion
let deleteProduct=(id)=>{
  axiosInstance.delete('http://localhost:8000/product/delete/'+id)
        .then((res)=>{
          window.location.reload()
        })
        .catch((er)=>{
            console.error(er)
        })
}

//function for updation
let navigate=useNavigate()
let editBlog=(product)=>{
   navigate('/addproduct',{state:{product}})
}



  return (
    <div style={{display:"flex", flexWrap:"wrap",gap:"50px",marginLeft:"30px"}}>
     {products.map(product=>(
      <Card sx={{ maxWidth: 310,marginTop: 5,display: 'flex',flexDirection: 'column', minHeight: 400}}>
      <CardMedia
        component="img"
        sx={{ height: 250 }}
        image={product.image}
        title={product.title}
        style={{objectFit:'contain',marginTop:"20px"}}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h6" component="div">
          {product.title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {product.description}
        </Typography><br />
      
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Status: <strong>{product.status}</strong>
        </Typography>
            </CardContent>
      <CardActions>
        <Button size="small">View</Button>
        <Button size="small" onClick={()=>editBlog(product)}>Edit</Button>
        <Button size="small" onClick={()=>deleteProduct(product._id)}>Delete</Button>
      </CardActions>
    </Card>
    ))}
    </div>
  )
}

export default Home

