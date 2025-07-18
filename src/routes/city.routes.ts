import { Router } from "express";
import * as controller from "../controllers/city.controller";
import { validate } from "../middlewares/validate";
import { citySchema } from "../schemas/city.schema";

const router = Router();

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
router.post("/", validate(citySchema), controller.createCity);

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
router.put("/:id", validate(citySchema), controller.updateCity);

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

export default router;
