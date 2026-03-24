const router = require("express").Router()
const controller = require("../controller/ticket.controller")
const { validate } = require("../middleware/validate")
const { createTicketSchema, updateTicketSchema } = require("../validation/ticket.validator")

/**
 * @swagger
 * tags:
 *   name: Tickets
 *   description: Ticket boshqarish
 */

/**
 * @swagger
 * /api/tickets:
 *   post:
 *     summary: Yangi ticket yaratish
 *     tags: [Tickets]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - price
 *               - serviceFee
 *               - eventId
 *               - seatId
 *               - statusId
 *             properties:
 *               price:
 *                 type: number
 *               serviceFee:
 *                 type: number
 *               eventId:
 *                 type: integer
 *               seatId:
 *                 type: integer
 *               statusId:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Ticket yaratildi
 *       400:
 *         description: Validation error
 *       500:
 *         description: Server error
 */
router.post("/", validate(createTicketSchema), controller.createTicket)

/**
 * @swagger
 * /api/tickets:
 *   get:
 *     summary: Barcha ticketlarni olish
 *     tags: [Tickets]
 *     responses:
 *       200:
 *         description: Ticketlar ro‘yxati
 *       500:
 *         description: Server error
 */
router.get("/", controller.getAllTickets)

/**
 * @swagger
 * /api/tickets/{id}:
 *   get:
 *     summary: Bitta ticket olish
 *     tags: [Tickets]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Ticket ID
 *     responses:
 *       200:
 *         description: Ticket topildi
 *       404:
 *         description: Topilmadi
 *       500:
 *         description: Server error
 */
router.get("/:id", controller.getOneTicket)

/**
 * @swagger
 * /api/tickets/{id}:
 *   patch:
 *     summary: Ticket yangilash
 *     tags: [Tickets]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Ticket ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               price:
 *                 type: number
 *               serviceFee:
 *                 type: number
 *               statusId:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Ticket yangilandi
 *       404:
 *         description: Topilmadi
 *       500:
 *         description: Server error
 */
router.patch("/:id", validate(updateTicketSchema), controller.updateTicket)

/**
 * @swagger
 * /api/tickets/{id}:
 *   delete:
 *     summary: Ticket o‘chirish
 *     tags: [Tickets]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Ticket ID
 *     responses:
 *       200:
 *         description: Ticket o‘chirildi
 *       404:
 *         description: Topilmadi
 *       500:
 *         description: Server error
 */
router.delete("/:id", controller.deleteTicket)

module.exports = router