import express from "express";
import {
  Signup,
  Signin,
  Authgoogle,
  Signout,
  refreshToken,
  checkAuth
} from "../controllers/authcontroller.js";

const router = express.Router();

// Authentication endpoints
router.post('/signup', Signup);
router.post('/signin', Signin);
router.post('/google', Authgoogle);
router.post('/signout', Signout);

// Session management endpoints
router.get('/refresh-token', refreshToken);
router.get('/check-auth', checkAuth);

export default router;