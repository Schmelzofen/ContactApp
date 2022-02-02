const mongoose = require('../db/connection')

const schema = mongoose.Schema({
    name: String,
    company: String,
    mobile: Number,
    email: String,
    notice: String,
    group: String
})

module.exports = mongoose.model("Contact", schema)