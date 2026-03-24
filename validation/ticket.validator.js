const Joi = require("joi");

exports.createTicketSchema = Joi.object({
    price: Joi.number().required(),
    serviceFee: Joi.number().required(),
    eventId: Joi.number().required(),
    seatId: Joi.number().required(),
    statusId: Joi.number().required()
});

exports.updateTicketSchema = Joi.object({
    price: Joi.number().optional(),
    serviceFee: Joi.number().optional(),
    eventId: Joi.number().optional(),
    seatId: Joi.number().optional(),
    statusId: Joi.number().optional()
}).min(1);