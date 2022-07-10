const express = require('express')
const app = express()
const cors = require('cors')
const logger = require('morgan')
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 8080
const options = require('./config/corsOptions')

//routes
const authRoute = require('./routes/auth')

//middlewares
app.use(cors(options))
app.user(logger('combined'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/auth', authRoute)


app.listen(PORT, ()=>{console.log(`app is running on PORT: ${PORT}`)})