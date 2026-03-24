const router = require("express").Router();
const controller = require("../controller/booking.controller");
const { validate } = require("../middleware/validate");
const { createBookingSchema, updateBookingSchema } = require("../validation/booking.validator");

/**
 * @swagger
 * tags:
 *   name: Bookings
 *   description: Booking boshqarish
 */

/**
 * @swagger
 * /api/booking:
 *   post:
 *     summary: Yangi booking yaratish
 *     tags: [Bookings]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - cartId
 *               - paymentMethodId
 *               - deliveryMethodId
 *               - discountCouponId
 *               - statusId
 *             properties:
 *               cartId:
 *                 type: integer
 *               paymentMethodId:
 *                 type: integer
 *               deliveryMethodId:
 *                 type: integer
 *               finishedAt:
 *                 type: string
 *               discountCouponId:
 *                 type: integer
 *               statusId:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Booking yaratildi
 *       400:
 *         description: Validation xatolik
 *       500:
 *         description: Server error
 */
router.post("/", validate(createBookingSchema), controller.createBooking);

/**
 * @swagger
 * /api/booking:
 *   get:
 *     summary: Barcha bookinglarni olish
 *     tags: [Bookings]
 *     responses:
 *       200:
 *         description: Bookinglar ro‘yxati
 *       500:
 *         description: Server error
 */
router.get("/", controller.getAllBookings);

/**
 * @swagger
 * /api/booking/{id}:
 *   get:
 *     summary: Bitta bookingni olish
 *     tags: [Bookings]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Booking ID
 *     responses:
 *       200:
 *         description: Booking topildi
 *       404:
 *         description: Booking topilmadi
 *       500:
 *         description: Server error
 */
router.get("/:id", controller.getOneBooking);

/**
 * @swagger
 * /api/booking/{id}:
 *   patch:
 *     summary: Bookingni yangilash
 *     tags: [Bookings]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Booking ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               cartId:
 *                 type: integer
 *               paymentMethodId:
 *                 type: integer
 *               deliveryMethodId:
 *                 type: integer
 *               finishedAt:
 *                 type: string
 *               discountCouponId:
 *                 type: integer
 *               statusId:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Booking yangilandi
 *       404:
 *         description: Booking topilmadi
 *       500:
 *         description: Server error
 */
router.patch("/:id", validate(updateBookingSchema), controller.updateBooking);

/**
 * @swagger
 * /api/booking/{id}:
 *   delete:
 *     summary: Bookingni o‘chirish
 *     tags: [Bookings]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Booking ID
 *     responses:
 *       200:
 *         description: Booking o‘chirildi
 *       404:
 *         description: Booking topilmadi
 *       500:
 *         description: Server error
 */
router.delete("/:id", controller.deleteBooking);

module.exports = router;