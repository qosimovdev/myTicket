const router = require("express").Router();
const controller = require("../controller/ticketStatus.controller");

router.post("/", controller.createTicketStatus);
router.get("/", controller.getAllTicketStatus);
router.get("/:id", controller.getOneTicketStatus);
router.patch("/:id", controller.updateTicketStatus);
router.delete("/:id", controller.deleteTicketStatus);

module.exports = router;