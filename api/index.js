import  express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

mongoose.connect(process.env.MONGO).then(()=>{
    console.log("Connection is Successful")
}).catch((err) => {
    console.log(err)
})

const app = express();

app.listen(3000,()=>{
    console.log('Server is Running on the Port 3000')
})

// Completed TimeStamp 56 Minutes 37 Seconds Respectively

