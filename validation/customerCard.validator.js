const Joi = require("joi");

exports.createCustomerCardSchema = Joi.object({
    customerId: Joi.number().integer().required(),
    name: Joi.string().min(2).max(100).required(),
    phone: Joi.string().pattern(/^\+998\d{9}$/).required(),
    number: Joi.string()
        .pattern(/^\d{16}$/)
        .required(),
    year: Joi.string().pattern(/^\d{2,4}$/).required(),
    month: Joi.string()
        .valid(
            "01", "02", "03", "04", "05", "06",
            "07", "08", "09", "10", "11", "12"
        )
        .required(),
    isActive: Joi.boolean().required(),
    isMain: Joi.boolean().required()
});