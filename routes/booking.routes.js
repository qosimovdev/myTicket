const router = require("express").Router()
const controller = require("../controller/booking.controller")
const { validate } = require("../middleware/validate")
const { createBookingSchema, updateBookingSchema } = require("../validation/booking.validator")

router.post("/", validate(createBookingSchema), controller.createBooking)
router.get("/", controller.getAllBookings)
router.get("/:id", controller.getOneBooking)
router.patch("/:id", validate(updateBookingSchema), controller.updateBooking)
router.delete("/:id", controller.deleteBooking)

module.exports = router