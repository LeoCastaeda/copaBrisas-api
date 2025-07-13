import { Request, Response } from "express";
import * as cityService from "../services/city.service";

export const getAllCities = async (req: Request, res: Response) => {
  const cities = await cityService.getAllCities();
  res.json(cities);
};

export const getCityById = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const city = await cityService.getCityById(id);
  res.json(city);
};

export const createCity = async (req: Request, res: Response) => {
  const newCity = await cityService.createCity(req.body);
  res.status(201).json(newCity);
};

export const updateCity = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const updatedCity = await cityService.updateCity(id, req.body);
  res.json(updatedCity);
};

export const deleteCity = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  await cityService.deleteCity(id);
  res.status(204).send();
};
