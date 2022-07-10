const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 8080
const options = require('./config/corsOptions')

//routes
const authRoute = require('./routes/auth')

//middlewares
app.use(cors(options))
app.use(bodyParser.json())

app.use('/auth', authRoute)


app.listen(PORT, ()=>{console.log(`app is running on PORT: ${PORT}`)})