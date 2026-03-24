const { CartItem, Ticket, CustomerCart } = require("../model");

exports.createCartItem = async (req, res) => {
    try {
        const { ticketId, cartId } = req.body;
        const ticket = await Ticket.findByPk(ticketId);
        const cart = await CustomerCart.findByPk(cartId);
        if (!ticket || !cart) {
            return res.status(404).json({
                message: "Ticket yoki Cart topilmadi"
            });
        }
        const item = await CartItem.create({
            ticketId,
            cartId
        });
        return res.status(201).json({
            message: "Cart item qo'shildi",
            item
        });
    } catch (err) {
        console.error(`Create cartItem error: ${err.message}`);
        return res.status(500).json({
            message: "Server error"
        });
    }
};

exports.getAllCartItems = async (req, res) => {
    try {
        const items = await CartItem.findAll({
            include: [
                { model: Ticket, as: "ticket" },
                { model: CustomerCart, as: "cart" }
            ],
            order: [["id", "DESC"]]
        });
        return res.json(items);
    } catch (err) {
        console.error(`Get cartItems error: ${err.message}`);
        return res.status(500).json({
            message: "Server error"
        });
    }
};

exports.getOneCartItem = async (req, res) => {
    try {
        const { id } = req.params;
        const item = await CartItem.findByPk(Number(id), {
            include: [
                { model: Ticket, as: "ticket" },
                { model: CustomerCart, as: "cart" }
            ]
        });
        if (!item) {
            return res.status(404).json({
                message: "Cart item topilmadi"
            });
        }
        return res.json(item);
    } catch (err) {
        console.error(`Get cartItem error: ${err.message}`);
        return res.status(500).json({
            message: "Server error"
        });
    }
};

exports.updateCartItem = async (req, res) => {
    try {
        const { id } = req.params;
        const item = await CartItem.findByPk(Number(id));
        if (!item) {
            return res.status(404).json({
                message: "Cart item topilmadi"
            });
        }
        await item.update(req.body);
        return res.json({
            message: "Cart item yangilandi",
            item
        });
    } catch (err) {
        console.error(`Update cartItem error: ${err.message}`);
        return res.status(500).json({
            message: "Server error"
        });
    }
};

exports.deleteCartItem = async (req, res) => {
    try {
        const { id } = req.params;
        const item = await CartItem.findByPk(Number(id));
        if (!item) {
            return res.status(404).json({
                message: "Cart item topilmadi"
            });
        }
        await item.destroy();
        return res.json({
            message: "Cart item o'chirildi"
        });
    } catch (err) {
        console.error(`Delete cartItem error: ${err.message}`);
        return res.status(500).json({
            message: "Server error"
        });
    }
};