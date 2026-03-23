const Joi = require("joi");

exports.createEventSchema = Joi.object({
    eventTypeId: Joi.number().integer().required(),
    humanCategoryId: Joi.number().integer().required(),
    venueId: Joi.number().integer().required(),
    langId: Joi.number().integer().required(),
    name: Joi.string().min(2).max(255).required(),
    photo: Joi.string().uri().required(),
    startDate: Joi.string()
        .pattern(/^\d{4}-\d{2}-\d{2}$/)
        .required(),
    startTime: Joi.string()
        .pattern(/^([01]\d|2[0-3]):[0-5]\d$/)
        .required(),
});

exports.updateEventSchema = Joi.object({
    eventTypeId: Joi.number().integer().optional(),
    humanCategoryId: Joi.number().integer().optional(),
    venueId: Joi.number().integer().optional(),
    langId: Joi.number().integer().optional(),
    name: Joi.string().min(2).max(255).optional(),
    photo: Joi.string().uri().optional(),
    startDate: Joi.string()
        .pattern(/^\d{4}-\d{2}-\d{2}$/)
        .optional(),
    startTime: Joi.string()
        .pattern(/^([01]\d|2[0-3]):[0-5]\d$/)
        .optional(),
}).min(1);