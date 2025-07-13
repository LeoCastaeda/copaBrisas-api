"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBooking = exports.updateBooking = exports.createBooking = exports.getBooking = exports.getBookings = void 0;
const bookingService = __importStar(require("../services/booking.service"));
const getBookings = async (req, res, next) => {
    try {
        const bookings = await bookingService.getAllBookings();
        res.json(bookings);
    }
    catch (error) {
        next(error);
    }
};
exports.getBookings = getBookings;
const getBooking = async (req, res, next) => {
    try {
        const id = Number(req.params.id);
        const booking = await bookingService.getBookingById(id);
        if (!booking) {
            return res.status(404).json({ message: "Booking not found" });
        }
        res.json(booking);
    }
    catch (error) {
        next(error);
    }
};
exports.getBooking = getBooking;
const createBooking = async (req, res, next) => {
    try {
        const booking = await bookingService.createBooking(req.body);
        res.status(201).json(booking);
    }
    catch (error) {
        next(error);
    }
};
exports.createBooking = createBooking;
const updateBooking = async (req, res, next) => {
    try {
        const id = Number(req.params.id);
        const booking = await bookingService.updateBooking(id, req.body);
        res.json(booking);
    }
    catch (error) {
        next(error);
    }
};
exports.updateBooking = updateBooking;
const deleteBooking = async (req, res, next) => {
    try {
        const id = Number(req.params.id);
        await bookingService.deleteBooking(id);
        res.status(204).send();
    }
    catch (error) {
        next(error);
    }
};
exports.deleteBooking = deleteBooking;
