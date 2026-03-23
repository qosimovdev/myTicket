const router = require("express").Router();
const controller = require("../controller/venueTypes.controller");

router.post("/", controller.createVenueType);
router.get("/", controller.getAllVenueTypes);
router.get("/:id", controller.getOneVenueType);
router.patch("/:id", controller.updateVenueType);
router.delete("/:id", controller.deleteVenueType);

module.exports = router;