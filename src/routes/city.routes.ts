import { Router } from "express";
import * as controller from "../controllers/city.controller";
import { validate } from "../middlewares/validate";
import { citySchema } from "../schemas/city.schema";

const router = Router();

router.get("/", controller.getAllCities);
router.get("/:id", controller.getCityById);
router.post("/", validate(citySchema), controller.createCity);
router.put("/:id", validate(citySchema), controller.updateCity);
router.delete("/:id", controller.deleteCity);

export default router;
