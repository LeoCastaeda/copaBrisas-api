"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookingSchema = void 0;
const zod_1 = require("zod");
exports.bookingSchema = zod_1.z.object({
    date: zod_1.z.string().refine((val) => !isNaN(Date.parse(val)), {
        message: "Invalid date format",
    }),
    customerId: zod_1.z.number().int().positive(),
    cityId: zod_1.z.number().int().positive(),
    serviceId: zod_1.z.number().int().positive(),
    vehicleId: zod_1.z.number().int().positive(),
    status: zod_1.z.string().min(1, "Status is required"),
});
