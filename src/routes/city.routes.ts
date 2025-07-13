import { Router } from "express";
import * as controller from "../controllers/city.controller";

const router = Router();

router.get("/", controller.getAllCities);
router.get("/:id", controller.getCityById);
router.post("/", controller.createCity);
router.put("/:id", controller.updateCity);
router.delete("/:id", controller.deleteCity);

export default router;
