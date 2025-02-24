import express from "express";
import { CreateProject,GetProject } from "../controllers/Projectcontroller.js";

const router = express();

router.get('/test',(req,res,next)=>{
    try{
       res.status(201).json("This is the pay")
    } catch(error)
    {
        //console.log(error);
        next(error);
    }
})

export default router;