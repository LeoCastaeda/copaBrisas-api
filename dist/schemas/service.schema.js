"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serviceSchema = void 0;
const zod_1 = require("zod");
exports.serviceSchema = zod_1.z.object({
    name: zod_1.z.string().min(3),
    price: zod_1.z.number().positive(),
    duration: zod_1.z.number().int().positive(), // en minutos, por ejemplo
});
