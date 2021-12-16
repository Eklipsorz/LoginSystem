const express = require('express')


const router = express.Router()

router.post('/', (req, res, next) => {
  req.session.destroy(() => {
    console.log('session is destroyed')
  })

})

exports = module.exports = router