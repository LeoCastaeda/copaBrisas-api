import { Request, Response, NextFunction } from "express";
import * as customerService from "../services/customer.service";

export const getCustomers = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const customers = await customerService.getAllCustomers();
    res.json(customers);
  } catch (error) {
    next(error);
  }
};

export const getCustomer = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const id = Number(req.params.id);
    const customer = await customerService.getCustomerById(id);
    if (!customer) {
      res.status(404).json({ message: "Customer not found" });
      return;
    }
    res.json(customer);
  } catch (error) {
    next(error);
  }
};

export const createCustomer = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { name, phone, email } = req.body;
    const newCustomer = await customerService.createCustomer({ name, phone, email });
    res.status(201).json(newCustomer);
  } catch (error) {
    next(error);
  }
};

export const updateCustomer = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const id = Number(req.params.id);
    const data = req.body;
    const updatedCustomer = await customerService.updateCustomer(id, data);
    res.json(updatedCustomer);
  } catch (error) {
    res.status(404).json({ message: "Customer not found" });
  }
};

export const deleteCustomer = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const id = Number(req.params.id);
    await customerService.deleteCustomer(id);
    res.status(204).send();
  } catch (error) {
    res.status(404).json({ message: "Customer not found" });
  }
};
