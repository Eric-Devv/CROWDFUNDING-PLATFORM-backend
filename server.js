require("dotenv").config();

const express = require("express");
const { Mongoose } = require("mongoose");
const investorRoutes = require('./routes/InvestorRoutes')
const enterprenuerRoutes = require("./routes/enterprenuerRoutes")
const userRoutes = require("./routes/user")

const app = express();


// middlewares
app.use(express.json());


// DATABASE CONFIGURATIONS

mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log("Connected to mongoDB")
    })




// Universal Server Routing
app.use('/api/investors/', investorRoutes)
app.use('/api/enterprenuers/', enterprenuerRoutes)
app.use('/api/user', userRoutes)



// Setting up server action on PORT values
app.listen(process.env.PORT, () => {
    console.log(`connected to localhost:${PORT} & now listening for request`)
})


