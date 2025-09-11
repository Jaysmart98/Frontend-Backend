const express = require("express")
const app = express()
require('dotenv').config()
const connect  = require("./database/db.connect")
const userrouter = require('./route/user.route')
const cors = require("cors")



currentUser = ""

app.use(cors({origin:"*"}))
app.use(express.json())
app.use("/", userrouter)

connect()

const port = 8005

app.listen(port, () => {
    console.log(`Server is running on ${port}`)
})