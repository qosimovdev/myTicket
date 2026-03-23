const { Venue, Region, District, VenuePhoto } = require("../model");

exports.createVenue = async (req, res) => {
    try {
        const venue = await Venue.create(req.body);
        return res.status(201).json({
            message: "Venue yaratildi",
            venue
        });
    } catch (err) {
        console.error(`Create venue error: ${err.message}`);
        return res.status(500).json({
            message: "Server error"
        });
    }
};

exports.getAllVenues = async (req, res) => {
    try {
        const venues = await Venue.findAll({
            include: [{
                model: Region,
                as: "region"
            },
            {
                model: District,
                as: "district"
            },
            {
                model: VenuePhoto,
                as: "photos"
            }],
            order: [["id", "DESC"]]
        });
        return res.status(200).json(venues);
    } catch (err) {
        console.error(err.message);
        return res.status(500).json({
            message: "Server error"
        });
    }
};

exports.getOneVenue = async (req, res) => {
    try {
        const { id } = req.params;
        const venue = await Venue.findByPk(Number(id), {
            include: [{
                model: Region,
                as: "region"
            },
            {
                model: District,
                as: "district"
            },
            {
                model: VenuePhoto,
                as: "photos"
            }
            ],
        });
        if (!venue) {
            return res.status(404).json({
                message: "Venue topilmadi"
            });
        }
        return res.status(200).json(venue);
    } catch (err) {
        console.error(err.message);
        return res.status(500).json({
            message: "Server error"
        });
    }
};

exports.updateVenue = async (req, res) => {
    try {
        const { id } = req.params;
        const venue = await Venue.findByPk(Number(id));
        if (!venue) {
            return res.status(404).json({
                message: "Venue topilmadi"
            });
        }
        await venue.update(req.body);
        return res.status(200).json({
            message: "Venue yangilandi",
            venue
        });
    } catch (err) {
        console.error(err.message);
        return res.status(500).json({
            message: "Server error"
        });
    }
};

exports.deleteVenue = async (req, res) => {
    try {
        const { id } = req.params;
        const venue = await Venue.findByPk(Number(id));
        if (!venue) {
            return res.status(404).json({
                message: "Venue topilmadi"
            });
        }
        await venue.destroy();
        return res.status(200).json({
            message: "Venue o'chirildi"
        });
    } catch (err) {
        console.error(err.message);
        return res.status(500).json({
            message: "Server error"
        });
    }
};