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
const controller = __importStar(require("../controllers/city.controller"));
const validate_1 = require("../middlewares/validate");
const city_schema_1 = require("../schemas/city.schema");
const router = (0, express_1.Router)();
/**
 * @swagger
 * tags:
 *   name: City
 *   description: Gestión de ciudades
 */
/**
 * @swagger
 * /api/cities:
 *   get:
 *     summary: Obtener todas las ciudades
 *     tags: [City]
 *     responses:
 *       200:
 *         description: Lista de ciudades
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/City'
 */
router.get("/", controller.getAllCities);
/**
 * @swagger
 * /api/cities/{id}:
 *   get:
 *     summary: Obtener una ciudad por ID
 *     tags: [City]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de la ciudad
 *     responses:
 *       200:
 *         description: Ciudad encontrada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/City'
 *       404:
 *         description: Ciudad no encontrada
 */
router.get("/:id", controller.getCityById);
/**
 * @swagger
 * /api/cities:
 *   post:
 *     summary: Crear una nueva ciudad
 *     tags: [City]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CityInput'
 *     responses:
 *       201:
 *         description: Ciudad creada correctamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/City'
 */
router.post("/", (0, validate_1.validate)(city_schema_1.citySchema), controller.createCity);
/**
 * @swagger
 * /api/cities/{id}:
 *   put:
 *     summary: Actualizar una ciudad por ID
 *     tags: [City]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de la ciudad a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CityInput'
 *     responses:
 *       200:
 *         description: Ciudad actualizada correctamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/City'
 *       404:
 *         description: Ciudad no encontrada
 */
router.put("/:id", (0, validate_1.validate)(city_schema_1.citySchema), controller.updateCity);
/**
 * @swagger
 * /api/cities/{id}:
 *   delete:
 *     summary: Eliminar una ciudad por ID
 *     tags: [City]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de la ciudad a eliminar
 *     responses:
 *       204:
 *         description: Ciudad eliminada correctamente
 *       404:
 *         description: Ciudad no encontrada
 */
router.delete("/:id", controller.deleteCity);
exports.default = router;
