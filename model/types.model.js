module.exports = (sequelize, DataTypes) => {
    const Types = sequelize.define("Types", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
    })
    return Types
}