const router = require("express").Router()
const controller = require("../controller/cartItem.controller")

/**
 * @swagger
 * tags:
 *   name: CartItems
 *   description: CartItem boshqarish
 */

/**
 * @swagger
 * /api/cart-items:
 *   post:
 *     summary: Yangi cart item yaratish
 *     tags: [CartItems]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - ticketId
 *               - cartId
 *             properties:
 *               ticketId:
 *                 type: integer
 *               cartId:
 *                 type: integer
 *     responses:
 *       201:
 *         description: CartItem yaratildi
 *       400:
 *         description: Validation xatolik
 *       500:
 *         description: Server error
 */
router.post("/", controller.createCartItem)

/**
 * @swagger
 * /api/cart-items:
 *   get:
 *     summary: Barcha cart itemlarni olish
 *     tags: [CartItems]
 *     responses:
 *       200:
 *         description: CartItemlar ro‘yxati
 *       500:
 *         description: Server error
 */
router.get("/", controller.getAllCartItems)

/**
 * @swagger
 * /api/cart-items/{id}:
 *   get:
 *     summary: Bitta cart itemni olish
 *     tags: [CartItems]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: CartItem ID
 *     responses:
 *       200:
 *         description: CartItem topildi
 *       404:
 *         description: CartItem topilmadi
 *       500:
 *         description: Server error
 */
router.get("/:id", controller.getOneCartItem)

/**
 * @swagger
 * /api/cart-items/{id}:
 *   patch:
 *     summary: Cart itemni yangilash
 *     tags: [CartItems]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: CartItem ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               ticketId:
 *                 type: integer
 *               cartId:
 *                 type: integer
 *     responses:
 *       200:
 *         description: CartItem yangilandi
 *       404:
 *         description: CartItem topilmadi
 *       500:
 *         description: Server error
 */
router.patch("/:id", controller.updateCartItem)

/**
 * @swagger
 * /api/cart-items/{id}:
 *   delete:
 *     summary: Cart itemni o‘chirish
 *     tags: [CartItems]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: CartItem ID
 *     responses:
 *       200:
 *         description: CartItem o‘chirildi
 *       404:
 *         description: CartItem topilmadi
 *       500:
 *         description: Server error
 */
router.delete("/:id", controller.deleteCartItem)

module.exports = router