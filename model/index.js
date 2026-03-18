const Sequelize = require("sequelize")
const sequelize = require("../config/db")

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.CustomerAddress = require("./customerAddress.model")(sequelize, Sequelize.DataTypes)

Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

module.exports = db