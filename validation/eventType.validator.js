const Joi = require("joi");

exports.createEventTypeSchema = Joi.object({
    name: Joi.string().trim()
        .min(2)
        .max(255)
        .required(),
});

exports.updateEventTypeSchema = Joi.object({
    name: Joi.string().trim()
        .min(2)
        .max(255)
        .optional(),
}).min(1); 