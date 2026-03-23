module.exports = (sequelize, DataTypes) => {
    const CustomerCard = sequelize.define("CustomerCard", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        customerId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        number: {
            type: DataTypes.STRING,
            allowNull: false
        },
        year: {
            type: DataTypes.STRING,
            allowNull: false
        },
        month: {
            type: DataTypes.STRING,
            allowNull: false
        },
        isActive: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true
        },
        isMain: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true
        },
    })
    CustomerCard.associate = (models) => {
        CustomerCard.belongsTo(models.Customer, {
            foreignKey: "customerId",
            as: "customer"
        })
    }
    return CustomerCard
}