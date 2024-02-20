import  express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js"
import postRouter from "./routes/authroute.js"
dotenv.config();

mongoose.connect(process.env.MONGO).then(()=>{
    console.log("Connection is Successful")
}).catch((err) => {
    console.log(err)
})

const app = express();
app.use(express.json());

app.listen(3000,()=>{
    console.log('Server is Running on the Port 3000')
})

app.use('/api/auth',postRouter)
app.use('/api/user',userRouter)

