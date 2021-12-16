const express = require('express')

const homeRoutes = require('./modules/home')
const loginRoutes = require('./modules/login')
const logoutRoutes = require('./modules/logout')


const router = express.Router()

// bind homeRoutes to /
router.use('/', homeRoutes)
// bind loginRoutes to /login
router.use('/login', loginRoutes)


exports = module.exports = router