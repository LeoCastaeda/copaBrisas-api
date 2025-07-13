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
exports.deleteService = exports.updateService = exports.createService = exports.getServiceById = exports.getAllServices = void 0;
const serviceService = __importStar(require("../services/service.service"));
const getAllServices = async (req, res) => {
    const services = await serviceService.getAllServices();
    res.json(services);
};
exports.getAllServices = getAllServices;
const getServiceById = async (req, res) => {
    const id = Number(req.params.id);
    const service = await serviceService.getServiceById(id);
    res.json(service);
};
exports.getServiceById = getServiceById;
const createService = async (req, res) => {
    const newService = await serviceService.createService(req.body);
    res.status(201).json(newService);
};
exports.createService = createService;
const updateService = async (req, res) => {
    const id = Number(req.params.id);
    const updatedService = await serviceService.updateService(id, req.body);
    res.json(updatedService);
};
exports.updateService = updateService;
const deleteService = async (req, res) => {
    const id = Number(req.params.id);
    await serviceService.deleteService(id);
    res.status(204).send();
};
exports.deleteService = deleteService;
