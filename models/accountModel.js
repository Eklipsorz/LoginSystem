const mongoose = require('mongoose')

const Schema = mongoose.Schema
const accountScheam = new Schema({
  firstName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true }
})

exports = module.exports = mongoose.model('logAuth', accountScheam)