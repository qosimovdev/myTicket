const router = require("express").Router();
const controller = require("../controller/seat.controller");

router.post("/", controller.createSeat);
router.get("/", controller.getAllSeats);
router.get("/:id", controller.getOneSeat);
router.patch("/:id", controller.updateSeat);
router.delete("/:id", controller.deleteSeat);

module.exports = router;