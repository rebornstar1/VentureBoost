import express from "express";
import Auth from "../controllers/authcontroller.js"

const router = express();

router.get('/auth',Auth);

export default router;