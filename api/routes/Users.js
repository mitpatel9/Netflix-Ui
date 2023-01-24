const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const verify = require("../controller/Verifytoken");

//update
router.put("/:id", verify, async (req, res) => {
  if (req.user.id === req.params.id || req.user.isAdmin) {
    if (req.body.password) {
      req.body.password = CryptoJS.AES.encrypt(
        req.body.password,
        process.env.SECRET_KEY
      ).toString();
    }
    try {
      const updateuser = await User.findByIdAndUpdate(req.params.id, {
        $set: req.body,
        
      },{new:true});
      
      res.status(200).json(updateuser);
    } catch(err) {
    res.status(404).json(err)
    }
  }
  else{
    res.status(403).json('you can upadate only your acccount')
  }
});
//delete
router.delete("/:id", verify, async (req, res) => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      try {
        await User.findByIdAndDelete(req.params.id)
        res.status(200).json("user has been deleted...");
      } catch(err) {
      res.status(404).json(err)
      }
    }
    else{
      res.status(403).json('you can delete only your acccount')
    }
  });
//get
router.get("/find/:id", async (req, res) => {
      try {
        const user=await User.findById(req.params.id)
        const {password, ...info}=user._doc;
        res.status(200).json(info);
      } catch(err) {
      res.status(404).json(err)
      }
    } 
);
//getall
router.get("/", verify, async (req, res) => {
    const query=req.query.new;
    //console.log(req.query.new)
    //console.log(req.user.isAdmin)
    if (!req.User.isAdmin) {
        try {
          const users= query ? await User.find().sort({_id:-1}).limit(10): await User.find() 
          res.status(200).json(users);
        } catch(err) {
        res.status(404).json(err)
        }
      }
      else{
        res.status(403).json('you are  not allow this access')
      }
  });

//get user stats
router.get("/stats", async(req ,res)=>{
  const today=new Date();
  const lastyear=today.setFullYear(today.setFullYear-1);
 
  try{
    const data=await User.aggregate([
      {
        $project:{
          month:{$month:"$createdAt"}
        },
      },
      {
        $group:{
          _id:"$month",
          total:{$sum:1}
        }
      }, 
    ])
    res.status(200).json(data)
  }catch(err){
  res.status(500).json(err)
  }
})


module.exports=router;
