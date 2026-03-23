const router = require("express").Router()
const controller = require("../controller/customerCart.controller")
const { validate } = require("../middleware/validate")
const { createCustomerCartSchema, updateCustomerCartSchema } = require("../validation/customerCart.validator")

router.post("/", validate(createCustomerCartSchema), controller.createCustomerCart)
router.get("/", controller.getAllCustomerCarts)
router.get("/:id", controller.getOneCustomerCart)
router.patch("/:id", validate(updateCustomerCartSchema), controller.updateCustomerCart)
router.delete("/:id", controller.deleteCustomerCart)

module.exports = router
