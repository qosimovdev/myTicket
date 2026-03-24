const router = require("express").Router();
const controller = require("../controller/event.controller");
const { validate } = require("../middleware/validate");
const { createEventSchema, updateEventSchema } = require("../validation/event.validator");

/**
 * @swagger
 * tags:
 *   name: Events
 *   description: Event boshqarish
 */

/**
 * @swagger
 * /api/events:
 *   post:
 *     summary: Yangi event yaratish
 *     tags: [Events]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - eventTypeId
 *               - humanCategoryId
 *               - venueId
 *               - langId
 *               - name
 *               - photo
 *               - startDate
 *               - startTime
 *             properties:
 *               eventTypeId:
 *                 type: integer
 *               humanCategoryId:
 *                 type: integer
 *               venueId:
 *                 type: integer
 *               langId:
 *                 type: integer
 *               name:
 *                 type: string
 *               photo:
 *                 type: string
 *               startDate:
 *                 type: string
 *               startTime:
 *                 type: string
 *     responses:
 *       201:
 *         description: Event yaratildi
 *       400:
 *         description: Validation xatolik
 *       500:
 *         description: Server error
 */
router.post("/", validate(createEventSchema), controller.createEvent);

/**
 * @swagger
 * /api/events:
 *   get:
 *     summary: Barcha eventlarni olish
 *     tags: [Events]
 *     responses:
 *       200:
 *         description: Eventlar ro‘yxati
 *       500:
 *         description: Server error
 */
router.get("/", controller.getAllEvents);

/**
 * @swagger
 * /api/events/{id}:
 *   get:
 *     summary: Bitta eventni olish
 *     tags: [Events]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Event ID
 *     responses:
 *       200:
 *         description: Event topildi
 *       404:
 *         description: Topilmadi
 *       500:
 *         description: Server error
 */
router.get("/:id", controller.getOneEvent);

/**
 * @swagger
 * /api/events/{id}:
 *   patch:
 *     summary: Eventni yangilash
 *     tags: [Events]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Event ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               eventTypeId:
 *                 type: integer
 *               humanCategoryId:
 *                 type: integer
 *               venueId:
 *                 type: integer
 *               langId:
 *                 type: integer
 *               name:
 *                 type: string
 *               photo:
 *                 type: string
 *               startDate:
 *                 type: string
 *               startTime:
 *                 type: string
 *     responses:
 *       200:
 *         description: Event yangilandi
 *       404:
 *         description: Topilmadi
 *       500:
 *         description: Server error
 */
router.patch("/:id", validate(updateEventSchema), controller.updateEvent);

/**
 * @swagger
 * /api/events/{id}:
 *   delete:
 *     summary: Eventni o‘chirish
 *     tags: [Events]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Event ID
 *     responses:
 *       200:
 *         description: Event o‘chirildi
 *       404:
 *         description: Topilmadi
 *       500:
 *         description: Server error
 */
router.delete("/:id", controller.deleteEvent);

module.exports = router;