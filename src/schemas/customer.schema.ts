import { z } from "zod";

export const customerSchema = z.object({
  name: z.string().min(1, "Name is required"),
  phone: z.string().min(7, "Phone must have at least 7 digits"),
  email: z.string().email("Email is not valid"),
});

export type CustomerInput = z.infer<typeof customerSchema>;
