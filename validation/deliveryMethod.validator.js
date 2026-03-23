const Joi = require("joi");

exports.createDeliveryMethodSchema = Joi.object({
    name: Joi.string().min(2).required(),
});

exports.updateDeliveryMethodSchema = Joi.object({
    name: Joi.string(),
});