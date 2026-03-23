const router = require("express").Router()
const controller = require("../controller/customerCard.controller")
const { validate } = require("../middleware/validate")
const { createCustomerCardSchema } = require("../validation/customerCard.validator")

router.post("/", validate(createCustomerCardSchema), controller.createCustomerCard)
router.get("/", controller.getAllCustomerCards)
router.get("/:id", controller.getOneCustomerCard)
router.patch("/:id", controller.updateCustomerCard)
router.delete("/:id", controller.deleteCustomerCard)

module.exports = router