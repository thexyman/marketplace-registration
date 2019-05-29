const mongoose = require('mongoose')

mongoose.Promise = global.Promise

mongoose.connect('mongodb://localhost:27017/ampp-test', {useNewUrlParser: true})
  .then(() => console.log('Connected to the database'))
  .catch(() => {
    console.log('Cannot connect to database. Exiting.')
    process.exit()
  })


