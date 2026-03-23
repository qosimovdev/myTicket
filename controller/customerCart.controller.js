const { CustomerCart, Customer } = require("../model");

exports.createCustomerCart = async (req, res) => {
    try {
        const { customerId, finishedAt, statusId } = req.body;
        const customer = await Customer.findByPk(customerId);
        if (!customer) {
            return res.status(404).json({
                message: "Customer topilmadi"
            });
        }
        const cart = await CustomerCart.create({
            customerId,
            finishedAt,
            statusId
        });
        return res.status(201).json({
            message: "Cart yaratildi",
            cart
        });
    } catch (err) {
        console.error(`Create cart error: ${err.message}`);
        return res.status(500).json({
            message: "Server error"
        });
    }
};

exports.getAllCustomerCarts = async (req, res) => {
    try {
        const carts = await CustomerCart.findAll({
            include: [
                {
                    model: Customer,
                    as: "customer",
                    attributes: ["id", "firstName", "phone", "email"]
                }
            ],
            order: [["id", "DESC"]]
        });
        return res.json(carts);
    } catch (err) {
        console.error(`Get carts error: ${err.message}`);
        return res.status(500).json({
            message: "Server error"
        });
    }
};

exports.getOneCustomerCart = async (req, res) => {
    try {
        const { id } = req.params;
        const cart = await CustomerCart.findByPk(id, {
            include: [
                {
                    model: Customer,
                    as: "customer",
                    attributes: ["id", "firstName", "phone", "email"]
                }
            ]
        });
        if (!cart) {
            return res.status(404).json({
                message: "Cart topilmadi"
            });
        }
        return res.json(cart);
    } catch (err) {
        console.error(`Get cart error: ${err.message}`);
        return res.status(500).json({
            message: "Server error"
        });
    }
};

exports.updateCustomerCart = async (req, res) => {
    try {
        const { id } = req.params;
        const { finishedAt, statusId } = req.body;
        const cart = await CustomerCart.findByPk(id);
        if (!cart) {
            return res.status(404).json({
                message: "Cart topilmadi"
            });
        }
        await cart.update({
            finishedAt,
            statusId
        });
        return res.json({
            message: "Cart yangilandi",
            cart
        });
    } catch (err) {
        console.error(`Update cart error: ${err.message}`);
        return res.status(500).json({
            message: "Server error"
        });
    }
};

exports.deleteCustomerCart = async (req, res) => {
    try {
        const { id } = req.params;
        const cart = await CustomerCart.findByPk(id);
        if (!cart) {
            return res.status(404).json({
                message: "Cart topilmadi"
            });
        }
        await cart.destroy();
        return res.json({
            message: "Cart o'chirildi"
        });
    } catch (err) {
        console.error(`Delete cart error: ${err.message}`);
        return res.status(500).json({
            message: "Server error"
        });
    }
};