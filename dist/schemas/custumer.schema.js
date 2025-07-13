"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customerSchema = void 0;
const zod_1 = require("zod");
exports.customerSchema = zod_1.z.object({
    name: zod_1.z.string().min(1, "Name is required"),
    phone: zod_1.z.string().min(7, "Phone must have at least 7 digits"),
    email: zod_1.z.string().email("Email is not valid"),
});
