const Joi = require("joi");

exports.createVenueSchema = Joi.object({
    name: Joi.string()
        .trim()
        .min(2)
        .max(255)
        .required(),
    address: Joi.string()
        .min(2)
        .max(500)
        .required(),
    location: Joi.string()
        .min(2)
        .max(255)
        .required(),
    site: Joi.string()
        .uri()
        .optional(),
    phone: Joi.string()
        .pattern(/^\+?[0-9]{7,15}$/)
        .required()
        .messages({
            "string.pattern.base": "Phone number noto'g'ri formatda"
        }),
    schema: Joi.string()
        .required(),
    regionId: Joi.number()
        .integer()
        .required(),
    districtId: Joi.number()
        .integer()
        .required(),
});

exports.updateVenueSchema = Joi.object({
    name: Joi.string().trim().min(2).max(255).optional(),
    address: Joi.string().min(2).max(500).optional(),
    location: Joi.string().min(2).max(255).optional(),
    site: Joi.string().uri().optional(),
    phone: Joi.string()
        .pattern(/^\+?[0-9]{7,15}$/)
        .optional(),
    schema: Joi.string().optional(),
    regionId: Joi.number().integer().optional(),
    districtId: Joi.number().integer().optional(),
}).min(1);