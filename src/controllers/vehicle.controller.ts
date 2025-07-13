import { Request, Response, NextFunction } from "express";
import * as vehicleService from "../services/vehicle.service";

export const getVehicles = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const vehicles = await vehicleService.getAllVehicles();
    return res.json(vehicles);
  } catch (error) {
    return next(error);
  }
};

export const getVehicle = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = Number(req.params.id);
    const vehicle = await vehicleService.getVehicleById(id);
    if (!vehicle) {
      return res.status(404).json({ message: "Vehicle not found" });
    }
    return res.json(vehicle);
  } catch (error) {
    return next(error);
  }
};

export const createVehicle = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { plate, brand, model, customerId } = req.body;
    const newVehicle = await vehicleService.createVehicle({
      plate,
      brand,
      model,
      customerId,
    });
    return res.status(201).json(newVehicle);
  } catch (error) {
    return next(error);
  }
};

export const updateVehicle = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = Number(req.params.id);
    const data = req.body;
    const updated = await vehicleService.updateVehicle(id, data);
    return res.json(updated);
  } catch (error) {
    return next(error);
  }
};

export const deleteVehicle = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = Number(req.params.id);
    await vehicleService.deleteVehicle(id);
    return res.status(204).send();
  } catch (error) {
    return next(error);
  }
};