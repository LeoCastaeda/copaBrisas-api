import { PrismaClient } from "@prisma/client";
import { BookingInput } from "../schemas/booking.schema";

const prisma = new PrismaClient();

export const getAllBookings = async () => {
  return prisma.booking.findMany({
    include: {
      customer: true,
      city: true,
      service: true,
      vehicle: true,
    },
  });
};

export const getBookingById = async (id: number) => {
  return prisma.booking.findUnique({
    where: { id },
    include: {
      customer: true,
      city: true,
      service: true,
      vehicle: true,
    },
  });
};

export const createBooking = async (data: BookingInput) => {
  return prisma.booking.create({ data });
};

export const updateBooking = async (id: number, data: Partial<BookingInput>) => {
  return prisma.booking.update({
    where: { id },
    data,
  });
};

export const deleteBooking = async (id: number) => {
  return prisma.booking.delete({
    where: { id },
  });
};
