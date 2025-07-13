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
exports.deleteCity = exports.updateCity = exports.createCity = exports.getCityById = exports.getAllCities = void 0;
const cityService = __importStar(require("../services/city.service"));
const getAllCities = async (req, res) => {
    const cities = await cityService.getAllCities();
    res.json(cities);
};
exports.getAllCities = getAllCities;
const getCityById = async (req, res) => {
    const id = Number(req.params.id);
    const city = await cityService.getCityById(id);
    res.json(city);
};
exports.getCityById = getCityById;
const createCity = async (req, res) => {
    const newCity = await cityService.createCity(req.body);
    res.status(201).json(newCity);
};
exports.createCity = createCity;
const updateCity = async (req, res) => {
    const id = Number(req.params.id);
    const updatedCity = await cityService.updateCity(id, req.body);
    res.json(updatedCity);
};
exports.updateCity = updateCity;
const deleteCity = async (req, res) => {
    const id = Number(req.params.id);
    await cityService.deleteCity(id);
    res.status(204).send();
};
exports.deleteCity = deleteCity;
