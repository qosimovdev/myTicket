const router = require("express").Router();
const controller = require("../controller/types.controller");

router.post("/", controller.createType);
router.get("/", controller.getAllTypes);
router.get("/:id", controller.getOneType);
router.patch("/:id", controller.updateType);
router.delete("/:id", controller.deleteType);

module.exports = router;