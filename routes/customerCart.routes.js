const router = require("express").Router()
const controller = require("../controller/customerCart.controller")
const { validate } = require("../middleware/validate")
const { createCustomerCartSchema, updateCustomerCartSchema } = require("../validation/customerCart.validator")

/**
 * @swagger
 * tags:
 *   name: CustomerCarts
 *   description: Customer cart boshqarish
 */

/**
 * @swagger
 * /api/customer-carts:
 *   post:
 *     summary: Yangi cart yaratish
 *     tags: [CustomerCarts]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - customerId
 *               - statusId
 *             properties:
 *               customerId:
 *                 type: integer
 *               finishedAt:
 *                 type: string
 *               statusId:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Cart yaratildi
 *       400:
 *         description: Validation xatolik
 *       500:
 *         description: Server error
 */
router.post("/", validate(createCustomerCartSchema), controller.createCustomerCart)

/**
 * @swagger
 * /api/customer-carts:
 *   get:
 *     summary: Barcha cartlarni olish
 *     tags: [CustomerCarts]
 *     responses:
 *       200:
 *         description: Cartlar ro‘yxati
 *       500:
 *         description: Server error
 */
router.get("/", controller.getAllCustomerCarts)

/**
 * @swagger
 * /api/customer-carts/{id}:
 *   get:
 *     summary: Bitta cartni olish
 *     tags: [CustomerCarts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Cart ID
 *     responses:
 *       200:
 *         description: Cart topildi
 *       404:
 *         description: Cart topilmadi
 *       500:
 *         description: Server error
 */
router.get("/:id", controller.getOneCustomerCart)

/**
 * @swagger
 * /api/customer-carts/{id}:
 *   patch:
 *     summary: Cartni yangilash
 *     tags: [CustomerCarts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Cart ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               customerId:
 *                 type: integer
 *               finishedAt:
 *                 type: string
 *               statusId:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Cart yangilandi
 *       404:
 *         description: Cart topilmadi
 *       500:
 *         description: Server error
 */
router.patch("/:id", validate(updateCustomerCartSchema), controller.updateCustomerCart)

/**
 * @swagger
 * /api/customer-carts/{id}:
 *   delete:
 *     summary: Cartni o‘chirish
 *     tags: [CustomerCarts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Cart ID
 *     responses:
 *       200:
 *         description: Cart o‘chirildi
 *       404:
 *         description: Cart topilmadi
 *       500:
 *         description: Server error
 */
router.delete("/:id", controller.deleteCustomerCart)

module.exports = router