const router = require("express").Router();
const controller = require("../controller/humanCategory.controller");
const { validate } = require("../middleware/validate")
const { createHumanCategorySchema, updateHumanCategorySchema } = require("../validation/humanCategory.validator")

router.post("/", validate(createHumanCategorySchema), controller.createHumanCategory);
router.get("/", controller.getAllHumanCategories);
router.get("/:id", controller.getOneHumanCategory);
router.patch("/:id", validate(updateHumanCategorySchema), controller.updateHumanCategory);
router.delete("/:id", controller.deleteHumanCategory);

module.exports = router;