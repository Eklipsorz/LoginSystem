const express = require('express')
const router = express.Router()

// POST /logout: just destroy a session data about that a user is logging
router.post('/', (req, res, next) => {

  // destroy session in the server
  req.session.destroy(() => {
    console.log('session is destroyed')
  })

  res.redirect('/')

})

exports = module.exports = router