"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = errorHandler;
const zod_1 = require("zod");
function errorHandler(err, req, res, next) {
    if (err instanceof zod_1.ZodError) {
        return res.status(400).json({
            message: "Validation failed",
            errors: err.issues,
        });
    }
    // Ejemplo para otros errores personalizados
    if (err.status && err.message) {
        return res.status(err.status).json({
            message: err.message,
        });
    }
    console.error("Unexpected error:", err);
    return res.status(500).json({
        message: "Internal Server Error",
    });
}
