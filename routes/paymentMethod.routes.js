const router = require("express").Router()
const controller = require("../controller/paymentMethod.controller")
const { validate } = require("../middleware/validate")
const { createPaymentMethodSchema, updatePaymentMethodSchema } = require("../validation/paymentMethod.validator")

router.post("/", validate(createPaymentMethodSchema), controller.createPaymentMethod)
router.get("/", controller.getAllPaymentMethods)
router.get("/:id", controller.getOnePaymentMethod)
router.patch("/:id", validate(updatePaymentMethodSchema), controller.updatePaymentMethod)
router.delete("/:id", controller.deletePaymentMethod)

module.exports = router