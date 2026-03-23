const Joi = require("joi");

exports.createHumanCategorySchema = Joi.object({
    name: Joi.string().min(2).max(255).required(),
    startAge: Joi.number().integer().min(0).required(),
    finishAge: Joi.number()
        .integer()
        .required(),
    gender: Joi.string()
        .valid("male", "female")
        .required(),
});

exports.updateHumanCategorySchema = Joi.object({
    name: Joi.string().min(2).max(255).optional(),
    startAge: Joi.number().integer().min(0).optional(),
    finishAge: Joi.number().integer().optional(),
    gender: Joi.string().valid("male", "female").optional(),
}).min(1);