const express = require('express')

const mongoose = require('mongoose')
const accountModel = require('../../models/accountModel')
const router = express.Router()



// GET /login: Read login page
router.get('/', (req, res) => {
  res.render('login', { enableErrorMessage: false })
})


// POST /login: handling account data you input and determine whether a user is allowed 
router.post('/', (req, res, next) => {

  const { email, password } = req.body


  console.log('enter post /login')

  accountModel.findOne({ email, password })
    .lean()
    .then(account => {
      throw new Error('TEST MESSAGE')
      let enableErrorMessage = account ? false : true

      if (enableErrorMessage) {
        res.render("login", { enableErrorMessage })
      } else {
        res.render("welcome", { firstName: account.firstName })
      }
    })
    .catch(error => {
      error.type = 'CANNOT-FIND-DATA'
      next(error)
    })
  console.log('end post /login command')
  // find user via email
  // const userIndex = users.findIndex(user => email === user.email)

  // if user's email is not matched, then return false
  // if user's email is matched, then system check correctness of it's password
  // if user's email and password are matched, then return true.
  // Otherwise, it return false
  // const enableErrorMessage = userIndex > -1 ?
  //   password === users[userIndex].password ? false : true : true

  // show ErrorMessage or welcome page according to enableErrorMessage (true|false)
  // if (enableErrorMessage) {
  //   res.render("login", { enableErrorMessage })
  // } else {
  //   res.render("welcome", { firstName: users[userIndex].firstName })

  // }
})
exports = module.exports = router