module.exports = (sequelize, DataTypes) => {
    const Event = sequelize.define("Event", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        eventTypeId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        humanCategoryId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        venueId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        langId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        photo: {
            type: DataTypes.STRING,
            allowNull: false
        },
        startDate: {
            type: DataTypes.STRING,
            allowNull: false
        },
        startTime: {
            type: DataTypes.STRING,
            allowNull: false
        },
    })
    Event.associate = (models) => {
        Event.belongsTo(models.EventType, {
            foreignKey: "eventTypeId",
            as: "eventType"
        })
        Event.belongsTo(models.HumanCategory, {
            foreignKey: "humanCategoryId",
            as: "humanCategory"
        })
        Event.belongsTo(models.Venue, {
            foreignKey: "venueId",
            as: "venue"
        })
        Event.belongsTo(models.Lang, {
            foreignKey: "langId",
            as: "lang"
        })
    }
    return Event
}