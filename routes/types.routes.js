const router = require("express").Router();
const controller = require("../controller/types.controller");

/**
 * @swagger
 * tags:
 *   name: Types
 *   description: Generic types boshqarish
 */

/**
 * @swagger
 * /api/types:
 *   post:
 *     summary: Yangi type yaratish
 *     tags: [Types]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *             properties:
 *               name:
 *                 type: string
 *     responses:
 *       201:
 *         description: Type yaratildi
 *       400:
 *         description: Validation error
 *       500:
 *         description: Server error
 */
router.post("/", controller.createType);

/**
 * @swagger
 * /api/types:
 *   get:
 *     summary: Barcha types olish
 *     tags: [Types]
 *     responses:
 *       200:
 *         description: Types ro‘yxati
 *       500:
 *         description: Server error
 */
router.get("/", controller.getAllTypes);

/**
 * @swagger
 * /api/types/{id}:
 *   get:
 *     summary: Bitta type olish
 *     tags: [Types]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Type ID
 *     responses:
 *       200:
 *         description: Type topildi
 *       404:
 *         description: Topilmadi
 *       500:
 *         description: Server error
 */
router.get("/:id", controller.getOneType);

/**
 * @swagger
 * /api/types/{id}:
 *   patch:
 *     summary: Type yangilash
 *     tags: [Types]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Type ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *     responses:
 *       200:
 *         description: Type yangilandi
 *       404:
 *         description: Topilmadi
 *       500:
 *         description: Server error
 */
router.patch("/:id", controller.updateType);

/**
 * @swagger
 * /api/types/{id}:
 *   delete:
 *     summary: Type o‘chirish
 *     tags: [Types]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Type ID
 *     responses:
 *       200:
 *         description: Type o‘chirildi
 *       404:
 *         description: Topilmadi
 *       500:
 *         description: Server error
 */
router.delete("/:id", controller.deleteType);

module.exports = router;