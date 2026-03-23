const Sequelize = require("sequelize")
const sequelize = require("../config/db")

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.CustomerAddress = require("./customerAddress.model")(sequelize, Sequelize.DataTypes)
db.Customer = require("./customer.model")(sequelize, Sequelize.DataTypes)
db.CustomerCard = require("./customerCard.model")(sequelize, Sequelize.DataTypes)
db.CustomerCart = require("./customerCart.model")(sequelize, Sequelize.DataTypes)
db.Booking = require("./booking.model")(sequelize, Sequelize.DataTypes)
db.PaymentMethod = require("./paymentMethod.model")(sequelize, Sequelize.DataTypes)
db.DeliveryMethod = require("./deliveryMethod.model")(sequelize, Sequelize.DataTypes)

Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

module.exports = db