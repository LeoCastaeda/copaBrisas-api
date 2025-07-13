import prisma from "../prisma/client";

export const getAllVehicles = async () => {
  return await prisma.vehicle.findMany({
    include: {
      customer: true, // ✅ Incluye el cliente al que pertenece el vehículo
    },
  });
};

export const getVehicleById = async (id: number) => {
  return await prisma.vehicle.findUnique({
    where: { id },
    include: {
      customer: true,
    },
  });
};

export const createVehicle = async (data: {
  plate: string;
  brand: string;
  model: string;
  customerId: number;
}) => {
  return await prisma.vehicle.create({ data });
};

export const updateVehicle = async (
  id: number,
  data: Partial<{ plate: string; brand: string; model: string; customerId: number }>
) => {
  return await prisma.vehicle.update({ where: { id }, data });
};

export const deleteVehicle = async (id: number) => {
  return await prisma.vehicle.delete({ where: { id } });
};