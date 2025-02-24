import express from "express";
import { DashTestimonial } from "../controllers/Dashboardcontroller.js";
import { SeeFeedBack } from "../controllers/Dashboardcontroller.js";
import { OfferInput } from "../controllers/Dashboardcontroller.js";

const router = express();

router.post('/testimonial',DashTestimonial)
router.get('/seefeedback',SeeFeedBack)
router.post('/offer',OfferInput)

export default router;