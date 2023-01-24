const router=require('express').Router();
const User= require('../models/User');
const CryptoJS = require("crypto-js");
const jwt= require('jsonwebtoken')

//register
router.post("/register", async(req,res)=>{
    
    try{
        const newUser= new User({
            username:req.body.username,
            email:req.body.email,
            password:CryptoJS.AES.encrypt(req.body.password, process.env.SECRET_KEY).toString()
        })
        const user= await newUser.save();
        res.status(200).json(user)
    }catch(err){
        res.status(404).json(err)
    }
})

//login
router.post("/login", async(req,res)=>{
    try{
        const user =await User.findOne({email:req.body.email});
        !user && res.status(401).json("Wrong email And Password");

        const bytes  = CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY);
        const originalpassword = bytes.toString(CryptoJS.enc.Utf8);
        originalpassword !== req.body.password &&
        res.status(401).json("Wrong email And Password");

        //token
        const accesstoken=jwt.sign(
            { id: user._id , isAdmin:user.isadmin},
            process.env.SECRET_KEY,
            {expiresIn:'5d'}
        )

        const {password, ...info}=user._doc;
        res.status(200).json({...info,accesstoken})
    }catch(err){
        res.status(404).json(err)
    }
})

module.exports=router;


// Encrypt
//var ciphertext = CryptoJS.AES.encrypt('my message', 'secret key 123').toString();

// Decrypt
//var bytes  = CryptoJS.AES.decrypt(ciphertext, 'secret key 123');
//var originalText = bytes.toString(CryptoJS.enc.Utf8);