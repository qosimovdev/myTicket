const { Lang } = require("../model");

exports.createLang = async (req, res) => {
    try {
        const { name } = req.body;
        const lang = await Lang.create({ name });
        return res.status(201).json({
            message: "Lang yaratildi",
            lang
        });
    } catch (err) {
        console.error(`Create lang error: ${err.message}`);
        return res.status(500).json({
            message: "Server error"
        });
    }
};

exports.getAllLangs = async (req, res) => {
    try {
        const langs = await Lang.findAll({
            order: [["id", "DESC"]]
        });
        return res.status(200).json(langs);
    } catch (err) {
        console.error(`Get langs error: ${err.message}`);
        return res.status(500).json({
            message: "Server error"
        });
    }
};

exports.getOneLang = async (req, res) => {
    try {
        const { id } = req.params;
        const lang = await Lang.findByPk(Number(id));
        if (!lang) {
            return res.status(404).json({
                message: "Lang topilmadi"
            });
        }
        return res.status(200).json(lang);
    } catch (err) {
        console.error(`Get lang error: ${err.message}`);
        return res.status(500).json({
            message: "Server error"
        });
    }
};

exports.updateLang = async (req, res) => {
    try {
        const { id } = req.params;
        const { name } = req.body;
        const lang = await Lang.findByPk(Number(id));
        if (!lang) {
            return res.status(404).json({
                message: "Lang topilmadi"
            });
        }
        await lang.update({ name });
        return res.status(200).json({
            message: "Lang yangilandi",
            lang
        });
    } catch (err) {
        console.error(`Update lang error: ${err.message}`);
        return res.status(500).json({
            message: "Server error"
        });
    }
};

exports.deleteLang = async (req, res) => {
    try {
        const { id } = req.params;
        const lang = await Lang.findByPk(Number(id));
        if (!lang) {
            return res.status(404).json({
                message: "Lang topilmadi"
            });
        }
        await lang.destroy();
        return res.status(200).json({
            message: "Lang o'chirildi"
        });
    } catch (err) {
        console.error(`Delete lang error: ${err.message}`);
        return res.status(500).json({
            message: "Server error"
        });
    }
};