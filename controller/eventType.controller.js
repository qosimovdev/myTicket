const { EventType } = require("../model");

exports.createEvntType = async (req, res) => {
    try {
        const { name } = req.body;
        const eventType = await EventType.create({ name });
        return res.status(201).json({
            message: "eventType yaratildi",
            eventType
        });
    } catch (err) {
        console.error(`Create eventType error: ${err.message}`);
        return res.status(500).json({
            message: "Server error"
        });
    }
};

exports.getAllEventTypes = async (req, res) => {
    try {
        const eventTypes = await EventType.findAll({
            order: [["id", "DESC"]]
        });
        return res.status(200).json(eventTypes);
    } catch (err) {
        console.error(`Get eventTypes error: ${err.message}`);
        return res.status(500).json({
            message: "Server error"
        });
    }
};

exports.getOneEventType = async (req, res) => {
    try {
        const { id } = req.params;
        const eventType = await EventType.findByPk(Number(id));
        if (!eventType) {
            return res.status(404).json({
                message: "eventType topilmadi"
            });
        }
        return res.status(200).json(eventType);
    } catch (err) {
        console.error(`Get eventType error: ${err.message}`);
        return res.status(500).json({
            message: "Server error"
        });
    }
};

exports.updateEventType = async (req, res) => {
    try {
        const { id } = req.params;
        const { name } = req.body;
        const eventType = await EventType.findByPk(Number(id));
        if (!eventType) {
            return res.status(404).json({
                message: "eventType topilmadi"
            });
        }
        await eventType.update({ name });
        return res.status(200).json({
            message: "eventType yangilandi",
            eventType
        });
    } catch (err) {
        console.error(`Update eventType error: ${err.message}`);
        return res.status(500).json({
            message: "Server error"
        });
    }
};

exports.deleteEventType = async (req, res) => {
    try {
        const { id } = req.params;
        const eventType = await EventType.findByPk(Number(id));
        if (!eventType) {
            return res.status(404).json({
                message: "eventType topilmadi"
            });
        }
        await eventType.destroy();
        return res.status(200).json({
            message: "eventType o'chirildi"
        });
    } catch (err) {
        console.error(`Delete eventType error: ${err.message}`);
        return res.status(500).json({
            message: "Server error"
        });
    }
};