const router = require("express").Router();
const controller = require("../controller/seat.controller");

/**
 * @swagger
 * tags:
 *   name: Seats
 *   description: Seat boshqarish
 */

/**
 * @swagger
 * /api/seats:
 *   post:
 *     summary: Yangi seat yaratish
 *     tags: [Seats]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - sector
 *               - rowNumber
 *               - number
 *               - venueId
 *               - seatTypeId
 *               - locationInSchema
 *             properties:
 *               sector:
 *                 type: integer
 *               rowNumber:
 *                 type: integer
 *               number:
 *                 type: integer
 *               venueId:
 *                 type: integer
 *               seatTypeId:
 *                 type: integer
 *               locationInSchema:
 *                 type: string
 *     responses:
 *       201:
 *         description: Seat yaratildi
 *       400:
 *         description: Validation error
 *       500:
 *         description: Server error
 */
router.post("/", controller.createSeat);

/**
 * @swagger
 * /api/seats:
 *   get:
 *     summary: Barcha seatlarni olish
 *     tags: [Seats]
 *     responses:
 *       200:
 *         description: Seatlar ro‘yxati
 *       500:
 *         description: Server error
 */
router.get("/", controller.getAllSeats);

/**
 * @swagger
 * /api/seats/{id}:
 *   get:
 *     summary: Bitta seat olish
 *     tags: [Seats]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Seat ID
 *     responses:
 *       200:
 *         description: Seat topildi
 *       404:
 *         description: Topilmadi
 *       500:
 *         description: Server error
 */
router.get("/:id", controller.getOneSeat);

/**
 * @swagger
 * /api/seats/{id}:
 *   patch:
 *     summary: Seat yangilash
 *     tags: [Seats]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Seat ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               sector:
 *                 type: integer
 *               rowNumber:
 *                 type: integer
 *               number:
 *                 type: integer
 *               venueId:
 *                 type: integer
 *               seatTypeId:
 *                 type: integer
 *               locationInSchema:
 *                 type: string
 *     responses:
 *       200:
 *         description: Seat yangilandi
 *       404:
 *         description: Topilmadi
 *       500:
 *         description: Server error
 */
router.patch("/:id", controller.updateSeat);

/**
 * @swagger
 * /api/seats/{id}:
 *   delete:
 *     summary: Seat o‘chirish
 *     tags: [Seats]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Seat ID
 *     responses:
 *       200:
 *         description: Seat o‘chirildi
 *       404:
 *         description: Topilmadi
 *       500:
 *         description: Server error
 */
router.delete("/:id", controller.deleteSeat);

module.exports = router;