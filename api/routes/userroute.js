import express from "express";
import Test from "../controllers/user.controller.js";
import { Updateuser, Deleteuser, SignOutUser } from "../controllers/authcontroller.js";
import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router();

// Test route
router.get('/test', Test);

// Protected user routes
router.put('/updateuser', verifyToken, Updateuser);
router.delete('/deleteuser', verifyToken, Deleteuser);
router.post('/signout', verifyToken, SignOutUser);

export default router;