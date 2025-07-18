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
exports.deleteCustomer = exports.updateCustomer = exports.createCustomer = exports.getCustomer = exports.getCustomers = void 0;
const customerService = __importStar(require("../services/customer.service"));
const getCustomers = async (req, res, next) => {
    try {
        const customers = await customerService.getAllCustomers();
        res.json(customers);
    }
    catch (error) {
        next(error);
    }
};
exports.getCustomers = getCustomers;
const getCustomer = async (req, res, next) => {
    try {
        const id = Number(req.params.id);
        const customer = await customerService.getCustomerById(id);
        if (!customer) {
            res.status(404).json({ message: "Customer not found" });
            return;
        }
        res.json(customer);
    }
    catch (error) {
        next(error);
    }
};
exports.getCustomer = getCustomer;
const createCustomer = async (req, res, next) => {
    try {
        const { name, phone, email } = req.body;
        const newCustomer = await customerService.createCustomer({ name, phone, email });
        res.status(201).json(newCustomer);
    }
    catch (error) {
        next(error);
    }
};
exports.createCustomer = createCustomer;
const updateCustomer = async (req, res, next) => {
    try {
        const id = Number(req.params.id);
        const data = req.body;
        const updatedCustomer = await customerService.updateCustomer(id, data);
        res.json(updatedCustomer);
    }
    catch (error) {
        res.status(404).json({ message: "Customer not found" });
    }
};
exports.updateCustomer = updateCustomer;
const deleteCustomer = async (req, res, next) => {
    try {
        const id = Number(req.params.id);
        await customerService.deleteCustomer(id);
        res.status(204).send();
    }
    catch (error) {
        res.status(404).json({ message: "Customer not found" });
    }
};
exports.deleteCustomer = deleteCustomer;
