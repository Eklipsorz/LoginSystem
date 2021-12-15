const mongoose = require('mongoose')
const db = require('../../config/mongoose')
const accountModel = require('../accountModel')
const accounts = require('./account').results

db.once('open', async () => {
  await accountModel.create(accounts)
  console.log("The seed data have been built!!")
  db.close()
})