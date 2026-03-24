module.exports = (sequelize, DataTypes) => {
    const Seat = sequelize.define("Seat", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        sector: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        rowNumber: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        number: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        venueId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        seatTypeId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        locationInSchema: {
            type: DataTypes.STRING,
            allowNull: false
        },
    })
    Seat.associate = (models) => {
        Seat.belongsTo(models.SeatType, {
            foreignKey: "seatTypeId",
            as: "seatType"
        })
        Seat.belongsTo(models.Venue, {
            foreignKey: "venueId",
            as: "venue"
        })
    }
    return Seat
}