import express from "express";
import { CreateProject,GetProject } from "../controllers/Projectcontroller.js";

const router = express();

router.post('/submit',CreateProject);
router.get('/getprojects',GetProject);

export default router;