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
db.Event = require("./event.model")(sequelize, Sequelize.DataTypes)
db.EventType = require("./eventType.model")(sequelize, Sequelize.DataTypes)
db.Venue = require("./venue.model")(sequelize, Sequelize.DataTypes)
db.Lang = require("./lang.model")(sequelize, Sequelize.DataTypes)
db.HumanCategory = require("./humanCategory.model")(sequelize, Sequelize.DataTypes)
db.District = require("./district.model")(sequelize, Sequelize.DataTypes)
db.Region = require("./region.model")(sequelize, Sequelize.DataTypes)
db.VenuePhoto = require("./venuePhoto.model")(sequelize, Sequelize.DataTypes)
db.Types = require("./types.model")(sequelize, Sequelize.DataTypes)
db.VenueTypes = require("./venueTypes.model")(sequelize, Sequelize.DataTypes)
db.SeatType = require("./seatType.model")(sequelize, Sequelize.DataTypes)
db.Seat = require("./seat.model")(sequelize, Sequelize.DataTypes)
db.TicketStatus = require("./ticketStatus.model")(sequelize, Sequelize.DataTypes)
db.Ticket = require("./ticket.model")(sequelize, Sequelize.DataTypes)
db.CartItem = require("./cartItem.model")(sequelize, Sequelize.DataTypes)

Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

module.exports = db