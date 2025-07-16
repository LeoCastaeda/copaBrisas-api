"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reviewUpdateSchema = exports.reviewSchema = void 0;
const zod_1 = require("zod");
exports.reviewSchema = zod_1.z.object({
    content: zod_1.z.string().min(1),
    rating: zod_1.z.number().min(1).max(5),
    customerId: zod_1.z.number().int().positive(),
});
exports.reviewUpdateSchema = zod_1.z.object({
    content: zod_1.z.string().optional(),
    rating: zod_1.z.number().min(1).max(5).optional(),
    customerId: zod_1.z.number().int().positive().optional(),
});
