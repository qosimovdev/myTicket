const { VenueTypes, Venue, Types } = require("../model");

exports.createVenueType = async (req, res) => {
    try {
        const { venueId, typeId } = req.body;
        const venue = await Venue.findByPk(venueId);
        if (!venue) {
            return res.status(404).json({
                message: "Venue topilmadi"
            });
        }
        const type = await Types.findByPk(typeId);
        if (!type) {
            return res.status(404).json({
                message: "Type topilmadi"
            });
        }
        const venueType = await VenueTypes.create({
            venueId,
            typeId
        });
        return res.status(201).json({
            message: "VenueType yaratildi",
            venueType
        });
    } catch (err) {
        console.error(`Create venueType error: ${err.message}`);
        return res.status(500).json({
            message: "Server error"
        });
    }
};

exports.getAllVenueTypes = async (req, res) => {
    try {
        const data = await VenueTypes.findAll({
            include: [
                { model: Venue, as: "venue" },
                { model: Types, as: "type" }
            ],
            order: [["id", "DESC"]]
        });
        return res.json(data);
    } catch (err) {
        console.error(`Get venueTypes error: ${err.message}`);
        return res.status(500).json({
            message: "Server error"
        });
    }
};

exports.getOneVenueType = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await VenueTypes.findByPk(Number(id), {
            include: [
                { model: Venue, as: "venue" },
                { model: Types, as: "type" }
            ]
        });
        if (!data) {
            return res.status(404).json({
                message: "VenueType topilmadi"
            });
        }
        return res.json(data);
    } catch (err) {
        console.error(`Get venueType error: ${err.message}`);
        return res.status(500).json({
            message: "Server error"
        });
    }
};

exports.updateVenueType = async (req, res) => {
    try {
        const { id } = req.params;
        const { venueId, typeId } = req.body;
        const venueType = await VenueTypes.findByPk(Number(id));
        if (!venueType) {
            return res.status(404).json({
                message: "VenueType topilmadi"
            });
        }
        if (venueId) {
            const venue = await Venue.findByPk(venueId);
            if (!venue) {
                return res.status(404).json({
                    message: "Venue topilmadi"
                });
            }
        }
        if (typeId) {
            const type = await Types.findByPk(typeId);
            if (!type) {
                return res.status(404).json({
                    message: "Type topilmadi"
                });
            }
        }
        await venueType.update({
            venueId,
            typeId
        });
        return res.json({
            message: "VenueType yangilandi",
            venueType
        });
    } catch (err) {
        console.error(`Update venueType error: ${err.message}`);
        return res.status(500).json({
            message: "Server error"
        });
    }
};

exports.deleteVenueType = async (req, res) => {
    try {
        const { id } = req.params;
        const venueType = await VenueTypes.findByPk(Number(id));
        if (!venueType) {
            return res.status(404).json({
                message: "VenueType topilmadi"
            });
        }
        await venueType.destroy();
        return res.json({
            message: "VenueType o'chirildi"
        });
    } catch (err) {
        console.error(`Delete venueType error: ${err.message}`);
        return res.status(500).json({
            message: "Server error"
        });
    }
};