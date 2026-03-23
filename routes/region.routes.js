const router = require("express").Router();
const controller = require("../controller/region.controller");

router.post("/", controller.createRegion);
router.get("/", controller.getAllRegions);
router.get("/:id", controller.getOneRegion);
router.patch("/:id", controller.updateRegion);
router.delete("/:id", controller.deleteRegion);

module.exports = router;