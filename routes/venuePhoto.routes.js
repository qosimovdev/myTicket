const router = require("express").Router();
const controller = require("../controller/venuePhoto.controller");
const { validate } = require("../middleware/validate")
const { createVenuePhotoSchema, updateVenuePhotoSchema } = require("../validation/venuePhoto.validator")

router.post("/", validate(createVenuePhotoSchema), controller.createVenuePhoto);
router.get("/", controller.getAllVenuePhotos);
router.get("/:id", controller.getOneVenuePhoto);
router.patch("/:id", validate(updateVenuePhotoSchema), controller.updateVenuePhoto);
router.delete("/:id", controller.deleteVenuePhoto);

module.exports = router;