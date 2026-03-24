const router = require("express").Router()
const controller = require("../controller/customerCard.controller")
const { validate } = require("../middleware/validate")
const { createCustomerCardSchema } = require("../validation/customerCard.validator")

/**
 * @swagger
 * tags:
 *   name: CustomerCards
 *   description: Customer card boshqarish
 */

/**
 * @swagger
 * /api/customer-cards:
 *   post:
 *     summary: Yangi karta qo‘shish
 *     tags: [CustomerCards]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - customerId
 *               - name
 *               - phone
 *               - number
 *               - year
 *               - month
 *             properties:
 *               customerId:
 *                 type: integer
 *               name:
 *                 type: string
 *               phone:
 *                 type: string
 *               number:
 *                 type: string
 *               year:
 *                 type: string
 *               month:
 *                 type: string
 *               isActive:
 *                 type: boolean
 *               isMain:
 *                 type: boolean
 *     responses:
 *       201:
 *         description: Karta qo‘shildi
 *       400:
 *         description: Validation xatolik
 *       500:
 *         description: Server error
 */
router.post("/", validate(createCustomerCardSchema), controller.createCustomerCard)

/**
 * @swagger
 * /api/customer-cards:
 *   get:
 *     summary: Barcha kartalarni olish
 *     tags: [CustomerCards]
 *     responses:
 *       200:
 *         description: Kartalar ro‘yxati
 *       500:
 *         description: Server error
 */
router.get("/", controller.getAllCustomerCards)

/**
 * @swagger
 * /api/customer-cards/{id}:
 *   get:
 *     summary: Bitta kartani olish
 *     tags: [CustomerCards]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Card ID
 *     responses:
 *       200:
 *         description: Karta topildi
 *       404:
 *         description: Karta topilmadi
 *       500:
 *         description: Server error
 */
router.get("/:id", controller.getOneCustomerCard)

/**
 * @swagger
 * /api/customer-cards/{id}:
 *   patch:
 *     summary: Kartani yangilash
 *     tags: [CustomerCards]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Card ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               customerId:
 *                 type: integer
 *               name:
 *                 type: string
 *               phone:
 *                 type: string
 *               number:
 *                 type: string
 *               year:
 *                 type: string
 *               month:
 *                 type: string
 *               isActive:
 *                 type: boolean
 *               isMain:
 *                 type: boolean
 *     responses:
 *       200:
 *         description: Karta yangilandi
 *       404:
 *         description: Karta topilmadi
 *       500:
 *         description: Server error
 */
router.patch("/:id", controller.updateCustomerCard)

/**
 * @swagger
 * /api/customer-cards/{id}:
 *   delete:
 *     summary: Kartani o‘chirish
 *     tags: [CustomerCards]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Card ID
 *     responses:
 *       200:
 *         description: Karta o‘chirildi
 *       404:
 *         description: Karta topilmadi
 *       500:
 *         description: Server error
 */
router.delete("/:id", controller.deleteCustomerCard)

module.exports = router