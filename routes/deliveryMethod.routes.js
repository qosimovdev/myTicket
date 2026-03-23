const router = require("express").Router()
const controller = require("../controller/deliveryMethod.controller")
const { validate } = require("../middleware/validate")
const { createDeliveryMethodSchema, updateDeliveryMethodSchema } = require("../validation/deliveryMethod.validator")

router.post("/", validate(createDeliveryMethodSchema), controller.createDeliveryMethod)
router.get("/", controller.getAllDeliveryMethods)
router.get("/:id", controller.getOneDeliveryMethod)
router.patch("/:id", validate(updateDeliveryMethodSchema), controller.updateDeliveryMethod)
router.delete("/:id", controller.deleteDeliveryMethod)

module.exports = router