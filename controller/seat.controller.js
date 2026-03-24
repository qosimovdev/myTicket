const { Seat, Venue, SeatType } = require("../model");

exports.createSeat = async (req, res) => {
    try {
        const { venueId, seatTypeId } = req.body;
        const venue = await Venue.findByPk(venueId);
        const seatType = await SeatType.findByPk(seatTypeId);
        if (!venue || !seatType) {
            return res.status(404).json({
                message: "Venue topilmadi yoki Seat Type"
            });
        }
        const seat = await Seat.create(req.body);
        return res.status(201).json({
            message: "Seat yaratildi",
            seat
        });
    } catch (err) {
        console.error(`Create seat error: ${err.message}`);
        return res.status(500).json({
            message: "Server error"
        });
    }
};

exports.getAllSeats = async (req, res) => {
    try {
        const seats = await Seat.findAll({
            include: [
                { model: Venue, as: "venue" },
                { model: SeatType, as: "seatType" }
            ],
            order: [["id", "DESC"]]
        });
        return res.json(seats);
    } catch (err) {
        console.error(`Get seats error: ${err.message}`);
        return res.status(500).json({
            message: "Server error"
        });
    }
};

exports.getOneSeat = async (req, res) => {
    try {
        const { id } = req.params;
        const seat = await Seat.findByPk(Number(id), {
            include: [
                { model: Venue, as: "venue" },
                { model: SeatType, as: "seatType" }
            ]
        });
        if (!seat) {
            return res.status(404).json({
                message: "Seat topilmadi"
            });
        }
        return res.json(seat);
    } catch (err) {
        console.error(`Get seat error: ${err.message}`);
        return res.status(500).json({
            message: "Server error"
        });
    }
};

exports.updateSeat = async (req, res) => {
    try {
        const { id } = req.params;
        const seat = await Seat.findByPk(Number(id));
        if (!seat) {
            return res.status(404).json({
                message: "Seat topilmadi"
            });
        }
        await seat.update(req.body);
        return res.json({
            message: "Seat yangilandi",
            seat
        });
    } catch (err) {
        console.error(`Update seat error: ${err.message}`);
        return res.status(500).json({
            message: "Server error"
        });
    }
};

exports.deleteSeat = async (req, res) => {
    try {
        const { id } = req.params;
        const seat = await Seat.findByPk(Number(id));
        if (!seat) {
            return res.status(404).json({
                message: "Seat topilmadi"
            });
        }
        await seat.destroy();
        return res.json({
            message: "Seat o'chirildi"
        });
    } catch (err) {
        console.error(`Delete seat error: ${err.message}`);
        return res.status(500).json({
            message: "Server error"
        });
    }
};