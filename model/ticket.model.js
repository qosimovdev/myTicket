module.exports = (sequelize, DataTypes) => {
    const Ticket = sequelize.define("Ticket", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        price: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false
        },
        serviceFee: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false
        },
        eventId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        seatId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        statusId: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    })
    Ticket.associate = (models) => {
        Ticket.belongsTo(models.Event, {
            foreignKey: "eventId",
            as: "event"
        })
        Ticket.belongsTo(models.Seat, {
            foreignKey: "seatId",
            as: "seat"
        })
        Ticket.belongsTo(models.TicketStatus, {
            foreignKey: "statusId",
            as: "status"
        })
    }
    return Ticket
}