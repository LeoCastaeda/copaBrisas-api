import { Request, Response, NextFunction } from "express";
import * as bookingService from "../services/booking.service";

export const getBookings = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const bookings = await bookingService.getAllBookings();
    res.json(bookings);
  } catch (error) {
    next(error);
  }
};

export const getBooking = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = Number(req.params.id);
    const booking = await bookingService.getBookingById(id);
    if (!booking) {
      return res.status(404).json({ message: "Booking not found" });
    }
    res.json(booking);
  } catch (error) {
    next(error);
  }
};

export const createBooking = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const booking = await bookingService.createBooking(req.body);
    res.status(201).json(booking);
  } catch (error) {
    next(error);
  }
};

export const updateBooking = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = Number(req.params.id);
    const booking = await bookingService.updateBooking(id, req.body);
    res.json(booking);
  } catch (error) {
    next(error);
  }
};

export const deleteBooking = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = Number(req.params.id);
    await bookingService.deleteBooking(id);
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};
