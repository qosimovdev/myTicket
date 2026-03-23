const { CustomerCard, Customer } = require("../model");

exports.createCustomerCard = async (req, res) => {
    try {
        const {
            customerId,
            name,
            phone,
            number,
            year,
            month,
            isActive,
            isMain
        } = req.body;
        const customer = await Customer.findByPk(customerId);
        if (!customer) {
            return res.status(404).json({ message: "Customer topilmadi" });
        }
        if (isMain) {
            await CustomerCard.update(
                { isMain: false },
                { where: { customerId } }
            );
        }
        const card = await CustomerCard.create({
            customerId,
            name,
            phone,
            number,
            year,
            month,
            isActive,
            isMain
        });
        const masked = "**** **** **** " + number.slice(-4);
        return res.status(201).json({
            message: "Card yaratildi",
            card: { ...card.toJSON(), number: masked }
        });
    } catch (err) {
        console.error(`Create error: ${err.message}`);
        return res.status(500).json({ message: "Server error" });
    }
};

exports.getAllCustomerCards = async (req, res) => {
    try {
        const cards = await CustomerCard.findAll({
            include: [
                {
                    model: Customer,
                    as: "customer",
                    attributes: ["id", "firstName", "phone"]
                }
            ],
            order: [["createdAt", "DESC"]]
        });
        const result = cards.map(card => {
            const data = card.toJSON();
            return {
                ...data,
                number: "**** **** **** " + data.number.slice(-4)
            };
        });
        return res.json(result);
    } catch (err) {
        console.error(`Get all error: ${err.message}`);
        return res.status(500).json({ message: "Server error" });
    }
};

exports.getOneCustomerCard = async (req, res) => {
    try {
        const { id } = req.params;
        const card = await CustomerCard.findByPk(id, {
            include: [
                {
                    model: Customer,
                    as: "customer",
                    attributes: ["id", "firstName", "phone"]
                }
            ]
        });
        if (!card) {
            return res.status(404).json({ message: "Card topilmadi" });
        }
        const data = card.toJSON();
        return res.json({
            ...data,
            number: "**** **** **** " + data.number.slice(-4)
        });
    } catch (err) {
        console.error(`Get one error: ${err.message}`);
        return res.status(500).json({ message: "Server error" });
    }
};

exports.updateCustomerCard = async (req, res) => {
    try {
        const { id } = req.params;
        const card = await CustomerCard.findByPk(id);
        if (!card) {
            return res.status(404).json({ message: "Card topilmadi" });
        }
        const {
            name,
            phone,
            number,
            year,
            month,
            isActive,
            isMain
        } = req.body;
        if (isMain) {
            await CustomerCard.update(
                { isMain: false },
                { where: { customerId: card.customerId } }
            );
        }
        await card.update({
            name,
            phone,
            number,
            year,
            month,
            isActive,
            isMain
        });
        const data = card.toJSON();
        return res.json({
            message: "Card yangilandi",
            card: {
                ...data,
                number: "**** **** **** " + data.number.slice(-4)
            }
        });
    } catch (err) {
        console.error(`Update error: ${err.message}`);
        return res.status(500).json({ message: "Server error" });
    }
};

exports.deleteCustomerCard = async (req, res) => {
    try {
        const { id } = req.params;
        const card = await CustomerCard.findByPk(id);
        if (!card) {
            return res.status(404).json({ message: "Card topilmadi" });
        }
        await card.destroy();
        return res.json({
            message: "Card o'chirildi"
        });
    } catch (err) {
        console.error(`Delete error: ${err.message}`);
        return res.status(500).json({ message: "Server error" });
    }
};