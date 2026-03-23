module.exports = (sequelize, DataTypes) => {
    const CustomerCart = sequelize.define("CustomerCart", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        customerId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        finishedAt: {
            type: DataTypes.STRING,
            allowNull: true
        },
        statusId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
    }, {
        timestamps: true
    })
    CustomerCart.associate = (models) => {
        CustomerCart.belongsTo(models.Customer, {
            foreignKey: "customerId",
            as: "customer"
        })
    }
    return CustomerCart
}