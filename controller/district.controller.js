const { District, Region } = require("../model");

exports.createDistrict = async (req, res) => {
    try {
        const { name, regionId } = req.body;
        const region = await Region.findByPk(regionId);
        if (!region) {
            return res.status(404).json({
                message: "Region topilmadi"
            });
        }
        const district = await District.create({
            name,
            regionId
        });
        return res.status(201).json({
            message: "District yaratildi",
            district
        });
    } catch (err) {
        console.error(`Create district error: ${err.message}`);
        return res.status(500).json({
            message: "Server error"
        });
    }
};

exports.getAllDistricts = async (req, res) => {
    try {
        const districts = await District.findAll({
            include: [
                {
                    model: Region,
                    as: "region",
                    attributes: ["id", "name"]
                }
            ],
            order: [["id", "DESC"]]
        });
        return res.status(200).json(districts);
    } catch (err) {
        console.error(`Get districts error: ${err.message}`);
        return res.status(500).json({
            message: "Server error"
        });
    }
};

exports.getOneDistrict = async (req, res) => {
    try {
        const { id } = req.params;
        const district = await District.findByPk(Number(id), {
            include: [
                {
                    model: Region,
                    as: "region",
                    attributes: ["id", "name"]
                }
            ]
        });
        if (!district) {
            return res.status(404).json({
                message: "District topilmadi"
            });
        }
        return res.json(district);
    } catch (err) {
        console.error(`Get district error: ${err.message}`);
        return res.status(500).json({
            message: "Server error"
        });
    }
};

exports.updateDistrict = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, regionId } = req.body;
        const district = await District.findByPk(Number(id));
        if (!district) {
            return res.status(404).json({
                message: "District topilmadi"
            });
        }
        if (regionId) {
            const region = await Region.findByPk(regionId);
            if (!region) {
                return res.status(404).json({
                    message: "Region topilmadi"
                });
            }
        }
        await district.update({
            name,
            regionId
        });
        return res.status(200).json({
            message: "District yangilandi",
            district
        });
    } catch (err) {
        console.error(`Update district error: ${err.message}`);
        return res.status(500).json({
            message: "Server error"
        });
    }
};

exports.deleteDistrict = async (req, res) => {
    try {
        const { id } = req.params;
        const district = await District.findByPk(Number(id));
        if (!district) {
            return res.status(404).json({
                message: "District topilmadi"
            });
        }
        await district.destroy();
        return res.status(200).json({
            message: "District o'chirildi"
        });
    } catch (err) {
        console.error(`Delete district error: ${err.message}`);
        return res.status(500).json({
            message: "Server error"
        });
    }
};