const { VenuePhoto, Venue } = require("../model");

exports.createVenuePhoto = async (req, res) => {
    try {
        const { url, venueId } = req.body;
        const venue = await Venue.findByPk(venueId);
        if (!venue) {
            return res.status(404).json({
                message: "Venue topilmadi"
            });
        }
        const photo = await VenuePhoto.create({
            url,
            venueId
        });
        return res.status(201).json({
            message: "Venue photo yaratildi",
            photo
        });
    } catch (err) {
        console.error(`Create venue photo error: ${err.message}`);
        return res.status(500).json({
            message: "Server error"
        });
    }
};

exports.getAllVenuePhotos = async (req, res) => {
    try {
        const photos = await VenuePhoto.findAll({
            include: [
                {
                    model: Venue,
                    as: "venue"
                }
            ],
            order: [["id", "DESC"]]
        });
        return res.status(200).json(photos);
    } catch (err) {
        console.error(`Get photos error: ${err.message}`);
        return res.status(500).json({
            message: "Server error"
        });
    }
};

exports.getOneVenuePhoto = async (req, res) => {
    try {
        const { id } = req.params;
        const photo = await VenuePhoto.findByPk(Number(id), {
            include: [
                {
                    model: Venue,
                    as: "venue"
                }
            ]
        });
        if (!photo) {
            return res.status(404).json({
                message: "Photo topilmadi"
            });
        }
        return res.status(200).json(photo);
    } catch (err) {
        console.error(`Get photo error: ${err.message}`);
        return res.status(500).json({
            message: "Server error"
        });
    }
};

exports.updateVenuePhoto = async (req, res) => {
    try {
        const { id } = req.params;
        const { url, venueId } = req.body;
        const photo = await VenuePhoto.findByPk(Number(id));
        if (!photo) {
            return res.status(404).json({
                message: "Photo topilmadi"
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
        await photo.update({
            url,
            venueId
        });
        return res.status(200).json({
            message: "Photo yangilandi",
            photo
        });
    } catch (err) {
        console.error(`Update photo error: ${err.message}`);
        return res.status(500).json({
            message: "Server error"
        });
    }
};

exports.deleteVenuePhoto = async (req, res) => {
    try {
        const { id } = req.params;
        const photo = await VenuePhoto.findByPk(Number(id));
        if (!photo) {
            return res.status(404).json({
                message: "Photo topilmadi"
            });
        }
        await photo.destroy();
        return res.json({
            message: "Photo o'chirildi"
        });
    } catch (err) {
        console.error(`Delete photo error: ${err.message}`);
        return res.status(500).json({
            message: "Server error"
        });
    }
};