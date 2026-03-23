const Joi = require("joi");

exports.createPaymentMethodSchema = Joi.object({
    name: Joi.string().min(2).max(50).required()
});

exports.updatePaymentMethodSchema = Joi.object({
    name: Joi.string().min(2).max(50)
});