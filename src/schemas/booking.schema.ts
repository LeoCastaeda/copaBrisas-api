import { z } from "zod";

export const bookingSchema = z.object({
  date: z.string().refine((val) => !isNaN(Date.parse(val)), {
    message: "Invalid date format",
  }),
  customerId: z.number().int().positive(),
  cityId: z.number().int().positive(),
  serviceId: z.number().int().positive(),
  vehicleId: z.number().int().positive(),
  status: z.string().min(1, "Status is required"),
});

export type BookingInput = z.infer<typeof bookingSchema>;
