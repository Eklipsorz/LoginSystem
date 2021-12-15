const express = require('express')

const homeRoutes = require('./modules/home')
const loginRoutes = require('./modules/login')
const errorRoutes = require('./modules/error')

const router = express.Router()

// bind homeRoutes to /
router.use('/', homeRoutes)
// bind loginRoutes to /login
router.use('/login', loginRoutes)
// bind errorRoute to rest routes
router.use('/', errorRoutes)

exports = module.exports = router