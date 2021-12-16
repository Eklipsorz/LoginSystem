const express = require('express')
const accountModel = require('../../models/accountModel')
const mongoose = require('mongoose')

const router = express.Router()

// GET / : just a index page.
// if a user doesn't login successfully, then redirect to login page
// if a user login successfully, then render a welcome page with account
router.get('/', (req, res) => {

  // if user without login, then redirect to log page
  if (!req.session.email) {
    res.redirect('/login')
    return
  }
  // if a user login successfully, then render a welcome page with account

  // find the user according to the user email 
  accountModel.findOne({ email: req.session.email })
    .lean()
    .then(account => {

      // if account exists, then render a index with the account
      if (account) {
        res.render('welcome', { user: account.firstName })
      } else {
        // if account doesn't exist, then render a login page with a info message
        const enableInfoMessage = account ? false : true
        res.render("login", { enableInfoMessage })
      }
    })
    .catch(error => {
      // if something wrong in the query, then emit an error to error handler
      error.type = 'CANNOT-FIND-DATA'
      next(error)
    })





})

exports = module.exports = router