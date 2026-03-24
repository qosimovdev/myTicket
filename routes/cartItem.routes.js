const router = require("express").Router()
const controller = require("../controller/cartItem.controller")

router.post("/", controller.createCartItem)
router.get("/", controller.getAllCartItems)
router.get("/:id", controller.getOneCartItem)
router.patch("/:id", controller.updateCartItem)
router.delete("/:id", controller.deleteCartItem)

module.exports = router