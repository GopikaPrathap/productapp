const express=require('express')
const router=express.Router()
const model=require('../models/productModel')
const jwt=require('jsonwebtoken')

router.use(express.json())
router.use(express.urlencoded({extended:true}))

//Adding middleware
function verifyToken(req,res,next){
    let token=req.headers.token
    try{
        if(!token) throw "Unauthorised Access"
        let payload=jwt.verify(token,"secret")
        if(!payload) throw "Unauthorised Access"
        next()
    }catch(er){
       res.json({message:error})
    }
}

//API methods
router.get('/',async (req,res)=>{
    try{
        const products= await model.find()
        res.status(200).send(products)
    }catch(er){
        res.status(400).send({message:"Can't get all product details"})
    }
})

router.post('/add',verifyToken,async (req,res)=>{
    try{
      const product= new model(req.body)
      await product.save()
      res.status(200).send({message:"Succesfully added the product!"})
    }catch(er){
         res.status(400).send({message:"Can't get product details"})
    }
})

router.put('/update/:id',verifyToken,async (req,res)=>{
    try{
        const id=req.params.id
        const product= await model.findByIdAndUpdate(
            id,
            req.body,
            {new:true}
        )
        res.status(200).send("product data updated successfully")
    }catch(er){
        res.status(400).send({message:"Can't update product details"})
    }
})

router.delete('/delete/:id',verifyToken,async (req,res)=>{
    try{
      await model.findByIdAndDelete(req.params.id)
      res.status(200).send({message:"product deleted successfully"})
    }catch(er){
         res.status(400).send({message:"Error in deletion"})
    }
})

module.exports=router

