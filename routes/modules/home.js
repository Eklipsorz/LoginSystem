const express = require('express')

const router = express.Router()

// if user without login, then redirect to log page
router.get('/', (req, res) => {

  res.redirect('/login')

})

exports = module.exports = router