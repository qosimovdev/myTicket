const Joi = require("joi");

exports.createVenuePhotoSchema = Joi.object({
    url: Joi.string()
        .uri()
        .required()
        .messages({
            "string.base": "url string bo'lishi kerak",
            "string.uri": "url to'g'ri link bo'lishi kerak",
            "any.required": "url majburiy"
        }),

    venueId: Joi.number()
        .integer()
        .required()
        .messages({
            "number.base": "venueId number bo'lishi kerak",
            "any.required": "venueId majburiy"
        })
});

exports.updateVenuePhotoSchema = Joi.object({
    url: Joi.string()
        .uri()
        .optional(),
    venueId: Joi.number()
        .integer()
        .optional()
});