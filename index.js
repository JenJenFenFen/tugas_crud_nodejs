// env
require('dotenv').config()

// required depend
const express = require('express')
const cors = require('cors')

const app = express()

// set port
const port = process.env.PORT

const user = require('./routes/user')

app.use(express.json())
app.use(express.urlencoded({ 
    extended: true 
}))
app.use(cors({ 
    origin: true,
    credentials: true
}))

// router
app.use(user)

// listen port
app.listen(port, () =>{
    console.log(`Listening at http://localhost:${port}`)
})