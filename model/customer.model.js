module.exports = (sequelize, DataTypes) => {
    const bcrypt = require('bcrypt');

    const Customer = sequelize.define("Customer", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: true
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        birthDate: {
            type: DataTypes.STRING,
            allowNull: false
        },
        gender: {
            type: DataTypes.ENUM('male', 'female'),
            allowNull: false
        }
    });

    Customer.prototype.checkPassword = function (password) {
        return bcrypt.compare(password, this.password);
    };

    Customer.beforeCreate(async (customer) => {
        customer.password = await bcrypt.hash(customer.password, 10);
    });

    Customer.beforeUpdate(async (customer) => {
        if (customer.changed('password')) {
            customer.password = await bcrypt.hash(customer.password, 10);
        }
    });

    return Customer;
};