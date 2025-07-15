import { z } from "zod";

export const serviceSchema = z.object({
  name: z.string().min(3),
  price: z.number().positive(),
  duration: z.number().int().positive(), // en minutos, por ejemplo
});
