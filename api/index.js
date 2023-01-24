const express=require('express');
const mongoose=require('mongoose');
const app=express();
const dotenv=require('dotenv');
const authControl=require('./routes/auth');
const userControl =require('./routes/Users')
const movieControl=require('./routes/Movies')
const ListControl=require('./routes/Lists');
const cors = require('cors')

app.use(cors());
app.use(express.json())
//dotenv file configration
dotenv.config();

//mongodb Connection
mongoose.connect(process.env.MONGODB_URL, {useNewUrlParser: true}).then(()=>{
    console.log("mongodb Connect");
}).catch((err)=>{
    console.log(err);
})

// all routes

app.use('/api/auth', authControl)
app.use('/api/users', userControl)
app.use('/api/movie', movieControl)
app.use('/api/list', ListControl)

// server port
app.listen(8000,()=>{
    console.log("Backend Server is Runing on 8000 port")
})