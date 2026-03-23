const { Region } = require("../model");

exports.createRegion = async (req, res) => {
    try {
        const { name } = req.body;
        const region = await Region.create({ name });
        return res.status(201).json({
            message: "Region yaratildi",
            region
        });
    } catch (err) {
        console.error(`Create region error: ${err.message}`);
        return res.status(500).json({
            message: "Server error"
        });
    }
};

exports.getAllRegions = async (req, res) => {
    try {
        const regions = await Region.findAll({
            order: [["id", "DESC"]]
        });
        return res.status(200).json(regions);
    } catch (err) {
        console.error(`Get regions error: ${err.message}`);
        return res.status(500).json({
            message: "Server error"
        });
    }
};

exports.getOneRegion = async (req, res) => {
    try {
        const { id } = req.params;
        const region = await Region.findByPk(Number(id));
        if (!region) {
            return res.status(404).json({
                message: "Region topilmadi"
            });
        }
        return res.status(200).json(region);
    } catch (err) {
        console.error(`Get region error: ${err.message}`);
        return res.status(500).json({
            message: "Server error"
        });
    }
};

exports.updateRegion = async (req, res) => {
    try {
        const { id } = req.params;
        const { name } = req.body;
        const region = await Region.findByPk(Number(id));
        if (!region) {
            return res.status(404).json({
                message: "Region topilmadi"
            });
        }
        await region.update({ name });
        return res.status(200).json({
            message: "Region yangilandi",
            region
        });
    } catch (err) {
        console.error(`Update region error: ${err.message}`);
        return res.status(500).json({
            message: "Server error"
        });
    }
};

exports.deleteRegion = async (req, res) => {
    try {
        const { id } = req.params;
        const region = await Region.findByPk(Number(id));
        if (!region) {
            return res.status(404).json({
                message: "Region topilmadi"
            });
        }
        await region.destroy();
        return res.status(200).json({
            message: "Region o'chirildi"
        });
    } catch (err) {
        console.error(`Delete region error: ${err.message}`);
        return res.status(500).json({
            message: "Server error"
        });
    }
};