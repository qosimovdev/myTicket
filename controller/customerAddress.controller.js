const { CustomerAddress } = require("../model")

exports.createCustomerAddress = async (req, res) => {
    try {
        const { customerId, name, regionId, districtId, street, house, flat, location, postIndex, info } = req.body
        if (!customerId || name)
            return res.status(400).json({ message: 'name va mentorId required' });
        const customerAddress = await CustomerAddress.create({ customerId, name, regionId, districtId, street, house, flat, location, postIndex, info })
        res.status(201).json({ message: "CustomerAddress qo'shildi", customerAddress })
    } catch (err) {
        console.error("CustomerAddress create error:", err.message);
        return res.status(500).json({ message: "Server error" })
    }
}

