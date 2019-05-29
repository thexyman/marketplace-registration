require('./database/mongoose')

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const routes = require('./routes/routes')
const app = express()

app.use(cors())
app.use(bodyParser.json())
routes(app)

module.exports = app