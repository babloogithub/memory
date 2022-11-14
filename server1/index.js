import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();


const PORT = process.env.PORT || 5000;
// console.log(PORT);
// console.log(process.env.CONNECTION_URL);



//const express = require('express'); this is also correct but newest version node also support import.
const app = express();


import postRoutes from './routes/post.js';
import userRoutes from './routes/user.js';


app.use(bodyParser.json({limit:"30mb",extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}));
app.use(cors());




app.use('/post',postRoutes);

app.get('/',(req,res)=>{
      res.send('Hello to Memories API');
})

app.use('/user',userRoutes);


// a blunder mistake i make connection url . i did not specify the name of database ("myFirstDatabase"). that spent my 
// 4 hours of work. please keep this type of attention.
mongoose.connect(process.env.CONNECTION_URL,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=> app.listen(PORT,()=>console.log(`server running on port:${PORT}`))
).catch((error) => console.log(error.message));



