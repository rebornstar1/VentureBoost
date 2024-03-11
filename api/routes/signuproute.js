import express from "express";
import {Signup} from "../controllers/authcontroller.js"
import {Signin} from "../controllers/authcontroller.js"
import { Authgoogle } from "../controllers/authcontroller.js";

const router = express();

router.post('/signup',Signup);
router.post('/signin',Signin);
router.post('/google',Authgoogle);

export default router;