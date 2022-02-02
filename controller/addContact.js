const Contact = require("../model/contact")

function addContact(c) {
    const contact = new Contact(c)
    return contact.save()
}

module.exports = addContact