// load express and create function from handlebars
const express = require('express')
const { create } = require('express-handlebars')

// load express-session 
const session = require('express-session')
// load error handler for route and a set of routes for valid route
const { notFoundPageHandle, systemErrorHandler } = require('./utils/errorHandler')
const router = require('./routes')

// connect to db
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
  // This is the secret used to sign the session ID cookie.
  secret: 'logAuth',
  // The name of the session ID cookie to set in the response 
  name: 'user',
  // Forces a session that is "uninitialized" to be saved to the store. 
  saveUninitialized: false,
  // Forces the session to be saved back to the session store, even if the session was never modified during the request
  resave: true,
}))

// bind a set of routes to all valid routes
app.use('/', router)

// handling not-found page
app.use('/', notFoundPageHandle)
// handling all error in this system
app.use('/', systemErrorHandler)

app.listen(port, () => {
  console.log(`The express server is running at ${port}`)
})


