const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

mongoose.connect(process.env.URL,{
useUnifiedTopology:true,
useNewUrlParser:true
}).then((req,res)=>{
    console.log('MongoDB Connected.');
}).catch((err)=>{
    console.log("MongoDB not Connected", err);
});