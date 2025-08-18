const express=require('express')
const router=express.Router()
const model=require('../models/userModel')

router.use(express.json())
router.use(express.urlencoded({extended:true}))

router.post('/login',async (req,res)=>{
    try{
        const user= await model.findOne({email:req.body.email})
        if(!user){
            res.status(404).send("User not found")
        }
        if(user.password===req.body.password){
            res.status(200).send({message:"Login Successful"})
        }else{
            res.status(401).send("Invalid Credentials")
        }
    }catch(er){
        console.error(er)
        res.status(400).send("Error in server")
    }
})


module.exports=router

