const router = require("express").Router();
const controller = require("../controller/event.controller");
const { validate } = require("../middleware/validate")
const { createEventSchema, updateEventSchema } = require("../validation/event.validator")

router.post("/", validate(createEventSchema), controller.createEvent);
router.get("/", controller.getAllEvents);
router.get("/:id", controller.getOneEvent);
router.patch("/:id", validate(updateEventSchema), controller.updateEvent);
router.delete("/:id", controller.deleteEvent);

module.exports = router;