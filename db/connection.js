const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()
const URL = process.env.URL

mongoose
    .connect(URL, function (err) {
        if (err) throw err
        db = mongoose.connection.client.db("sc").collection("contacts")
    })


module.exports = mongoose