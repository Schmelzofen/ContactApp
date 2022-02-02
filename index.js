const express = require('express')
const app = express()
const dotenv = require('dotenv')
dotenv.config()



app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/public'))


app.get("/", (req, res) => {
    console.log(mongoose)
    res.send("Hello World.")
})

const PORT = process.env.PORT || 8080
app.listen(PORT, function () {
    console.log('Server listening on port', PORT)
})
