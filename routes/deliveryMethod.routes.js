const router = require("express").Router()
const controller = require("../controller/deliveryMethod.controller")
const { validate } = require("../middleware/validate")
const { createDeliveryMethodSchema, updateDeliveryMethodSchema } = require("../validation/deliveryMethod.validator")

/**
 * @swagger
 * tags:
 *   name: DeliveryMethods
 *   description: Delivery method boshqarish
 */

/**
 * @swagger
 * /api/delivery-methods:
 *   post:
 *     summary: Yangi delivery method yaratish
 *     tags: [DeliveryMethods]
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
 *         description: Delivery method yaratildi
 *       400:
 *         description: Validation xatolik
 *       500:
 *         description: Server error
 */
router.post("/", validate(createDeliveryMethodSchema), controller.createDeliveryMethod)

/**
 * @swagger
 * /api/delivery-methods:
 *   get:
 *     summary: Barcha delivery methodlarni olish
 *     tags: [DeliveryMethods]
 *     responses:
 *       200:
 *         description: Delivery methodlar ro‘yxati
 *       500:
 *         description: Server error
 */
router.get("/", controller.getAllDeliveryMethods)

/**
 * @swagger
 * /api/delivery-methods/{id}:
 *   get:
 *     summary: Bitta delivery methodni olish
 *     tags: [DeliveryMethods]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: DeliveryMethod ID
 *     responses:
 *       200:
 *         description: Delivery method topildi
 *       404:
 *         description: Topilmadi
 *       500:
 *         description: Server error
 */
router.get("/:id", controller.getOneDeliveryMethod)

/**
 * @swagger
 * /api/delivery-methods/{id}:
 *   patch:
 *     summary: Delivery methodni yangilash
 *     tags: [DeliveryMethods]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: DeliveryMethod ID
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
 *         description: Delivery method yangilandi
 *       404:
 *         description: Topilmadi
 *       500:
 *         description: Server error
 */
router.patch("/:id", validate(updateDeliveryMethodSchema), controller.updateDeliveryMethod)

/**
 * @swagger
 * /api/delivery-methods/{id}:
 *   delete:
 *     summary: Delivery methodni o‘chirish
 *     tags: [DeliveryMethods]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: DeliveryMethod ID
 *     responses:
 *       200:
 *         description: O‘chirildi
 *       404:
 *         description: Topilmadi
 *       500:
 *         description: Server error
 */
router.delete("/:id", controller.deleteDeliveryMethod)

module.exports = router