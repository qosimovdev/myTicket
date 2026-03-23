const router = require("express").Router();
const controller = require("../controller/lang.controller");

router.post("/", controller.createLang);
router.get("/", controller.getAllLangs);
router.get("/:id", controller.getOneLang);
router.patch("/:id", controller.updateLang);
router.delete("/:id", controller.deleteLang);

module.exports = router;