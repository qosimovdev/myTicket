const { CustomerAddress, Customer } = require("../model");

exports.createCustomerAddress = async (req, res) => {
    try {
        const {
            customerId,
            name,
            regionId,
            districtId,
            street,
            house,
            flat,
            location,
            postIndex,
            info
        } = req.body;
        if (!customerId || !name || !regionId || !districtId || !street || !house || !flat || !location || !postIndex) {
            return res.status(400).json({
                message: "Barcha majburiy maydonlarni to'ldiring"
            });
        }
        const customer = await Customer.findByPk(customerId);
        if (!customer) {
            return res.status(404).json({
                message: "Customer topilmadi"
            });
        }
        const customerAddress = await CustomerAddress.create({
            customerId,
            name,
            regionId,
            districtId,
            street,
            house,
            flat,
            location,
            postIndex,
            info
        });
        return res.status(201).json({
            message: "CustomerAddress yaratildi",
            customerAddress
        });
    } catch (err) {
        console.error("Create error:", err.message);
        return res.status(500).json({ message: "Server error" });
    }
};

exports.getAllCustomerAddress = async (req, res) => {
    try {
        const addresses = await CustomerAddress.findAll({
            include: [
                {
                    model: Customer,
                    as: "customer",
                    attributes: ["id", "firstName", "phone"]
                }
            ],
            order: [["createdAt", "DESC"]]
        });
        if (!addresses) {
            return res.status(404).json({
                message: "Address not found"
            })
        }
        return res.status(200).json(addresses);
    } catch (err) {
        console.error("Get all error:", err.message);
        return res.status(500).json({ message: "Server error" });
    }
};

exports.getOneCustomerAddress = async (req, res) => {
    try {
        const { id } = req.params;
        const address = await CustomerAddress.findByPk(id, {
            include: [
                {
                    model: Customer,
                    as: "customer",
                    attributes: ["id", "firstName", "phone"]
                }
            ]
        });
        if (!address) {
            return res.status(404).json({ message: "Address topilmadi" });
        }
        return res.json(address);
    } catch (err) {
        console.error("Get one error:", err.message);
        return res.status(500).json({ message: "Server error" });
    }
};

exports.updateCustomerAddress = async (req, res) => {
    try {
        const { id } = req.params;
        const address = await CustomerAddress.findByPk(id);
        if (!address) {
            return res.status(404).json({ message: "Address topilmadi" });
        }
        const {
            name,
            regionId,
            districtId,
            street,
            house,
            flat,
            location,
            postIndex,
            info
        } = req.body;
        await address.update({
            name,
            regionId,
            districtId,
            street,
            house,
            flat,
            location,
            postIndex,
            info
        });
        return res.json({
            message: "Yangilandi",
            address
        });
    } catch (err) {
        console.error("Update error:", err.message);
        return res.status(500).json({ message: "Server error" });
    }
};

exports.deleteCustomerAddress = async (req, res) => {
    try {
        const { id } = req.params;
        const address = await CustomerAddress.findByPk(id);
        if (!address) {
            return res.status(404).json({ message: "Address topilmadi" });
        }
        await address.destroy();
        return res.json({
            message: "O'chirildi"
        });
    } catch (err) {
        console.error("Delete error:", err.message);
        return res.status(500).json({ message: "Server error" });
    }
};