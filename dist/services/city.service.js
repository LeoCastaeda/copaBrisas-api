"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCityByName = exports.deleteCity = exports.updateCity = exports.createCity = exports.getCityById = exports.getAllCities = void 0;
const client_1 = __importDefault(require("../prisma/client"));
const getAllCities = async () => {
    return await client_1.default.city.findMany();
};
exports.getAllCities = getAllCities;
const getCityById = async (id) => {
    return await client_1.default.city.findUnique({ where: { id } });
};
exports.getCityById = getCityById;
const createCity = async (data) => {
    return await client_1.default.city.create({ data });
};
exports.createCity = createCity;
const updateCity = async (id, data) => {
    return await client_1.default.city.update({ where: { id }, data });
};
exports.updateCity = updateCity;
const deleteCity = async (id) => {
    return await client_1.default.city.delete({ where: { id } });
};
exports.deleteCity = deleteCity;
const getCityByName = async (name) => {
    return await client_1.default.city.findFirst({ where: { name } });
};
exports.getCityByName = getCityByName;
