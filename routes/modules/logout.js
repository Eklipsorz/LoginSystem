const express = require('express')


const router = express.Router()

router.post('/', (req, res, next) => {


  req.session.destroy(() => {
    console.log('session is destroyed')
  })
  res.redirect('/')

})

exports = module.exports = router