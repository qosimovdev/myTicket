module.exports = (sequelize, DataTypes) => {
    const VenueTypes = sequelize.define("VenueTypes", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        venueId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        typeId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
    }, {
        timestamps: true
    })
    VenueTypes.associate = (models) => {
        VenueTypes.belongsTo(models.Venue, {
            foreignKey: "venueId",
            as: "venue"
        })
        VenueTypes.belongsTo(models.Types, {
            foreignKey: "typeId",
            as: "type"
        })
    }
    return VenueTypes
}