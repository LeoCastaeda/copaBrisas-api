import { Router } from "express";
import * as controller from "../controllers/service.controller";

const router = Router();

router.get("/", controller.getAllServices);
router.get("/:id", controller.getServiceById);
router.post("/", controller.createService);
router.put("/:id", controller.updateService);
router.delete("/:id", controller.deleteService);

export default router;
