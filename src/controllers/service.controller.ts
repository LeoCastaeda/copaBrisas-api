import { Request, Response } from "express";
import * as serviceService from "../services/service.service";

export const getAllServices = async (req: Request, res: Response) => {
  const services = await serviceService.getAllServices();
  res.json(services);
};

export const getServiceById = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const service = await serviceService.getServiceById(id);
  res.json(service);
};

export const createService = async (req: Request, res: Response) => {
  const newService = await serviceService.createService(req.body);
  res.status(201).json(newService);
};

export const updateService = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const updatedService = await serviceService.updateService(id, req.body);
  res.json(updatedService);
};

export const deleteService = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  await serviceService.deleteService(id);
  res.status(204).send();
};
