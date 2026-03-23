const { Customer } = require("../model");
const jwt = require("jsonwebtoken");

const JWT_SECRET = process.env.JWT_SECRET || "secretkey";

exports.registerCustomer = async (req, res) => {
    try {
        const { firstName, lastName, phone, password, email, birthDate, gender } = req.body;
        if (!firstName || !phone || !password || !email || !birthDate || !gender) {
            return res.status(400).json({ message: "Majburiy maydonlarni to'ldiring" });
        }
        const existing = await Customer.findOne({ where: { email } });
        if (existing) {
            return res.status(400).json({ message: "Email allaqachon mavjud" });
        }
        const customer = await Customer.create({
            firstName,
            lastName,
            phone,
            password,
            email,
            birthDate,
            gender
        });
        const { password: _, ...customerData } = customer.toJSON();
        return res.status(201).json({
            message: "Customer muvaffaqiyatli yaratildi",
            customer: customerData
        });
    } catch (err) {
        console.error("Register error:", err.message);
        return res.status(500).json({ message: "Server error" });
    }
};

exports.loginCustomer = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password)
            return res.status(400).json({ message: "Email va password kerak" });
        const customer = await Customer.findOne({ where: { email } });
        if (!customer)
            return res.status(404).json({ message: "Customer topilmadi" });

        const isMatch = await customer.checkPassword(password);
        if (!isMatch)
            return res.status(400).json({ message: "Password noto'g'ri" });
        const token = jwt.sign(
            { id: customer.id, email: customer.email },
            JWT_SECRET,
            { expiresIn: "7d" }
        );
        return res.json({
            message: "Login muvaffaqiyatli",
            token
        });
    } catch (err) {
        console.error("Login error:", err.message);
        return res.status(500).json({ message: "Server error" });
    }
};

exports.getCustomer = async (req, res) => {
    try {
        const { id } = req.params;
        const customer = await Customer.findByPk(id, { include: ["carts", "cards", "addresses"] });
        if (!customer)
            return res.status(404).json({ message: "Customer topilmadi" });
        return res.json(customer);
    } catch (err) {
        console.error("Get customer error:", err.message);
        return res.status(500).json({ message: "Server error" });
    }
};

exports.updateCustomer = async (req, res) => {
    try {
        const { id } = req.params;
        const customer = await Customer.findByPk(id);
        if (!customer)
            return res.status(404).json({ message: "Customer topilmadi" });
        const { firstName, lastName, phone, password, email, birthDate, gender } = req.body;
        await customer.update({
            firstName, lastName, phone, password, email, birthDate, gender
        });
        const { password: _, ...customerData } = customer.toJSON();
        return res.json({
            message: "Customer yangilandi",
            customer: customerData
        });
    } catch (err) {
        console.error("Update customer error:", err.message);
        return res.status(500).json({ message: "Server error" });
    }
};