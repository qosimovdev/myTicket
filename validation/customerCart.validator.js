const Joi = require("joi");

exports.createCustomerCartSchema = Joi.object({
    customerId: Joi.number().integer().required(),
    finishedAt: Joi.date().allow(null),
    statusId: Joi.number().integer().required()
});

exports.updateCustomerCartSchema = Joi.object({
    finishedAt: Joi.date().allow(null),
    statusId: Joi.number().integer()
});