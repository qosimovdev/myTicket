const router = require("express").Router();
const controller = require("../controller/customerAddress.controller");

/**
 * @swagger
 * tags:
 *   name: CustomerAddresses
 *   description: Customer address boshqarish
 */

/**
 * @swagger
 * /api/customer-addresses:
 *   post:
 *     summary: Yangi address yaratish
 *     tags: [CustomerAddresses]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - customerId
 *               - name
 *               - regionId
 *               - districtId
 *               - street
 *               - house
 *               - flat
 *               - location
 *               - postIndex
 *             properties:
 *               customerId:
 *                 type: integer
 *               name:
 *                 type: string
 *               regionId:
 *                 type: integer
 *               districtId:
 *                 type: integer
 *               street:
 *                 type: string
 *               house:
 *                 type: string
 *               flat:
 *                 type: string
 *               location:
 *                 type: string
 *               postIndex:
 *                 type: string
 *               info:
 *                 type: string
 *     responses:
 *       201:
 *         description: Address yaratildi
 *       400:
 *         description: Validation xatolik
 *       500:
 *         description: Server error
 */
router.post("/", controller.createCustomerAddress);

/**
 * @swagger
 * /api/customer-addresses:
 *   get:
 *     summary: Barcha addresslarni olish
 *     tags: [CustomerAddresses]
 *     responses:
 *       200:
 *         description: Addresslar ro‘yxati
 *       500:
 *         description: Server error
 */
router.get("/", controller.getAllCustomerAddress);

/**
 * @swagger
 * /api/customer-addresses/{id}:
 *   get:
 *     summary: Bitta addressni olish
 *     tags: [CustomerAddresses]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Address ID
 *     responses:
 *       200:
 *         description: Address topildi
 *       404:
 *         description: Address topilmadi
 *       500:
 *         description: Server error
 */
router.get("/:id", controller.getOneCustomerAddress);

/**
 * @swagger
 * /api/customer-addresses/{id}:
 *   patch:
 *     summary: Addressni yangilash
 *     tags: [CustomerAddresses]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Address ID
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
 *               regionId:
 *                 type: integer
 *               districtId:
 *                 type: integer
 *               street:
 *                 type: string
 *               house:
 *                 type: string
 *               flat:
 *                 type: string
 *               location:
 *                 type: string
 *               postIndex:
 *                 type: string
 *               info:
 *                 type: string
 *     responses:
 *       200:
 *         description: Address yangilandi
 *       404:
 *         description: Address topilmadi
 *       500:
 *         description: Server error
 */
router.patch("/:id", controller.updateCustomerAddress);

/**
 * @swagger
 * /api/customer-addresses/{id}:
 *   delete:
 *     summary: Addressni o‘chirish
 *     tags: [CustomerAddresses]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Address ID
 *     responses:
 *       200:
 *         description: Address o‘chirildi
 *       404:
 *         description: Address topilmadi
 *       500:
 *         description: Server error
 */
router.delete("/:id", controller.deleteCustomerAddress);

module.exports = router;