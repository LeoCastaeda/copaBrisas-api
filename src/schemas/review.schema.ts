import { z } from "zod";

export const reviewSchema = z.object({
    

  content: z.string().min(1),
  rating: z.number().min(1).max(5),
  customerId: z.number().int().positive(),
});
export const reviewUpdateSchema = z.object({
  content: z.string().optional(),
  rating: z.number().min(1).max(5).optional(),
  customerId: z.number().int().positive().optional(),
});
