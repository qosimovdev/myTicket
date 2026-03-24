const router = require("express").Router();
const controller = require("../controller/venuePhoto.controller");
const { validate } = require("../middleware/validate")
const { createVenuePhotoSchema, updateVenuePhotoSchema } = require("../validation/venuePhoto.validator")

/**
 * @swagger
 * tags:
 *   name: VenuePhotos
 *   description: Venue photo boshqarish
 */

/**
 * @swagger
 * /api/venue-photos:
 *   post:
 *     summary: Yangi venue photo qo‘shish
 *     tags: [VenuePhotos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - url
 *               - venueId
 *             properties:
 *               url:
 *                 type: string
 *               venueId:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Venue photo yaratildi
 *       400:
 *         description: Validation error
 *       500:
 *         description: Server error
 */
router.post("/", validate(createVenuePhotoSchema), controller.createVenuePhoto);

/**
 * @swagger
 * /api/venue-photos:
 *   get:
 *     summary: Barcha venue photos olish
 *     tags: [VenuePhotos]
 *     responses:
 *       200:
 *         description: Venue photos ro‘yxati
 *       500:
 *         description: Server error
 */
router.get("/", controller.getAllVenuePhotos);

/**
 * @swagger
 * /api/venue-photos/{id}:
 *   get:
 *     summary: Bitta venue photo olish
 *     tags: [VenuePhotos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: VenuePhoto ID
 *     responses:
 *       200:
 *         description: Venue photo topildi
 *       404:
 *         description: Topilmadi
 *       500:
 *         description: Server error
 */
router.get("/:id", controller.getOneVenuePhoto);

/**
 * @swagger
 * /api/venue-photos/{id}:
 *   patch:
 *     summary: Venue photo yangilash
 *     tags: [VenuePhotos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: VenuePhoto ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               url:
 *                 type: string
 *               venueId:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Venue photo yangilandi
 *       404:
 *         description: Topilmadi
 *       500:
 *         description: Server error
 */
router.patch("/:id", validate(updateVenuePhotoSchema), controller.updateVenuePhoto);

/**
 * @swagger
 * /api/venue-photos/{id}:
 *   delete:
 *     summary: Venue photo o‘chirish
 *     tags: [VenuePhotos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: VenuePhoto ID
 *     responses:
 *       200:
 *         description: Venue photo o‘chirildi
 *       404:
 *         description: Topilmadi
 *       500:
 *         description: Server error
 */
router.delete("/:id", controller.deleteVenuePhoto);

module.exports = router;