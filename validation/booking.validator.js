const Joi = require("joi");

exports.createBookingSchema = Joi.object({
    cartId: Joi.number().required(),
    paymentMethodId: Joi.number().required(),
    deliveryMethodId: Joi.number().required(),
    finishedAt: Joi.date().allow(null),
    discountCouponId: Joi.number().allow(null),
    statusId: Joi.number().required()
});

exports.updateBookingSchema = Joi.object({
    cartId: Joi.number(),
    paymentMethodId: Joi.number(),
    deliveryMethodId: Joi.number(),
    finishedAt: Joi.date().allow(null),
    discountCouponId: Joi.number().allow(null),
    statusId: Joi.number()
}).min(1);