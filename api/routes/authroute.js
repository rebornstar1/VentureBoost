import express from "express";
import Auth from "../controllers/authcontroller.js"

const router = express();

router.post('/safeauth',Auth);

export default router;