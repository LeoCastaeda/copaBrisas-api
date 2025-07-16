import { Request, Response, NextFunction } from "express";
import { ZodError } from "zod";

export function errorHandler(
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (err instanceof ZodError) {
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