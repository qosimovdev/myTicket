const router = require("express").Router()
const controller = require("../controller/ticket.controller")
const { validate } = require("../middleware/validate")
const { createTicketSchema, updateTicketSchema } = require("../validation/ticket.validator")

router.post("/", validate(createTicketSchema), controller.createTicket)
router.get("/", controller.getAllTickets)
router.get("/:id", controller.getOneTicket)
router.patch("/:id", validate(updateTicketSchema), controller.updateTicket)
router.delete("/:id", controller.deleteTicket)

module.exports = router