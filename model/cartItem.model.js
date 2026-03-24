module.exports = (sequelize, DataTypes) => {
    const CartItem = sequelize.define("CartItem", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        ticketId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        cartId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
    }, {
        timestamps: true
    })
    CartItem.associate = (models) => {
        CartItem.belongsTo(models.Ticket, {
            foreignKey: "ticketId",
            as: "ticket"
        })
        CartItem.belongsTo(models.CustomerCart, {
            foreignKey: "cartId",
            as: "cart"
        })
    }
    return CartItem
}