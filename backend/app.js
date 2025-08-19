const express=require('express')
const app=express()
require('dotenv').config()
const PORT=process.env.PORT
const cors=require('cors')
const jwt=require('jsonwebtoken')


const productModel=require('./models/productModel')
const userModel=require('./models/userModel')
const connectDB=require('./connection')
const productRoute=require('./routes/productRoute')
const userRoute=require('./routes/userRoute')

connectDB()

app.use(cors())
app.use(express.json())
app.use('/product',productRoute)
app.use('/user',userRoute)


app.listen(PORT,()=>{
    console.log(`App is listening at port ${PORT}`)
})