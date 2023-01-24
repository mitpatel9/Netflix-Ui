const router = require("express").Router();
const List = require("../models/List");
const verify = require("../controller/Verifytoken");

//create list
router.post("/", verify, async (req, res) => {
   if (!req.user.isAdmin) {
    try {
      const newList = new List(req.body);
      const saveList = await newList.save();
      res.status(201).json(saveList);
    } catch (err) {
      res.status(500).json(err);
    }
   } else {
     res.status(403).json("you are not allow");
   }
});

//delete list

router.delete("/:id", verify, async (req, res) => {
    if (!req.user.isAdmin) {
     try {
       await List.findByIdAndDelete(req.params.id)
       res.status(200).json('delete list');
     } catch (err) {
       res.status(500).json(err);
     }
    } else {
      res.status(403).json("you are not allow");
    }
 });
 
 //get all list

 router.get("/", verify, async (req, res) => {
    const typeQuery=req.query.type;
    const genreQuery=req.query.genre;
    let list=[];
     try {
       if(typeQuery){
        if(genreQuery){
           list=await List.aggregate([
            {$sample:{size:12}},
            {$match:{type:typeQuery,genre:genreQuery}}
           ])
        }else{
            list=await List.aggregate([
                {$sample:{size:12}},
                {$match:{type:typeQuery}}
               ])
        }
       }else{
        list =await List.aggregate([{$sample:{size:12}}])
       }
       res.status(200).json(list);
     } catch (err) {
       res.status(500).json(err);
     }
    
 });
 



module.exports = router;
