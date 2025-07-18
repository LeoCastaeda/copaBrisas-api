import { Router } from "express";
import * as vehicleController from "../controllers/vehicle.controller";
import { validate } from "../middlewares/validate";
import { vehicleSchema } from "../schemas/vehicle.schema";

const router = Router();
/**
 * @swagger
 * tags:
 *   name: Vehicles
 *   description: Gestión de vehículos
 */

/**
 * @swagger
 * /vehicles:
 *   get:
 *     summary: Obtiene todos los vehículos
 *     tags: [Vehicles]
 *     responses:
 *       200:
 *         description: Lista de vehículos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Vehicle'
 */
router.get("/", vehicleController.getVehicles);

/**
 * @swagger
 * /vehicles/{id}:
 *   get:
 *     summary: Obtiene un vehículo por ID
 *     tags: [Vehicles]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del vehículo
 *     responses:
 *       200:
 *         description: Vehículo encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Vehicle'
 *       404:
 *         description: Vehículo no encontrado
 */
router.get("/:id", vehicleController.getVehicle);

/**
 * @swagger
 * /vehicles:
 *   post:
 *     summary: Crea un nuevo vehículo
 *     tags: [Vehicles]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/VehicleInput'
 *     responses:
 *       201:
 *         description: Vehículo creado con éxito
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Vehicle'
 */
router.post("/", validate(vehicleSchema), vehicleController.createVehicle);

/**
 * @swagger
 * /vehicles/{id}:
 *   put:
 *     summary: Actualiza un vehículo por ID
 *     tags: [Vehicles]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del vehículo
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/VehicleInput'
 *     responses:
 *       200:
 *         description: Vehículo actualizado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Vehicle'
 *       404:
 *         description: Vehículo no encontrado
 */
router.put("/:id", validate(vehicleSchema), vehicleController.updateVehicle);

/**
 * @swagger
 * /vehicles/{id}:
 *   delete:
 *     summary: Elimina un vehículo por ID
 *     tags: [Vehicles]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del vehículo
 *     responses:
 *       204:
 *         description: Vehículo eliminado con éxito
 *       404:
 *         description: Vehículo no encontrado
 */
router.delete("/:id", vehicleController.deleteVehicle);

export default router;
