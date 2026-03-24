const router = require("express").Router();
const controller = require("../controller/ticketStatus.controller");

/**
 * @swagger
 * tags:
 *   name: TicketStatuses
 *   description: Ticket status boshqarish
 */

/**
 * @swagger
 * /api/ticket-statuses:
 *   post:
 *     summary: Yangi ticket status yaratish
 *     tags: [TicketStatuses]
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
 *         description: Ticket status yaratildi
 *       400:
 *         description: Validation error
 *       500:
 *         description: Server error
 */
router.post("/", controller.createTicketStatus);

/**
 * @swagger
 * /api/ticket-statuses:
 *   get:
 *     summary: Barcha ticket statuslarni olish
 *     tags: [TicketStatuses]
 *     responses:
 *       200:
 *         description: Ticket statuslar ro‘yxati
 *       500:
 *         description: Server error
 */
router.get("/", controller.getAllTicketStatus);

/**
 * @swagger
 * /api/ticket-statuses/{id}:
 *   get:
 *     summary: Bitta ticket status olish
 *     tags: [TicketStatuses]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: TicketStatus ID
 *     responses:
 *       200:
 *         description: Ticket status topildi
 *       404:
 *         description: Topilmadi
 *       500:
 *         description: Server error
 */
router.get("/:id", controller.getOneTicketStatus);

/**
 * @swagger
 * /api/ticket-statuses/{id}:
 *   patch:
 *     summary: Ticket statusni yangilash
 *     tags: [TicketStatuses]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: TicketStatus ID
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
 *         description: Ticket status yangilandi
 *       404:
 *         description: Topilmadi
 *       500:
 *         description: Server error
 */
router.patch("/:id", controller.updateTicketStatus);

/**
 * @swagger
 * /api/ticket-statuses/{id}:
 *   delete:
 *     summary: Ticket statusni o‘chirish
 *     tags: [TicketStatuses]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: TicketStatus ID
 *     responses:
 *       200:
 *         description: Ticket status o‘chirildi
 *       404:
 *         description: Topilmadi
 *       500:
 *         description: Server error
 */
router.delete("/:id", controller.deleteTicketStatus);

module.exports = router;