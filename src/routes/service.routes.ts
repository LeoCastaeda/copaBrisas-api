import { Router } from "express";
import * as controller from "../controllers/service.controller";
import { validate } from "../middlewares/validate";
import { serviceSchema } from "../schemas/service.schema";

const router = Router();

router.get("/", controller.getAllServices);
router.get("/:id", controller.getServiceById);
router.post("/", validate(serviceSchema), controller.createService);
router.put("/:id", validate(serviceSchema), controller.updateService);
router.delete("/:id", controller.deleteService);

export default router;
