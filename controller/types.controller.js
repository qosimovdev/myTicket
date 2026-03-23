const { Types } = require("../model");

exports.createType = async (req, res) => {
    try {
        const { name } = req.body;
        if (!name) {
            return res.status(400).json({
                message: "type kiritilishi shart"
            })
        }
        const type = await Types.create({ name });
        return res.status(201).json({
            message: "Type yaratildi",
            type
        });
    } catch (err) {
        console.error(`Create type error: ${err.message}`);
        return res.status(500).json({
            message: "Server error"
        });
    }
};

exports.getAllTypes = async (req, res) => {
    try {
        const types = await Types.findAll({
            order: [["id", "DESC"]]
        });
        return res.status(200).json(types);
    } catch (err) {
        console.error(`Get types error: ${err.message}`);
        return res.status(500).json({
            message: "Server error"
        });
    }
};

exports.getOneType = async (req, res) => {
    try {
        const { id } = req.params;
        const type = await Types.findByPk(Number(id));
        if (!type) {
            return res.status(404).json({
                message: "Type topilmadi"
            });
        }
        return res.json(type);
    } catch (err) {
        console.error(`Get type error: ${err.message}`);
        return res.status(500).json({
            message: "Server error"
        });
    }
};

exports.updateType = async (req, res) => {
    try {
        const { id } = req.params;
        const { name } = req.body;

        const type = await Types.findByPk(Number(id));

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

exports.deleteType = async (req, res) => {
    try {
        const { id } = req.params;
        const type = await Types.findByPk(Number(id));
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