const Contact = require("../model/contact")

function getContacts() {
    return Contact.find()
}

module.exports = getContacts