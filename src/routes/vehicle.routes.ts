import { Router } from "express";
import * as vehicleController from "../controllers/vehicle.controller";
import { validate } from "../middlewares/validate";
import { vehicleSchema } from "../schemas/vehicle.schema";

const router = Router();

router.get("/", vehicleController.getVehicles);
router.get("/:id", vehicleController.getVehicle);
router.post("/", validate(vehicleSchema), vehicleController.createVehicle);
router.put("/:id", validate(vehicleSchema), vehicleController.updateVehicle);
router.delete("/:id", vehicleController.deleteVehicle);

export default router;
