const router = require("express").Router()
const controller = require("../controller/paymentMethod.controller")
const { validate } = require("../middleware/validate")
const { createPaymentMethodSchema, updatePaymentMethodSchema } = require("../validation/paymentMethod.validator")

/**
 * @swagger
 * tags:
 *   name: PaymentMethods
 *   description: Payment method boshqarish
 */

/**
 * @swagger
 * /api/payment-methods:
 *   post:
 *     summary: Yangi payment method yaratish
 *     tags: [PaymentMethods]
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
 *         description: Payment method yaratildi
 *       400:
 *         description: Validation xatolik
 *       500:
 *         description: Server error
 */
router.post("/", validate(createPaymentMethodSchema), controller.createPaymentMethod);

/**
 * @swagger
 * /api/payment-methods:
 *   get:
 *     summary: Barcha payment methodlarni olish
 *     tags: [PaymentMethods]
 *     responses:
 *       200:
 *         description: Payment methodlar ro‘yxati
 *       500:
 *         description: Server error
 */
router.get("/", controller.getAllPaymentMethods);

/**
 * @swagger
 * /api/payment-methods/{id}:
 *   get:
 *     summary: Bitta payment method olish
 *     tags: [PaymentMethods]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: PaymentMethod ID
 *     responses:
 *       200:
 *         description: Payment method topildi
 *       404:
 *         description: Topilmadi
 *       500:
 *         description: Server error
 */
router.get("/:id", controller.getOnePaymentMethod);

/**
 * @swagger
 * /api/payment-methods/{id}:
 *   patch:
 *     summary: Payment methodni yangilash
 *     tags: [PaymentMethods]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: PaymentMethod ID
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
 *         description: Payment method yangilandi
 *       404:
 *         description: Topilmadi
 *       500:
 *         description: Server error
 */
router.patch("/:id", validate(updatePaymentMethodSchema), controller.updatePaymentMethod);

/**
 * @swagger
 * /api/payment-methods/{id}:
 *   delete:
 *     summary: Payment methodni o‘chirish
 *     tags: [PaymentMethods]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: PaymentMethod ID
 *     responses:
 *       200:
 *         description: Payment method o‘chirildi
 *       404:
 *         description: Topilmadi
 *       500:
 *         description: Server error
 */
router.delete("/:id", controller.deletePaymentMethod);

module.exports = router;