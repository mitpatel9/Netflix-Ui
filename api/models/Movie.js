const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema({
  tital: {
    type: String,
    required: true,
    unique: true,
  },
  desc: {
    type: String,
  },
  img: {
    type: String
  },
  imgTital: {
    type:String,
  },
  imgSm:{
    type:String
  },
  trailer:{
    type:String
  },
  video:{
    type:String
  },
  year:{
    type:String
  },
  limit:{
    type:Number
  },
  duration:{
    type:Number
  },
 genre:{
    type:String
  },
  isSeries:{
    type:Boolean,
    default:false
  }
},{timestamps:true});


module.exports=mongoose.model('Movie',MovieSchema);