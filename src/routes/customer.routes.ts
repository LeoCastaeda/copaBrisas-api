import { Router } from "express";
import * as customerController from "../controllers/customer.controller";
import { validate } from "../middlewares/validate";
import { customerSchema } from "../schemas/customer.schema";

const router = Router();

router.get("/", customerController.getCustomers);
router.get("/:id", customerController.getCustomer);
router.post("/", validate(customerSchema), customerController.createCustomer);
router.put("/:id", validate(customerSchema), customerController.updateCustomer);
router.delete("/:id", customerController.deleteCustomer);

export default router;

