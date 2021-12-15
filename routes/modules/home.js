const express = require('express')

const router = express.Router()



router.get('/', (req, res) => {

  res.redirect('/login')

})

router.use('/', (req, res) => {
  res.status(404)

})
exports = module.exports = router