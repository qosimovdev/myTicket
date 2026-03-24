const { Ticket, Event, Seat, TicketStatus } = require("../model");

exports.createTicket = async (req, res) => {
    try {
        const { eventId, seatId, statusId } = req.body;
        const event = await Event.findByPk(eventId);
        const seat = await Seat.findByPk(seatId);
        const status = await TicketStatus.findByPk(statusId);
        if (!event || !seat || !status) {
            return res.status(404).json({
                message: "Bog'liq ma'lumotlardan biri topilmadi"
            });
        }
        const ticket = await Ticket.create(req.body);
        return res.status(201).json({
            message: "Ticket yaratildi",
            ticket
        });
    } catch (err) {
        console.error(`Create ticket error: ${err.message}`);
        return res.status(500).json({
            message: "Server error"
        });
    }
};

exports.getAllTickets = async (req, res) => {
    try {
        const tickets = await Ticket.findAll({
            include: [
                { model: Event, as: "event" },
                { model: Seat, as: "seat" },
                { model: TicketStatus, as: "status" }
            ],
            order: [["id", "DESC"]]
        });
        return res.json(tickets);
    } catch (err) {
        console.error(`Get tickets error: ${err.message}`);
        return res.status(500).json({
            message: "Server error"
        });
    }
};

exports.getOneTicket = async (req, res) => {
    try {
        const { id } = req.params;
        const ticket = await Ticket.findByPk(Number(id), {
            include: [
                { model: Event, as: "event" },
                { model: Seat, as: "seat" },
                { model: TicketStatus, as: "status" }
            ]
        });
        if (!ticket) {
            return res.status(404).json({
                message: "Ticket topilmadi"
            });
        }
        return res.json(ticket);
    } catch (err) {
        console.error(`Get ticket error: ${err.message}`);
        return res.status(500).json({
            message: "Server error"
        });
    }
};

exports.updateTicket = async (req, res) => {
    try {
        const { id } = req.params;
        const ticket = await Ticket.findByPk(Number(id));
        if (!ticket) {
            return res.status(404).json({
                message: "Ticket topilmadi"
            });
        }
        await ticket.update(req.body);
        return res.json({
            message: "Ticket yangilandi",
            ticket
        });
    } catch (err) {
        console.error(`Update ticket error: ${err.message}`);
        return res.status(500).json({
            message: "Server error"
        });
    }
};

exports.deleteTicket = async (req, res) => {
    try {
        const { id } = req.params;
        const ticket = await Ticket.findByPk(Number(id));
        if (!ticket) {
            return res.status(404).json({
                message: "Ticket topilmadi"
            });
        }
        await ticket.destroy();
        return res.json({
            message: "Ticket o'chirildi"
        });
    } catch (err) {
        console.error(`Delete ticket error: ${err.message}`);
        return res.status(500).json({
            message: "Server error"
        });
    }
};