const router = require("express").Router()
const controller = require("../controller/customer.controller")

router.post("/register", controller.registerCustomer)
router.post("/login", controller.loginCustomer)
router.get("/:id", controller.getCustomer)
router.patch("/:id", controller.updateCustomer)

module.exports = router