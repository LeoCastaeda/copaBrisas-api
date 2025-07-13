import { Router } from "express";
import * as controller from "../controllers/review.controller";

const router = Router();

router.get("/", controller.getAllReviews);
router.get("/:id", controller.getReviewById);
router.post("/", controller.createReview);
router.delete("/:id", controller.deleteReview);

export default router;
