// load express and create function from handlebars
const express = require('express')
const { create } = require('express-handlebars')

const users = [
  {
    firstName: 'Tony',
    email: 'tony@stark.com',
    password: 'iamironman'
  },
  {
    firstName: 'Steve',
    email: 'captain@hotmail.com',
    password: 'icandothisallday'
  },
  {
    firstName: 'Peter',
    email: 'peter@parker.com',
    password: 'enajyram'
  },
  {
    firstName: 'Natasha',
    email: 'natasha@gamil.com',
    password: '*parol#@$!'
  },
  {
    firstName: 'Nick',
    email: 'nick@shield.com',
    password: 'password'
  }
]




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


app.get('/', (req, res) => {
  res.render('index')
})


app.listen(port, () => {
  console.log(`The express server is running at ${port}`)
})


