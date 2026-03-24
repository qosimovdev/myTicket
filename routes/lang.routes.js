const router = require("express").Router();
const controller = require("../controller/lang.controller");

/**
 * @swagger
 * tags:
 *   name: Langs
 *   description: Language boshqarish
 */

/**
 * @swagger
 * /api/langs:
 *   post:
 *     summary: Yangi language yaratish
 *     tags: [Langs]
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
 *         description: Language yaratildi
 *       400:
 *         description: Validation xatolik
 *       500:
 *         description: Server error
 */
router.post("/", controller.createLang);

/**
 * @swagger
 * /api/langs:
 *   get:
 *     summary: Barcha languages olish
 *     tags: [Langs]
 *     responses:
 *       200:
 *         description: Languages ro‘yxati
 *       500:
 *         description: Server error
 */
router.get("/", controller.getAllLangs);

/**
 * @swagger
 * /api/langs/{id}:
 *   get:
 *     summary: Bitta language olish
 *     tags: [Langs]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Lang ID
 *     responses:
 *       200:
 *         description: Language topildi
 *       404:
 *         description: Topilmadi
 *       500:
 *         description: Server error
 */
router.get("/:id", controller.getOneLang);

/**
 * @swagger
 * /api/langs/{id}:
 *   patch:
 *     summary: Language yangilash
 *     tags: [Langs]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Lang ID
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
 *         description: Language yangilandi
 *       404:
 *         description: Topilmadi
 *       500:
 *         description: Server error
 */
router.patch("/:id", controller.updateLang);

/**
 * @swagger
 * /api/langs/{id}:
 *   delete:
 *     summary: Language o‘chirish
 *     tags: [Langs]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Lang ID
 *     responses:
 *       200:
 *         description: Language o‘chirildi
 *       404:
 *         description: Topilmadi
 *       500:
 *         description: Server error
 */
router.delete("/:id", controller.deleteLang);

module.exports = router;