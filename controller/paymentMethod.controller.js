const { PaymentMethod } = require("../model");

exports.createPaymentMethod = async (req, res) => {
    try {
        const payment = await PaymentMethod.create(req.body);
        res.status(201).json({
            message: "Payment method created",
            payment
        });
    } catch (err) {
        console.error(`Create payment method error: ${err.message}`);
        return res.status(500).json({
            message: "Server error"
        })
    }
};

exports.getAllPaymentMethods = async (req, res) => {
    try {
        const payments = await PaymentMethod.findAll({})
        if (!payments) {
            return res.status(404).json({
                message: "Payment not found"
            })
        }
        return res.status(200).json(payments)
    } catch (err) {
        console.error(`Get all payment method error: ${err.message}`);
        return res.status(500).json({
            message: "Server error"
        })
    }
};

exports.getOnePaymentMethod = async (req, res) => {
    try {
        const { id } = req.params
        const payment = await PaymentMethod.findByPk(id)
        if (!payment) {
            return res.status(404).json({
                message: "Payment not found"
            })
        }
        return res.status(200).json(payment)
    } catch (err) {
        console.error(`Get all payment method error: ${err.message}`);
        return res.status(500).json({
            message: "Server error"
        })
    }
};

exports.updatePaymentMethod = async (req, res) => {
    try {

        const { id } = req.params;
        const payment = await PaymentMethod.findByPk(id);
        if (!payment) return res.status(404).json({ message: "Not found" });
        await payment.update(req.body);
        res.json({ message: "Updated", payment });
    } catch (err) {
        console.error(`Update payment method error: ${err.message}`);
        return res.status(500).json({
            message: "Server error"
        })
    }
};

exports.deletePaymentMethod = async (req, res) => {
    try {
        const { id } = req.params;
        const payment = await PaymentMethod.findByPk(id);
        if (!payment) return res.status(404).json({ message: "Not found" });
        await payment.destroy();
        res.json({ message: "Deleted" });
    } catch (err) {
        console.error(`Delete payment method error: ${err.message}`);
        return res.status(500).json({
            message: "Server error"
        })
    }
};