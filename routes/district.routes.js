const router = require("express").Router();
const controller = require("../controller/district.controller");

/**
 * @swagger
 * tags:
 *   name: Districts
 *   description: District boshqarish
 */

/**
 * @swagger
 * /api/districts:
 *   post:
 *     summary: Yangi district yaratish
 *     tags: [Districts]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - regionId
 *             properties:
 *               name:
 *                 type: string
 *               regionId:
 *                 type: integer
 *     responses:
 *       201:
 *         description: District yaratildi
 *       400:
 *         description: Validation xatolik
 *       500:
 *         description: Server error
 */
router.post("/", controller.createDistrict);

/**
 * @swagger
 * /api/districts:
 *   get:
 *     summary: Barcha districtlarni olish
 *     tags: [Districts]
 *     responses:
 *       200:
 *         description: Districtlar ro‘yxati
 *       500:
 *         description: Server error
 */
router.get("/", controller.getAllDistricts);

/**
 * @swagger
 * /api/districts/{id}:
 *   get:
 *     summary: Bitta districtni olish
 *     tags: [Districts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: District ID
 *     responses:
 *       200:
 *         description: District topildi
 *       404:
 *         description: Topilmadi
 *       500:
 *         description: Server error
 */
router.get("/:id", controller.getOneDistrict);

/**
 * @swagger
 * /api/districts/{id}:
 *   patch:
 *     summary: Districtni yangilash
 *     tags: [Districts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: District ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               regionId:
 *                 type: integer
 *     responses:
 *       200:
 *         description: District yangilandi
 *       404:
 *         description: Topilmadi
 *       500:
 *         description: Server error
 */
router.patch("/:id", controller.updateDistrict);

/**
 * @swagger
 * /api/districts/{id}:
 *   delete:
 *     summary: Districtni o‘chirish
 *     tags: [Districts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: District ID
 *     responses:
 *       200:
 *         description: District o‘chirildi
 *       404:
 *         description: Topilmadi
 *       500:
 *         description: Server error
 */
router.delete("/:id", controller.deleteDistrict);

module.exports = router;