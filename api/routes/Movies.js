const router = require("express").Router();
const Movie = require("../models/Movie");
const verify = require("../controller/Verifytoken");

//create movie
router.post("/", verify, async (req, res) => {
   if (!req.user.isAdmin) {
    try {
      const newMovie = new Movie(req.body);
      const saveMovie = await newMovie.save();
      res.status(201).json(saveMovie);
    } catch (err) {
      res.status(500).json(err);
    }
   } else {
     res.status(403).json("you are not allow");
   }
});

//update movie

router.put("/:id", verify, async (req, res) => {
  if (!req.user.isAdmin) {
    try {
      const updateMovie = await Movie.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
      res.status(201).json(updateMovie);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("you are not allow");
  }
});

//delet movie

router.delete("/find/:id", verify, async (req, res) => {
  console.log(req.user)
  if (!req.user.isAdmin) {
    try {
      await Movie.findByIdAndDelete(req.params.id);
      res.status(201).json("delete Movie");
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("you are not allow");
  }
});

//get movie

router.get("/find/:id", verify, async (req, res) => {
  
      try {
        const movie=await Movie.findById(req.params.id);
        res.status(201).json(movie);
      } catch (err) {
        res.status(500).json(err);
      }
    
  });

//get random movie

router.get("/random", verify, async (req, res) => {
  const type=req.query.type;
  let movie;
    try {
      if(type ==='series'){
         movie=await Movie.aggregate([
            {$match:{isSeries:true}},
            {$sample:{size:1}}
         ])
      }else{
        movie=await Movie.aggregate([
            {$match:{isSeries:false}},
            {$sample:{size:1}}
         ])
      }

      res.status(200).json(movie)
    } catch (err) {
      res.status(500).json(err);
    }
  
});

//get all movie

router.get("/", verify, async (req, res) => {
  
    try {
      const movie=await Movie.find();
      res.status(201).json(movie.reverse());
    } catch (err) {
      res.status(500).json(err);
    }
  
});


module.exports = router;
