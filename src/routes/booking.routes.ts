import { Router } from "express";
import * as bookingController from "../controllers/booking.controller";
import { validate } from "../middlewares/validate";
import { bookingSchema } from "../schemas/booking.schema";

const router = Router();

router.get("/", bookingController.getBookings);
router.get("/:id", bookingController.getBooking);
router.post("/", validate(bookingSchema), bookingController.createBooking);
router.put("/:id", validate(bookingSchema), bookingController.updateBooking);
router.delete("/:id", bookingController.deleteBooking);

export default router;
