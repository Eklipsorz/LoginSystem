// load express and create function from handlebars
const express = require('express')
const session = require('express-session')
const { create } = require('express-handlebars')
const { notFoundPageHandle, systemErrorHandler } = require('./utils/errorHandler')
const router = require('./routes')
const db = require('./config/mongoose')



const app = express()

// define a port for express server
const port = 3500

const options = {
  extname: '.hbs',
  layoutsDir: 'views/layouts',
  defaultLayout: 'main'
}

const handlebars = create(options)

// set view engine
app.engine('.hbs', handlebars.engine)
app.set('view engine', '.hbs')

// set views path
app.set('views', process.cwd() + '/views')

app.use('/', express.static('public'))

app.use('/', express.urlencoded({ extended: true }))


app.use('/', session({
  // This is the secret used to sign the session ID cookie. This can be either a string for a single secret, or an array of multiple secrets
  secret: 'logAuth',
  // The name of the session ID cookie to set in the response (and read from in the request).
  name: 'user',
  // Forces a session that is "uninitialized" to be saved to the store. A session is uninitialized when it is new but not modified
  saveUninitialized: false,
  resave: true,
}))

app.use('/', router)
app.use('/', notFoundPageHandle)
app.use('/', systemErrorHandler)

app.listen(port, () => {
  console.log(`The express server is running at ${port}`)
})


