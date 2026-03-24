const router = require("express").Router();
const controller = require("../controller/eventType.controller");
const { validate } = require("../middleware/validate");
const { createEventTypeSchema, updateEventTypeSchema } = require("../validation/eventType.validator");

/**
 * @swagger
 * tags:
 *   name: EventTypes
 *   description: Event type boshqarish
 */

/**
 * @swagger
 * /api/event-types:
 *   post:
 *     summary: Yangi event type yaratish
 *     tags: [EventTypes]
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
 *         description: Event type yaratildi
 *       400:
 *         description: Validation xatolik
 *       500:
 *         description: Server error
 */
router.post("/", validate(createEventTypeSchema), controller.createEvntType);

/**
 * @swagger
 * /api/event-types:
 *   get:
 *     summary: Barcha event typelarni olish
 *     tags: [EventTypes]
 *     responses:
 *       200:
 *         description: Event type lar ro‘yxati
 *       500:
 *         description: Server error
 */
router.get("/", controller.getAllEventTypes);

/**
 * @swagger
 * /api/event-types/{id}:
 *   get:
 *     summary: Bitta event type olish
 *     tags: [EventTypes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: EventType ID
 *     responses:
 *       200:
 *         description: Event type topildi
 *       404:
 *         description: Topilmadi
 *       500:
 *         description: Server error
 */
router.get("/:id", controller.getOneEventType);

/**
 * @swagger
 * /api/event-types/{id}:
 *   patch:
 *     summary: Event type yangilash
 *     tags: [EventTypes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: EventType ID
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
 *         description: Event type yangilandi
 *       404:
 *         description: Topilmadi
 *       500:
 *         description: Server error
 */
router.patch("/:id", validate(updateEventTypeSchema), controller.updateEventType);

/**
 * @swagger
 * /api/event-types/{id}:
 *   delete:
 *     summary: Event type o‘chirish
 *     tags: [EventTypes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: EventType ID
 *     responses:
 *       200:
 *         description: Event type o‘chirildi
 *       404:
 *         description: Topilmadi
 *       500:
 *         description: Server error
 */
router.delete("/:id", controller.deleteEventType);

module.exports = router;