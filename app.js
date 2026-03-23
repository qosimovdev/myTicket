const express = require("express")
require("dotenv").config()
const cors = require("cors")
const { sequelize } = require("./model")

const app = express()
app.use(express.json())
app.use(cors())

const PORT = process.env.PORT || 5577

sequelize
    .sync()
    .then(() => {
        console.log("DB ulandi");
        app.listen(PORT, () => {
            console.log(`Server running at http://localhost:${PORT}`);

        })
    })
    .catch((err) => console.error("DB error: ", err))

const customer = require("./routes/customer.routes")
const customerAddress = require("./routes/customerAddress.routes")
const customerCard = require("./routes/customerCard.routes")

app.use("/api/customer-address", customerAddress)
app.use("/api/customer", customer)
app.use("/api/customer-card", customerCard)