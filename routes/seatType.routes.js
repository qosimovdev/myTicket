const router = require("express").Router();
const controller = require("../controller/seatType.controller");

router.post("/", controller.createSeatType);
router.get("/", controller.getAllSeatType);
router.get("/:id", controller.getOneSeatType);
router.patch("/:id", controller.updateSeatType);
router.delete("/:id", controller.deleteSeatType);

module.exports = router;