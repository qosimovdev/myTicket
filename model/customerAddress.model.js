module.exports = (sequelize, DataTypes) => {
    const CustomerAddress = sequelize.define("CustomerAddress", {
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
        regionId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        districtId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        street: {
            type: DataTypes.STRING,
            allowNull: false
        },
        house: {
            type: DataTypes.STRING,
            allowNull: false
        },
        flat: {
            type: DataTypes.STRING,
            allowNull: false
        },
        location: {
            type: DataTypes.STRING,
            allowNull: false
        },
        postIndex: {
            type: DataTypes.STRING,
            allowNull: false
        },
        info: {
            type: DataTypes.STRING,
            allowNull: true
        },
    }, {
        timestamps: true
    });

    CustomerAddress.associate = (models) => {
        CustomerAddress.belongsTo(models.Customer, {
            foreignKey: 'customerId',
            as: 'customer'
        });
    };

    return CustomerAddress;
};