// load express and create function from handlebars
const express = require('express')
const { create } = require('express-handlebars')
const { notFoundPageHandle, switchErrorHandler } = require('./utils/errorHandler')
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



app.use('/', router)
app.use('/', notFoundPageHandle)
app.use('/', switchErrorHandler)
//app.use('/', notFoundPageRoute)
//app.use('/', systemErrorRoute)

app.listen(port, () => {
  console.log(`The express server is running at ${port}`)
})


