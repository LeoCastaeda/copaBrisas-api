import prisma  from "../prisma/client";

export const getAllServices = async () => {
  return await prisma.service.findMany();
};

export const getServiceById = async (id: number) => {
  return await prisma.service.findUnique({ where: { id } });
};

export const createService = async (data: { name: string; price: number; duration: number }) => {
  return await prisma.service.create({ data });
};

export const updateService = async (id: number, data: { name?: string; price?: number; duration?: number }) => {
  return await prisma.service.update({ where: { id }, data });
};

export const deleteService = async (id: number) => {
  return await prisma.service.delete({ where: { id } });
};
