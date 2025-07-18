import { z } from "zod";

/**
 * Zod schema for validating Customer input.
 */
export const customerSchema = z.object({
  name: z
    .string()
    .min(1, "Name is required"),
  phone: z
    .string()
    .min(7, "Phone must have at least 7 digits"),
  email: z
    .string()
    .email("Email is not valid"),
});

/**
 * TypeScript type inferred from the customerSchema.
 * Used to type request bodies and ensure type safety across the app.
 */
export type CustomerInput = z.infer<typeof customerSchema>;
