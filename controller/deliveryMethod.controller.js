const { DeliveryMethod } = require("../model");

exports.createDeliveryMethod = async (req, res) => {
    try {
        const delivery = await DeliveryMethod.create(req.body);
        res.status(201).json({
            message: "delivery method created",
            delivery
        });
    } catch (err) {
        console.error(`Create delivery method error: ${err.message}`);
        return res.status(500).json({
            message: "Server error"
        })
    }
};

exports.getAllDeliveryMethods = async (req, res) => {
    try {
        const deliverys = await DeliveryMethod.findAll()
        if (!deliverys) {
            return res.status(404).json({
                message: "delivery not found"
            })
        }
        return res.status(200).json(deliverys)
    } catch (err) {
        console.error(`Get all delivery method error: ${err.message}`);
        return res.status(500).json({
            message: "Server error"
        })
    }
};

exports.getOneDeliveryMethod = async (req, res) => {
    try {
        const { id } = req.params
        const delivery = await DeliveryMethod.findByPk(id)
        if (!delivery) {
            return res.status(404).json({
                message: "delivery not found"
            })
        }
        return res.status(200).json(delivery)
    } catch (err) {
        console.error(`Get one delivery method error: ${err.message}`);
        return res.status(500).json({
            message: "Server error"
        })
    }
};

exports.updateDeliveryMethod = async (req, res) => {
    try {

        const { id } = req.params;
        const delivery = await DeliveryMethod.findByPk(id);
        if (!delivery) return res.status(404).json({ message: "Not found" });
        await delivery.update(req.body);
        res.json({ message: "Updated", delivery });
    } catch (err) {
        console.error(`Update delivery method error: ${err.message}`);
        return res.status(500).json({
            message: "Server error"
        })
    }
};

exports.deleteDeliveryMethod = async (req, res) => {
    try {
        const { id } = req.params;
        const delivery = await DeliveryMethod.findByPk(id);
        if (!delivery) return res.status(404).json({ message: "Not found" });
        await delivery.destroy();
        res.json({ message: "Deleted" });
    } catch (err) {
        console.error(`Delete delivery method error: ${err.message}`);
        return res.status(500).json({
            message: "Server error"
        })
    }
};