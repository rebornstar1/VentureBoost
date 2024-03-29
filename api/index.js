import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/userroute.js"
import postRouter from "./routes/signuproute.js"
import projectRouter from "./routes/Projectroute.js"
import ImageUploadRoute from "./routes/ImageUploadRoute.js"
import multer from "multer";
import cors from "cors";
import { urlencoded } from "express";
dotenv.config();
import { upload } from "./middlewares/multer.middleware.js";


mongoose.connect(process.env.MONGO).then(()=>{
    console.log("Connection is Successful")
}).catch((err) => {
    console.log(err)
})

const app = express();
app.use(cors());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE, PATCH, OPTIONS'
  );
  next();
});
// app.use(cors);
app.use(express.json());
app.use(express.urlencoded({ extended : false}));
// app.use(cors);
const PORT = 3000;

app.listen(PORT,()=>{
    console.log('Server is Running on the Port 6969')
})

app.use('/api/auth',postRouter)
app.use('/api/user',userRouter)
app.use('/api/projects',projectRouter)
app.use('/api/uploads',ImageUploadRoute)

app.use((err,req,res,next) => {
    console.log(err.statusCode);
    console.log(err.message);
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server error';
    return res.status(statusCode).json({
        success: false,
        statusCode: statusCode,
        message: message,
    })
})

