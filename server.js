require("dotenv").config();

const express = require("express");
const { Mongoose } = require("mongoose");
const routes = require('./routes/routes')



const app = express();


// middlewares
app.use(express.json());


// DATABASE CONFIGURATIONS

mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log("Connected to mongoDB")
    })

// Universal Server Routing
app.use('/api/investors/', routes)


// Setting up server action on PORT values
app.listen(process.env.PORT, () => {
    console.log(`connected to localhost:${PORT} & now listening for request`)
})


