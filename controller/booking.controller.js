const { Booking, CustomerCart, PaymentMethod, DeliveryMethod } = require("../model");

exports.createBooking = async (req, res) => {
    try {
        const cart = await CustomerCart.findByPk(req.body.cartId);
        if (!cart) {
            return res.status(404).json({ message: "Cart not found" });
        }
        const booking = await Booking.create(req.body);
        res.status(201).json({
            message: "Booking created",
            booking
        });
    } catch (err) {
        console.error(`create bookin error: ${err.message}`);
        return res.status(500).json({
            message: "Server error"
        })
    }
};

exports.getAllBookings = async (req, res) => {
    try {
        const bookings = await Booking.findAll({
            include: [
                {
                    model: CustomerCart,
                    as: "customerCart"
                },
                {
                    model: PaymentMethod,
                    as: "paymentMethod"
                },
                {
                    model: DeliveryMethod,
                    as: "deliveryMethod"
                }
            ]
        })
        if (!bookings) {
            return res.status(404).json({
                message: "Bookins not found"
            })
        }
        return res.status(200).json({
            bookings
        })
    } catch (err) {
        console.error(`get bookins error: ${err.message}`);
        return res.status(500).json({
            message: "Server error"
        })
    }
};

exports.getOneBooking = async (req, res) => {
    try {
        const { id } = req.params;
        const booking = await Booking.findByPk(id, {
            include: [
                {
                    model: CustomerCart,
                    as: "customerCart"
                },
                {
                    model: PaymentMethod,
                    as: "paymentMethod"
                },
                {
                    model: DeliveryMethod,
                    as: "deliveryMethod"
                }
            ]
        });
        if (!booking) return res.status(404).json({ message: "Not found" });
        res.json(booking);
    } catch (err) {
        console.error(`get one booking error: ${err.message}`);
        return res.status(500).json({
            message: "Server error"
        })
    }
};

exports.updateBooking = async (req, res) => {
    try {
        const { id } = req.params;
        const booking = await Booking.findByPk(id);
        if (!booking) return res.status(404).json({ message: "Not found" });
        await booking.update(req.body);
        res.json({ message: "Updated", booking });
    } catch (err) {
        console.error(`get bookings error: ${err.message}`);
        return res.status(500).json({
            message: "Server error"
        })
    }
};

exports.deleteBooking = async (req, res) => {
    try {
        const { id } = req.params;
        const booking = await Booking.findByPk(id);
        if (!booking) return res.status(404).json({ message: "Not found" });
        await booking.destroy();
        res.json({ message: "Deleted" });
    } catch (err) {
        console.error(`delete bookings error: ${err.message}`);
        return res.status(500).json({
            message: "Server error"
        })
    }
};