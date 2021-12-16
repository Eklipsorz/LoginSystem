const express = require('express')

const router = express.Router()

// GET / : just a index page.
// if a user doesn't login successfully, then redirect to login page
// if a user login successfully, then render a welcome page with account
router.get('/', (req, res) => {

  // if user without login, then redirect to log page
  if (!req.session.user) {
    res.redirect('/login')
    return
  }
  // if a user login successfully, then render a welcome page with account
  const { user } = req.session
  res.render('welcome', { user })

})

exports = module.exports = router