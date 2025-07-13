"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCustomer = exports.updateCustomer = exports.createCustomer = exports.getCustomerById = exports.getAllCustomers = void 0;
// src/services/customer.service.ts
const client_1 = __importDefault(require("../prisma/client"));
const getAllCustomers = async () => {
    return await client_1.default.customer.findMany();
};
exports.getAllCustomers = getAllCustomers;
const getCustomerById = async (id) => {
    return await client_1.default.customer.findUnique({ where: { id } });
};
exports.getCustomerById = getCustomerById;
const createCustomer = async (data) => {
    return await client_1.default.customer.create({ data });
};
exports.createCustomer = createCustomer;
const updateCustomer = async (id, data) => {
    return await client_1.default.customer.update({ where: { id }, data });
};
exports.updateCustomer = updateCustomer;
const deleteCustomer = async (id) => {
    return await client_1.default.customer.delete({ where: { id } });
};
exports.deleteCustomer = deleteCustomer;
