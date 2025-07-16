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
const express_1 = require("express");
const vehicleController = __importStar(require("../controllers/vehicle.controller"));
const validate_1 = require("../middlewares/validate");
const vehicle_schema_1 = require("../schemas/vehicle.schema");
const router = (0, express_1.Router)();
router.get("/", vehicleController.getVehicles);
router.get("/:id", vehicleController.getVehicle);
router.post("/", (0, validate_1.validate)(vehicle_schema_1.vehicleSchema), vehicleController.createVehicle);
router.put("/:id", (0, validate_1.validate)(vehicle_schema_1.vehicleSchema), vehicleController.updateVehicle);
router.delete("/:id", vehicleController.deleteVehicle);
exports.default = router;
