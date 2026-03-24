const router = require("express").Router();
const controller = require("../controller/humanCategory.controller");
const { validate } = require("../middleware/validate");
const { createHumanCategorySchema, updateHumanCategorySchema } = require("../validation/humanCategory.validator");

/**
 * @swagger
 * tags:
 *   name: HumanCategories
 *   description: Human category boshqarish
 */

/**
 * @swagger
 * /api/human-categories:
 *   post:
 *     summary: Yangi human category yaratish
 *     tags: [HumanCategories]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - startAge
 *               - finishAge
 *               - gender
 *             properties:
 *               name:
 *                 type: string
 *               startAge:
 *                 type: integer
 *               finishAge:
 *                 type: integer
 *               gender:
 *                 type: string
 *                 enum: [male, female]
 *     responses:
 *       201:
 *         description: Human category yaratildi
 *       400:
 *         description: Validation xatolik
 *       500:
 *         description: Server error
 */
router.post("/", validate(createHumanCategorySchema), controller.createHumanCategory);

/**
 * @swagger
 * /api/human-categories:
 *   get:
 *     summary: Barcha human categorylarni olish
 *     tags: [HumanCategories]
 *     responses:
 *       200:
 *         description: Human categorylar ro‘yxati
 *       500:
 *         description: Server error
 */
router.get("/", controller.getAllHumanCategories);

/**
 * @swagger
 * /api/human-categories/{id}:
 *   get:
 *     summary: Bitta human categoryni olish
 *     tags: [HumanCategories]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: HumanCategory ID
 *     responses:
 *       200:
 *         description: Human category topildi
 *       404:
 *         description: Topilmadi
 *       500:
 *         description: Server error
 */
router.get("/:id", controller.getOneHumanCategory);

/**
 * @swagger
 * /api/human-categories/{id}:
 *   patch:
 *     summary: Human categoryni yangilash
 *     tags: [HumanCategories]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: HumanCategory ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               startAge:
 *                 type: integer
 *               finishAge:
 *                 type: integer
 *               gender:
 *                 type: string
 *                 enum: [male, female]
 *     responses:
 *       200:
 *         description: Human category yangilandi
 *       404:
 *         description: Topilmadi
 *       500:
 *         description: Server error
 */
router.patch("/:id", validate(updateHumanCategorySchema), controller.updateHumanCategory);

/**
 * @swagger
 * /api/human-categories/{id}:
 *   delete:
 *     summary: Human category o‘chirish
 *     tags: [HumanCategories]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: HumanCategory ID
 *     responses:
 *       200:
 *         description: Human category o‘chirildi
 *       404:
 *         description: Topilmadi
 *       500:
 *         description: Server error
 */
router.delete("/:id", controller.deleteHumanCategory);

module.exports = router;