import { z } from "zod";

export const citySchema = z.object({
  name: z.string().min(2, { message: "El nombre debe tener al menos 2 caracteres" }),
});

export type CityInput = z.infer<typeof citySchema>;