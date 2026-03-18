const router = require("express").Router();
const controller = require("../controller/customerAddress.controller");

router.post("/", controller.createCustomerAddress);
router.get("/", controller.getAllCustomerAddress);
router.get("/:id", controller.getOneCustomerAddress);
router.patch("/:id", controller.updateCustomerAddress);
router.delete("/:id", controller.deleteCustomerAddress);

module.exports = router;