import express from 'express'
import Test from '../controllers/user.controller.js'

const router = express.Router();

router.get('/test',Test);

export default router;
