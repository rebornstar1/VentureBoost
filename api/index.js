import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import multer from "multer";

// Import routes
import userRouter from "./routes/userroute.js";
import postRouter from "./routes/signuproute.js";
import projectRouter from "./routes/Projectroute.js";
import ImageUploadRoute from "./routes/ImageUploadRoute.js";

// Import middleware
import { upload } from "./middlewares/multer.middleware.js";
import cookieParser from 'cookie-parser';




// Load environment variables
dotenv.config();

// Connect to MongoDB
mongoose.connect(process.env.MONGO)
  .then(() => {
    console.log("Connection to MongoDB is Successful");
  })
  .catch((err) => {
    console.log(err);
  });

// Initialize Express app
const app = express();
const PORT = 3000;

// Middleware
app.use(cors({
  origin: '*', // Your frontend URL (adjust as needed)
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// CORS configuration
// app.use((req, res, next) => {
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   res.setHeader(
//     'Access-Control-Allow-Headers',
//     'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'
//   );
//   res.setHeader(
//     'Access-Control-Allow-Methods',
//     'GET, POST, PUT, DELETE, PATCH, OPTIONS'
//   );
//   next();
// });

// Routes
app.use('/api/auth', postRouter);
app.use('/api/user', userRouter);
app.use('/api/projects', projectRouter);
app.use('/api/uploads', ImageUploadRoute);

// Error handling middleware
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server error';
  
  console.log(statusCode);
  console.log(message);
  
  return res.status(statusCode).json({
    success: false,
    statusCode: statusCode,
    message: message,
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is Running on Port ${PORT}`);
});

