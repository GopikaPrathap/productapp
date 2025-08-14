const express=require('express')
const router=express.Router()
const model=require('../models/productModel')

router.use(express.json())
router.use(express.urlencoded({extended:true}))

router.get('/',async (req,res)=>{
    try{
        const products= await model.find()
        res.status(200).send(products)
    }catch(er){
        res.status(400).send({message:"Can't get all product details"})
    }
})

router.post('/add',async (req,res)=>{
    try{
      const product= new model(req.body)
      await product.save()
      res.status(200).send("product added successfully")
    }catch(er){
         res.status(400).send({message:"Can't get product details"})
    }
})

router.put('/update/:id',async (req,res)=>{
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

router.delete('/delete/:id',async (req,res)=>{
    try{
      await model.findByIdAndDelete(req.params.id)
      res.status(200).send("product deleted successfully")
    }catch(er){
         res.status(400).send({message:"Error in deletion"})
    }
})

module.exports=router

