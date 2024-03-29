import express from "express"
import Test from "../controllers/user.controller.js"
import { Updateuser } from "../controllers/authcontroller.js";
import { Deleteuser } from "../controllers/authcontroller.js";
import { verifyToken } from '../utils/verifyUser.js'
import {SignOutUser} from "../controllers/authcontroller.js"

const router = express.Router();

router.get('/test',Test);
router.put('/updateuser',Updateuser);
router.delete('/deleteuser',Deleteuser);
router.post('/signout',SignOutUser);

export default router;
