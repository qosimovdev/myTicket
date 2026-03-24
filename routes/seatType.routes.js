const router = require("express").Router();
const controller = require("../controller/seatType.controller");

/**
 * @swagger
 * tags:
 *   name: SeatTypes
 *   description: Seat type boshqarish
 */

/**
 * @swagger
 * /api/seat-types:
 *   post:
 *     summary: Yangi seat type yaratish
 *     tags: [SeatTypes]
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
 *         description: Seat type yaratildi
 *       400:
 *         description: Validation error
 *       500:
 *         description: Server error
 */
router.post("/", controller.createSeatType);

/**
 * @swagger
 * /api/seat-types:
 *   get:
 *     summary: Barcha seat type larni olish
 *     tags: [SeatTypes]
 *     responses:
 *       200:
 *         description: Seat type ro‘yxati
 *       500:
 *         description: Server error
 */
router.get("/", controller.getAllSeatType);

/**
 * @swagger
 * /api/seat-types/{id}:
 *   get:
 *     summary: Bitta seat type olish
 *     tags: [SeatTypes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: SeatType ID
 *     responses:
 *       200:
 *         description: Seat type topildi
 *       404:
 *         description: Topilmadi
 *       500:
 *         description: Server error
 */
router.get("/:id", controller.getOneSeatType);

/**
 * @swagger
 * /api/seat-types/{id}:
 *   patch:
 *     summary: Seat type yangilash
 *     tags: [SeatTypes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: SeatType ID
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
 *         description: Seat type yangilandi
 *       404:
 *         description: Topilmadi
 *       500:
 *         description: Server error
 */
router.patch("/:id", controller.updateSeatType);

/**
 * @swagger
 * /api/seat-types/{id}:
 *   delete:
 *     summary: Seat type o‘chirish
 *     tags: [SeatTypes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: SeatType ID
 *     responses:
 *       200:
 *         description: Seat type o‘chirildi
 *       404:
 *         description: Topilmadi
 *       500:
 *         description: Server error
 */
router.delete("/:id", controller.deleteSeatType);

module.exports = router;