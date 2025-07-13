"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteVehicle = exports.updateVehicle = exports.createVehicle = exports.getVehicle = exports.getVehicles = void 0;
const vehicleService = __importStar(require("../services/vehicle.service"));
const getVehicles = async (req, res, next) => {
    try {
        const vehicles = await vehicleService.getAllVehicles();
        return res.json(vehicles);
    }
    catch (error) {
        return next(error);
    }
};
exports.getVehicles = getVehicles;
const getVehicle = async (req, res, next) => {
    try {
        const id = Number(req.params.id);
        const vehicle = await vehicleService.getVehicleById(id);
        if (!vehicle) {
            return res.status(404).json({ message: "Vehicle not found" });
        }
        return res.json(vehicle);
    }
    catch (error) {
        return next(error);
    }
};
exports.getVehicle = getVehicle;
const createVehicle = async (req, res, next) => {
    try {
        const { plate, brand, model, customerId } = req.body;
        const newVehicle = await vehicleService.createVehicle({
            plate,
            brand,
            model,
            customerId,
        });
        return res.status(201).json(newVehicle);
    }
    catch (error) {
        return next(error);
    }
};
exports.createVehicle = createVehicle;
const updateVehicle = async (req, res, next) => {
    try {
        const id = Number(req.params.id);
        const data = req.body;
        const updated = await vehicleService.updateVehicle(id, data);
        return res.json(updated);
    }
    catch (error) {
        return next(error);
    }
};
exports.updateVehicle = updateVehicle;
const deleteVehicle = async (req, res, next) => {
    try {
        const id = Number(req.params.id);
        await vehicleService.deleteVehicle(id);
        return res.status(204).send();
    }
    catch (error) {
        return next(error);
    }
};
exports.deleteVehicle = deleteVehicle;
