module.exports = (sequelize, DataTypes) => {
    const Booking = sequelize.define("Booking", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        cartId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        paymentMethodId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        deliveryMethodId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        finishedAt: {
            type: DataTypes.STRING,
            allowNull: true
        },
        discountCouponId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        statusId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
    }, {
        timestamps: true
    })

    Booking.associate = (models) => {
        Booking.belongsTo(models.CustomerCart, {
            foreignKey: "cartId",
            as: "customerCart"
        })
        Booking.belongsTo(models.PaymentMethod, {
            foreignKey: "paymentMethodId",
            as: "paymentMethod"
        })
        Booking.belongsTo(models.DeliveryMethod, {
            foreignKey: "deliveryMethodId",
            as: "deliveryMethod"
        })
    }
    return Booking
}