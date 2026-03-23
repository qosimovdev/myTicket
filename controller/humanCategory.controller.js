const { HumanCategory } = require("../model");

exports.createHumanCategory = async (req, res) => {
    try {
        const { name, startAge, finishAge, gender } = req.body;
        if (startAge > finishAge) {
            return res.status(400).json({
                message: "startAge finishAge dan katta bo'lishi mumkin emas"
            });
        }
        const category = await HumanCategory.create({
            name,
            startAge,
            finishAge,
            gender
        });
        return res.status(201).json({
            message: "Human category yaratildi",
            category
        });
    } catch (err) {
        console.error(`Create humanCategory error: ${err.message}`);
        return res.status(500).json({
            message: "Server error"
        });
    }
};

exports.getAllHumanCategories = async (req, res) => {
    try {
        const categories = await HumanCategory.findAll({
            order: [["id", "DESC"]]
        });
        return res.status(200).json(categories);
    } catch (err) {
        console.error(`Get categories error: ${err.message}`);
        return res.status(500).json({
            message: "Server error"
        });
    }
};

exports.getOneHumanCategory = async (req, res) => {
    try {
        const { id } = req.params;
        const category = await HumanCategory.findByPk(Number(id));
        if (!category) {
            return res.status(404).json({
                message: "Category topilmadi"
            });
        }
        return res.status(200).json(category);
    } catch (err) {
        console.error(`Get category error: ${err.message}`);
        return res.status(500).json({
            message: "Server error"
        });
    }
};

exports.updateHumanCategory = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, startAge, finishAge, gender } = req.body;
        const category = await HumanCategory.findByPk(Number(id));
        if (!category) {
            return res.status(404).json({
                message: "Category topilmadi"
            });
        }
        if (startAge && finishAge && startAge > finishAge) {
            return res.status(400).json({
                message: "startAge finishAge dan katta bo'lishi mumkin emas"
            });
        }
        await category.update({
            name,
            startAge,
            finishAge,
            gender
        });
        return res.status(200).json({
            message: "Category yangilandi",
            category
        });
    } catch (err) {
        console.error(`Update category error: ${err.message}`);
        return res.status(500).json({
            message: "Server error"
        });
    }
};

exports.deleteHumanCategory = async (req, res) => {
    try {
        const { id } = req.params;
        const category = await HumanCategory.findByPk(Number(id));
        if (!category) {
            return res.status(404).json({
                message: "Category topilmadi"
            });
        }
        await category.destroy();
        return res.status(200).json({
            message: "Category o'chirildi"
        });
    } catch (err) {
        console.error(`Delete category error: ${err.message}`);
        return res.status(500).json({
            message: "Server error"
        });
    }
};