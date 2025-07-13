import prisma from "../prisma/client";

export const getAllCities = async () => {
  return await prisma.city.findMany();
};

export const getCityById = async (id: number) => {
  return await prisma.city.findUnique({ where: { id } });
};

export const createCity = async (data: { name: string }) => {
  return await prisma.city.create({ data });
};

export const updateCity = async (id: number, data: { name?: string }) => {
  return await prisma.city.update({ where: { id }, data });
};

export const deleteCity = async (id: number) => {
  return await prisma.city.delete({ where: { id } });
};
export const getCityByName = async (name: string) => {
  return await prisma.city.findFirst({ where: { name } });
};