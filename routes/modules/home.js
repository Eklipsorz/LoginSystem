const express = require('express')

const router = express.Router()

// if user without login, then redirect to log page
router.get('/', (req, res) => {

  if (!req.session.user) {
    res.redirect('/login')
    return
  }
  const { user } = req.session
  res.render('welcome', { user })

})

exports = module.exports = router