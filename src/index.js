// import mongoose from 'mongoose';
// import {dabba} from "./constants";

// require('dotenv').config({path:'./env'})
// or
import dotenv from "dotenv"
import connectDB from './db/index.js';

dotenv.config({
    path:'./env'
})


connectDB()
.then((res) =>{
    app.listen(process.env.PORT || 8000, () =>{
        console.log(`server is running at port: ${process.env.PORT}`);
    })
    
})
.catch((err) =>{
    console.error("mongoDB connection failed",err);
}
);