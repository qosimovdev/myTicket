const router = require("express").Router();
const controller = require("../controller/district.controller");

router.post("/", controller.createDistrict);
router.get("/", controller.getAllDistricts);
router.get("/:id", controller.getOneDistrict);
router.patch("/:id", controller.updateDistrict);
router.delete("/:id", controller.deleteDistrict);

module.exports = router;