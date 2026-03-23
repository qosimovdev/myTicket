module.exports = (sequelize, DataTypes) => {
    const VenuePhoto = sequelize.define("VenuePhoto", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        url: {
            type: DataTypes.STRING,
            allowNull: false
        },
        venueId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
    }, {
        timestamps: true
    })
    VenuePhoto.associate = (models) => {
        VenuePhoto.belongsTo(models.Venue, {
            foreignKey: "venueId",
            as: "venue"
        })
    }
    return VenuePhoto
}