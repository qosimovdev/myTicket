const router = require("express").Router()
const controller = require("../controller/customer.controller")

/**
 * @swagger
 * tags:
 *   name: Customers
 *   description: Customer boshqarish
 */

/**
 * @swagger
 * /api/customers/register:
 *   post:
 *     summary: Customer ro‘yxatdan o‘tishi
 *     tags: [Customers]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - firstName
 *               - phone
 *               - password
 *               - email
 *               - birthDate
 *               - gender
 *             properties:
 *               firstName:
 *                 type: string
 *               lastName:
 *                 type: string
 *               phone:
 *                 type: string
 *               password:
 *                 type: string
 *               email:
 *                 type: string
 *               birthDate:
 *                 type: string
 *               gender:
 *                 type: string
 *                 enum: [male, female]
 *     responses:
 *       201:
 *         description: Customer yaratildi
 *       400:
 *         description: Validation xatolik
 *       500:
 *         description: Server error
 */
router.post("/register", controller.registerCustomer)

/**
 * @swagger
 * /api/customers/login:
 *   post:
 *     summary: Customer login qilish
 *     tags: [Customers]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Muvaffaqiyatli login
 *       400:
 *         description: Email yoki password noto‘g‘ri
 *       500:
 *         description: Server error
 */
router.post("/login", controller.loginCustomer)

/**
 * @swagger
 * /api/customers/{id}:
 *   get:
 *     summary: Customer ma’lumotini olish
 *     tags: [Customers]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Customer ID
 *     responses:
 *       200:
 *         description: Customer topildi
 *       404:
 *         description: Customer topilmadi
 *       500:
 *         description: Server error
 */
router.get("/:id", controller.getCustomer)

/**
 * @swagger
 * /api/customers/{id}:
 *   patch:
 *     summary: Customer ma’lumotini yangilash
 *     tags: [Customers]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Customer ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               firstName:
 *                 type: string
 *               lastName:
 *                 type: string
 *               phone:
 *                 type: string
 *               password:
 *                 type: string
 *               email:
 *                 type: string
 *               birthDate:
 *                 type: string
 *               gender:
 *                 type: string
 *                 enum: [male, female]
 *     responses:
 *       200:
 *         description: Customer yangilandi
 *       404:
 *         description: Customer topilmadi
 *       500:
 *         description: Server error
 */
router.patch("/:id", controller.updateCustomer)

module.exports = router