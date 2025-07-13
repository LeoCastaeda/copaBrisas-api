"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.vehicleSchema = void 0;
const zod_1 = require("zod");
exports.vehicleSchema = zod_1.z.object({
    plate: zod_1.z.string().min(1, "Plate is required"),
    brand: zod_1.z.string().min(1, "Brand is required"),
    model: zod_1.z.string().min(1, "Model is required"),
    customerId: zod_1.z.number().int("Customer ID must be an integer"),
});
