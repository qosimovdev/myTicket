const router = require("express").Router();
const controller = require("../controller/eventType.controller");
const { validate } = require("../middleware/validate")
const { createEventTypeSchema, updateEventTypeSchema } = require("../validation/eventType.validator")

router.post("/", validate(createEventTypeSchema), controller.createEvntType);
router.get("/", controller.getAllEventTypes);
router.get("/:id", controller.getOneEventType);
router.patch("/:id", validate(updateEventTypeSchema), controller.updateEventType);
router.delete("/:id", controller.deleteEventType);

module.exports = router;