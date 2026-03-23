module.exports = (sequelize, DataTypes) => {
    const PaymentMethod = sequelize.define("PaymentMethod", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        timestamps: true
    });

    return PaymentMethod;
};