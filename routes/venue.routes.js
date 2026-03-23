const router = require("express").Router()
const controller = require("../controller/venue.controller")
const { validate } = require("../middleware/validate")
const { createVenueSchema, updateVenueSchema } = require("../validation/venue.validator")

router.post("/", validate(createVenueSchema), controller.createVenue)
router.get("/", controller.getAllVenues)
router.get("/:id", controller.getOneVenue)
router.patch("/:id", validate(updateVenueSchema), controller.updateVenue)
router.delete("/:id", controller.deleteVenue)

module.exports = router