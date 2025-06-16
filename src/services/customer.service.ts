// src/services/customer.service.ts
import  prisma from "../prisma/client";

export const getAllCustomers = async () => {
  return await prisma.customer.findMany();
};

export const getCustomerById = async (id: number) => {
  return await prisma.customer.findUnique({ where: { id } });
};

export const createCustomer = async (data: {
  name: string;
  phone: string;
  email: string;
}) => {
  return await prisma.customer.create({ data });
};

export const updateCustomer = async (id: number, data: Partial<{ name: string; phone: string; email: string }>) => {
  return await prisma.customer.update({ where: { id }, data });
};

export const deleteCustomer = async (id: number) => {
  return await prisma.customer.delete({ where: { id } });
};
