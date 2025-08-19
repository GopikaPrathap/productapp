const express=require('express')
const router=express.Router()
const model=require('../models/userModel')
const jwt=require('jsonwebtoken')

router.use(express.json())
router.use(express.urlencoded({extended:true}))

router.post('/login',async (req,res)=>{
    try{
        const user= await model.findOne({email:req.body.email})
        if(!user){
            res.status(404).send("User not found")
        }
        if(user.password===req.body.password){
            const payload={uname:req.body.email,pwd:req.body.password}
           const token=jwt.sign(payload,"secret")
            res.status(200).send({message:"Login Successful",usertoken:token})
        }else{
            res.status(401).send("Invalid Credentials")
        }
    }catch(er){
        console.error(er)
        res.status(400).send("Error in server")
    }
})


module.exports=router

