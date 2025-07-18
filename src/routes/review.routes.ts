import { Router } from "express";
import * as controller from "../controllers/review.controller";
import { validate } from "../middlewares/validate";
import { reviewSchema, reviewUpdateSchema } from "../schemas/review.schema";

const router = Router();

/**
 * @swagger
 * tags:
 *   - name: Reviews
 *     description: Gestión de reseñas
 */

/**
 * @swagger
 * /api/reviews:
 *   get:
 *     summary: Obtener todas las reseñas
 *     tags: [Reviews]
 *     responses:
 *       200:
 *         description: Lista de reseñas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Review'
 */
router.get("/", controller.getAllReviews);

/**
 * @swagger
 * /api/reviews/{id}:
 *   get:
 *     summary: Obtener una reseña por ID
 *     tags: [Reviews]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID de la reseña
 *         schema:
 *           type: integer
 *           format: int64
 *     responses:
 *       200:
 *         description: Reseña encontrada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Review'
 *       404:
 *         description: Reseña no encontrada
 */
router.get("/:id", controller.getReviewById);

/**
 * @swagger
 * /api/reviews:
 *   post:
 *     summary: Crear una nueva reseña
 *     tags: [Reviews]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ReviewInput'
 *     responses:
 *       201:
 *         description: Reseña creada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Review'
 *       400:
 *         description: Datos inválidos
 */
router.post("/", validate(reviewSchema), controller.createReview);

/**
 * @swagger
 * /api/reviews/{id}:
 *   put:
 *     summary: Actualizar una reseña
 *     tags: [Reviews]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID de la reseña
 *         schema:
 *           type: integer
 *           format: int64
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ReviewInput'
 *     responses:
 *       200:
 *         description: Reseña actualizada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Review'
 *       400:
 *         description: Datos inválidos
 *       404:
 *         description: Reseña no encontrada
 */
router.put("/:id", validate(reviewUpdateSchema), controller.updateReview);

/**
 * @swagger
 * /api/reviews/{id}:
 *   delete:
 *     summary: Eliminar una reseña
 *     tags: [Reviews]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID de la reseña
 *         schema:
 *           type: integer
 *           format: int64
 *     responses:
 *       204:
 *         description: Reseña eliminada exitosamente
 *       404:
 *         description: Reseña no encontrada
 */
router.delete("/:id", controller.deleteReview);



export default router;
