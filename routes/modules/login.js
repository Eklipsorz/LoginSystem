const express = require('express')

const mongoose = require('mongoose')
const accountModel = require('../../models/accountModel')
const router = express.Router()



// GET /login: Read login page
router.get('/', (req, res) => {
  if (!req.session.user) {
    res.render('login', { enableErrorMessage: false })
    return
  }
  res.redirect('/')
})


// POST /login: handling account data you input and determine whether a user is allowed 
router.post('/', (req, res, next) => {

  // Get user email and password
  let { email, password } = req.body
  email = email.trim()
  console.log(email, password)

  // find the user according to the user email and password 
  accountModel.findOne({ email, password })
    .lean()
    .then(account => {

      console.log(account)

      // if account exists, then render a index with the account
      if (account) {
        req.session.user = account.firstName
        res.redirect('/')
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