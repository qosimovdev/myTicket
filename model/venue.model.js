module.exports = (sequelize, DataTypes) => {
    const Venue = sequelize.define("Venue", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false
        },
        location: {
            type: DataTypes.STRING,
            allowNull: false
        },
        site: {
            type: DataTypes.STRING,
            allowNull: true
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false
        },
        schema: {
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
    }, {
        timestamps: true
    })
    Venue.associate = (models) => {
        Venue.belongsTo(models.Region, {
            foreignKey: "regionId",
            as: "region"
        })
        Venue.belongsTo(models.District, {
            foreignKey: "districtId",
            as: "district"
        })
    }
    return Venue
}