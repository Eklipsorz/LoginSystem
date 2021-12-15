const mongoose = require('mongoose')

// define a port for db server and db name
const port = 27017
const dbName = 'accountSystem'

mongoose.connect(`mongodb://localhost:${port}/${dbName}`)
const db = mongoose.connection

db.on('error', () => {
  console.log('mongoose connection failed')
})

db.once('open', () => {
  console.log("mongoose connection successfully")
})

exports = module.exports = db