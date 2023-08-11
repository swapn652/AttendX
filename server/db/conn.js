require('dotenv').config()
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URL)
.then(() => {
    console.log("Successfully Connected")
}).catch(() => {
    console.log("Failed to connect")
})