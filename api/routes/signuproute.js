import express from "express";
import Auth from "../controllers/signupcontroller.js"

const router = express();

router.post('/signup',Auth);

export default router;