"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.citySchema = void 0;
const zod_1 = require("zod");
exports.citySchema = zod_1.z.object({
    name: zod_1.z.string().min(2, { message: "El nombre debe tener al menos 2 caracteres" }),
});
