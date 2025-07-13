import { z } from "zod";

export const vehicleSchema = z.object({
  plate: z.string().min(1, "Plate is required"),
  brand: z.string().min(1, "Brand is required"),
  model: z.string().min(1, "Model is required"),
  customerId: z.number().int("Customer ID must be an integer"),
});

// Para usar en el service o como tipado
export type VehicleInput = z.infer<typeof vehicleSchema>;
