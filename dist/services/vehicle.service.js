"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteVehicle = exports.updateVehicle = exports.createVehicle = exports.getVehicleById = exports.getAllVehicles = void 0;
const client_1 = __importDefault(require("../prisma/client"));
const getAllVehicles = async () => {
    return await client_1.default.vehicle.findMany({
        include: {
            customer: true, // ✅ Incluye el cliente al que pertenece el vehículo
        },
    });
};
exports.getAllVehicles = getAllVehicles;
const getVehicleById = async (id) => {
    return await client_1.default.vehicle.findUnique({
        where: { id },
        include: {
            customer: true,
        },
    });
};
exports.getVehicleById = getVehicleById;
const createVehicle = async (data) => {
    return await client_1.default.vehicle.create({ data });
};
exports.createVehicle = createVehicle;
const updateVehicle = async (id, data) => {
    return await client_1.default.vehicle.update({ where: { id }, data });
};
exports.updateVehicle = updateVehicle;
const deleteVehicle = async (id) => {
    return await client_1.default.vehicle.delete({ where: { id } });
};
exports.deleteVehicle = deleteVehicle;
