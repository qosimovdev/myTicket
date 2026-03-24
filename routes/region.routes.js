const router = require("express").Router();
const controller = require("../controller/region.controller");

/**
 * @swagger
 * tags:
 *   name: Regions
 *   description: Region boshqarish
 */

/**
 * @swagger
 * /api/regions:
 *   post:
 *     summary: Yangi region yaratish
 *     tags: [Regions]
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
 *         description: Region yaratildi
 *       400:
 *         description: Validation error
 *       500:
 *         description: Server error
 */
router.post("/", controller.createRegion);

/**
 * @swagger
 * /api/regions:
 *   get:
 *     summary: Barcha regionlarni olish
 *     tags: [Regions]
 *     responses:
 *       200:
 *         description: Regionlar ro‘yxati
 *       500:
 *         description: Server error
 */
router.get("/", controller.getAllRegions);

/**
 * @swagger
 * /api/regions/{id}:
 *   get:
 *     summary: Bitta region olish
 *     tags: [Regions]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Region ID
 *     responses:
 *       200:
 *         description: Region topildi
 *       404:
 *         description: Topilmadi
 *       500:
 *         description: Server error
 */
router.get("/:id", controller.getOneRegion);

/**
 * @swagger
 * /api/regions/{id}:
 *   patch:
 *     summary: Regionni yangilash
 *     tags: [Regions]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Region ID
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
 *         description: Region yangilandi
 *       404:
 *         description: Topilmadi
 *       500:
 *         description: Server error
 */
router.patch("/:id", controller.updateRegion);

/**
 * @swagger
 * /api/regions/{id}:
 *   delete:
 *     summary: Regionni o‘chirish
 *     tags: [Regions]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Region ID
 *     responses:
 *       200:
 *         description: Region o‘chirildi
 *       404:
 *         description: Topilmadi
 *       500:
 *         description: Server error
 */
router.delete("/:id", controller.deleteRegion);

module.exports = router;