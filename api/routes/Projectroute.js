import express from "express";
import { CreateProject } from "../controllers/Projectcontroller.js";

const router = express();

router.post('/createproject',CreateProject);

export default router;