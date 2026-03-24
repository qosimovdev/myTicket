const router = require("express").Router();
const controller = require("../controller/venueTypes.controller");

/**
 * @swagger
 * tags:
 *   name: VenueTypes
 *   description: Venue va Types bog‘lash boshqaruvi
 */

/**
 * @swagger
 * /api/venue-types:
 *   post:
 *     summary: Venue va Type bog‘lash
 *     tags: [VenueTypes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - venueId
 *               - typeId
 *             properties:
 *               venueId:
 *                 type: integer
 *               typeId:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Bog‘lanish yaratildi
 *       400:
 *         description: Validation error
 *       500:
 *         description: Server error
 */
router.post("/", controller.createVenueType);

/**
 * @swagger
 * /api/venue-types:
 *   get:
 *     summary: Barcha venue-type bog‘lanishlar
 *     tags: [VenueTypes]
 *     responses:
 *       200:
 *         description: Ro‘yxat
 *       500:
 *         description: Server error
 */
router.get("/", controller.getAllVenueTypes);

/**
 * @swagger
 * /api/venue-types/{id}:
 *   get:
 *     summary: Bitta venue-type bog‘lanish
 *     tags: [VenueTypes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID
 *     responses:
 *       200:
 *         description: Topildi
 *       404:
 *         description: Topilmadi
 *       500:
 *         description: Server error
 */
router.get("/:id", controller.getOneVenueType);

/**
 * @swagger
 * /api/venue-types/{id}:
 *   patch:
 *     summary: Venue-Type yangilash
 *     tags: [VenueTypes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               venueId:
 *                 type: integer
 *               typeId:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Yangilandi
 *       404:
 *         description: Topilmadi
 *       500:
 *         description: Server error
 */
router.patch("/:id", controller.updateVenueType);

/**
 * @swagger
 * /api/venue-types/{id}:
 *   delete:
 *     summary: Venue-Type o‘chirish
 *     tags: [VenueTypes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: O‘chirildi
 *       404:
 *         description: Topilmadi
 *       500:
 *         description: Server error
 */
router.delete("/:id", controller.deleteVenueType);

module.exports = router;