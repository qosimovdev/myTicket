const { Event, EventType, HumanCategory, Venue, Lang } = require("../model");

exports.createEvent = async (req, res) => {
    try {
        const { eventTypeId, humanCategoryId, venueId, langId } = req.body;
        const eventType = await EventType.findByPk(eventTypeId);
        const category = await HumanCategory.findByPk(humanCategoryId);
        const venue = await Venue.findByPk(venueId);
        const lang = await Lang.findByPk(langId);

        if (!eventType || !category || !venue || !lang) {
            return res.status(404).json({
                message: "Bog'liq ma'lumotlardan biri topilmadi"
            });
        }
        const event = await Event.create(req.body);
        return res.status(201).json({
            message: "Event yaratildi",
            event
        });
    } catch (err) {
        console.error(`Create event error: ${err.message}`);
        return res.status(500).json({
            message: "Server error"
        });
    }
};

exports.getAllEvents = async (req, res) => {
    try {
        const events = await Event.findAll({
            include: [
                { model: EventType, as: "eventType" },
                { model: HumanCategory, as: "humanCategory" },
                { model: Venue, as: "venue" },
                { model: Lang, as: "lang" }
            ],
            order: [["id", "DESC"]]
        });
        return res.status(200).json(events);
    } catch (err) {
        console.error(`Get events error: ${err.message}`);
        return res.status(500).json({
            message: "Server error"
        });
    }
};

exports.getOneEvent = async (req, res) => {
    try {
        const { id } = req.params;
        const event = await Event.findByPk(Number(id), {
            include: [
                { model: EventType, as: "eventType" },
                { model: HumanCategory, as: "humanCategory" },
                { model: Venue, as: "venue" },
                { model: Lang, as: "lang" }
            ]
        });
        if (!event) {
            return res.status(404).json({
                message: "Event topilmadi"
            });
        }
        return res.status(200).json(event);
    } catch (err) {
        console.error(`Get event error: ${err.message}`);
        return res.status(500).json({
            message: "Server error"
        });
    }
};

exports.updateEvent = async (req, res) => {
    try {
        const { id } = req.params;
        const event = await Event.findByPk(Number(id));
        if (!event) {
            return res.status(404).json({
                message: "Event topilmadi"
            });
        }
        await event.update(req.body);
        return res.status(200).json({
            message: "Event yangilandi",
            event
        });
    } catch (err) {
        console.error(`Update event error: ${err.message}`);
        return res.status(500).json({
            message: "Server error"
        });
    }
};

exports.deleteEvent = async (req, res) => {
    try {
        const { id } = req.params;
        const event = await Event.findByPk(Number(id));
        if (!event) {
            return res.status(404).json({
                message: "Event topilmadi"
            });
        }
        await event.destroy();
        return res.status(200).json({
            message: "Event o'chirildi"
        });
    } catch (err) {
        console.error(`Delete event error: ${err.message}`);
        return res.status(500).json({
            message: "Server error"
        });
    }
};