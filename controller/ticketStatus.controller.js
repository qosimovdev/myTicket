const { TicketStatus } = require("../model");

exports.createTicketStatus = async (req, res) => {
    try {
        const { name } = req.body;
        if (!name) {
            return res.status(400).json({
                message: "Ticket Status kiritilishi shart"
            })
        }
        const ticketStatus = await TicketStatus.create({ name });
        return res.status(201).json({
            message: "Ticket Status yaratildi",
            ticketStatus
        });
    } catch (err) {
        console.error(`Create Ticket Status error: ${err.message}`);
        return res.status(500).json({
            message: "Server error"
        });
    }
};

exports.getAllTicketStatus = async (req, res) => {
    try {
        const ticketStatus = await TicketStatus.findAll({
            order: [["id", "DESC"]]
        });
        return res.status(200).json(ticketStatus);
    } catch (err) {
        console.error(`Get Ticket Status error: ${err.message}`);
        return res.status(500).json({
            message: "Server error"
        });
    }
};

exports.getOneTicketStatus = async (req, res) => {
    try {
        const { id } = req.params;
        const ticketStatus = await TicketStatus.findByPk(Number(id));
        if (!ticketStatus) {
            return res.status(404).json({
                message: "Ticket Status topilmadi"
            });
        }
        return res.json(ticketStatus);
    } catch (err) {
        console.error(`Get Ticket Status error: ${err.message}`);
        return res.status(500).json({
            message: "Server error"
        });
    }
};

exports.updateTicketStatus = async (req, res) => {
    try {
        const { id } = req.params;
        const { name } = req.body;
        const ticketStatus = await TicketStatus.findByPk(Number(id));
        if (!ticketStatus) {
            return res.status(404).json({
                message: "Ticket Status topilmadi"
            });
        }
        await ticketStatus.update({ name });
        return res.json({
            message: "Ticket Status yangilandi",
            ticketStatus
        });
    } catch (err) {
        console.error(`Update Ticket Status error: ${err.message}`);
        return res.status(500).json({
            message: "Server error"
        });
    }
};

exports.deleteTicketStatus = async (req, res) => {
    try {
        const { id } = req.params;
        const status = await TicketStatus.findByPk(Number(id));
        if (!status) {
            return res.status(404).json({
                message: "Ticket Status topilmadi"
            });
        }
        await status.destroy();
        return res.status(200).json({
            message: " Ticket Status o'chirildi"
        });
    } catch (err) {
        console.error(`Delete Ticket status error: ${err.message}`);
        return res.status(500).json({
            message: "Server error"
        });
    }
};