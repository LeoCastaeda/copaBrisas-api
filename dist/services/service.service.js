"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteService = exports.updateService = exports.createService = exports.getServiceById = exports.getAllServices = void 0;
const client_1 = __importDefault(require("../prisma/client"));
const getAllServices = async () => {
    return await client_1.default.service.findMany();
};
exports.getAllServices = getAllServices;
const getServiceById = async (id) => {
    return await client_1.default.service.findUnique({ where: { id } });
};
exports.getServiceById = getServiceById;
const createService = async (data) => {
    return await client_1.default.service.create({ data });
};
exports.createService = createService;
const updateService = async (id, data) => {
    return await client_1.default.service.update({ where: { id }, data });
};
exports.updateService = updateService;
const deleteService = async (id) => {
    return await client_1.default.service.delete({ where: { id } });
};
exports.deleteService = deleteService;
