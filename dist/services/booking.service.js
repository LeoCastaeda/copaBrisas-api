"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBooking = exports.updateBooking = exports.createBooking = exports.getBookingById = exports.getAllBookings = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const getAllBookings = async () => {
    return prisma.booking.findMany({
        include: {
            customer: true,
            city: true,
            service: true,
            vehicle: true,
        },
    });
};
exports.getAllBookings = getAllBookings;
const getBookingById = async (id) => {
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
exports.getBookingById = getBookingById;
const createBooking = async (data) => {
    return prisma.booking.create({ data });
};
exports.createBooking = createBooking;
const updateBooking = async (id, data) => {
    return prisma.booking.update({
        where: { id },
        data,
    });
};
exports.updateBooking = updateBooking;
const deleteBooking = async (id) => {
    return prisma.booking.delete({
        where: { id },
    });
};
exports.deleteBooking = deleteBooking;
