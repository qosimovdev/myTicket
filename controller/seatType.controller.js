const { SeatType } = require("../model");

exports.createSeatType = async (req, res) => {
    try {
        const { name } = req.body;
        if (!name) {
            return res.status(400).json({
                message: "type kiritilishi shart"
            })
        }
        const seatType = await SeatType.create({ name });
        return res.status(201).json({
            message: "Seat Type yaratildi",
            seatType
        });
    } catch (err) {
        console.error(`Create Seat type error: ${err.message}`);
        return res.status(500).json({
            message: "Server error"
        });
    }
};

exports.getAllSeatType = async (req, res) => {
    try {
        const seatType = await SeatType.findAll({
            order: [["id", "DESC"]]
        });
        return res.status(200).json(seatType);
    } catch (err) {
        console.error(`Get SeatType error: ${err.message}`);
        return res.status(500).json({
            message: "Server error"
        });
    }
};

exports.getOneSeatType = async (req, res) => {
    try {
        const { id } = req.params;
        const seatType = await SeatType.findByPk(Number(id));
        if (!seatType) {
            return res.status(404).json({
                message: "Type topilmadi"
            });
        }
        return res.json(seatType);
    } catch (err) {
        console.error(`Get type error: ${err.message}`);
        return res.status(500).json({
            message: "Server error"
        });
    }
};

exports.updateSeatType = async (req, res) => {
    try {
        const { id } = req.params;
        const { name } = req.body;

        const type = await SeatType.findByPk(Number(id));

        if (!type) {
            return res.status(404).json({
                message: "Type topilmadi"
            });
        }
        await type.update({ name });
        return res.json({
            message: "Type yangilandi",
            type
        });
    } catch (err) {
        console.error(`Update type error: ${err.message}`);
        return res.status(500).json({
            message: "Server error"
        });
    }
};

exports.deleteSeatType = async (req, res) => {
    try {
        const { id } = req.params;
        const type = await SeatType.findByPk(Number(id));
        if (!type) {
            return res.status(404).json({
                message: "Type topilmadi"
            });
        }
        await type.destroy();
        return res.status(200).json({
            message: "Type o'chirildi"
        });
    } catch (err) {
        console.error(`Delete type error: ${err.message}`);
        return res.status(500).json({
            message: "Server error"
        });
    }
};