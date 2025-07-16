import { Router } from "express";
import * as controller from "../controllers/review.controller";
import { validate } from "../middlewares/validate";
import { reviewSchema, reviewUpdateSchema } from "../schemas/review.schema";

const router = Router();

router.get("/", controller.getAllReviews);
router.get("/:id", controller.getReviewById);
router.post("/", validate(reviewSchema), controller.createReview);
router.put("/:id", validate(reviewUpdateSchema), controller.updateReview);
router.delete("/:id", controller.deleteReview);

export default router;
