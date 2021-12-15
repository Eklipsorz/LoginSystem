const express = require('express')

const homeRoutes = require('./modules/home')
const loginRoutes = require('./modules/login')
const errorRoutes = require('./modules/error')

const router = express.Router()


router.use('/', homeRoutes)
router.use('/login', loginRoutes)

exports = module.exports = router