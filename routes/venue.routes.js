const router = require("express").Router()
const controller = require("../controller/venue.controller")
const { validate } = require("../middleware/validate")
const { createVenueSchema, updateVenueSchema } = require("../validation/venue.validator")

/**
 * @swagger
 * tags:
 *   name: Venues
 *   description: Venue boshqarish
 */

/**
 * @swagger
 * /api/venues:
 *   post:
 *     summary: Yangi venue yaratish
 *     tags: [Venues]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - address
 *               - location
 *               - phone
 *               - schema
 *               - regionId
 *               - districtId
 *             properties:
 *               name:
 *                 type: string
 *               address:
 *                 type: string
 *               location:
 *                 type: string
 *               site:
 *                 type: string
 *               phone:
 *                 type: string
 *               schema:
 *                 type: string
 *               regionId:
 *                 type: integer
 *               districtId:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Venue yaratildi
 *       400:
 *         description: Validation error
 *       500:
 *         description: Server error
 */
router.post("/", validate(createVenueSchema), controller.createVenue)

/**
 * @swagger
 * /api/venues:
 *   get:
 *     summary: Barcha venues olish
 *     tags: [Venues]
 *     responses:
 *       200:
 *         description: Venue ro‘yxati
 *       500:
 *         description: Server error
 */
router.get("/", controller.getAllVenues)

/**
 * @swagger
 * /api/venues/{id}:
 *   get:
 *     summary: Bitta venue olish
 *     tags: [Venues]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Venue ID
 *     responses:
 *       200:
 *         description: Venue topildi
 *       404:
 *         description: Topilmadi
 *       500:
 *         description: Server error
 */
router.get("/:id", controller.getOneVenue)

/**
 * @swagger
 * /api/venues/{id}:
 *   patch:
 *     summary: Venue yangilash
 *     tags: [Venues]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Venue ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               address:
 *                 type: string
 *               location:
 *                 type: string
 *               site:
 *                 type: string
 *               phone:
 *                 type: string
 *               schema:
 *                 type: string
 *               regionId:
 *                 type: integer
 *               districtId:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Venue yangilandi
 *       404:
 *         description: Topilmadi
 *       500:
 *         description: Server error
 */
router.patch("/:id", validate(updateVenueSchema), controller.updateVenue)

/**
 * @swagger
 * /api/venues/{id}:
 *   delete:
 *     summary: Venue o‘chirish
 *     tags: [Venues]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Venue ID
 *     responses:
 *       200:
 *         description: Venue o‘chirildi
 *       404:
 *         description: Topilmadi
 *       500:
 *         description: Server error
 */
router.delete("/:id", controller.deleteVenue)

module.exports = router