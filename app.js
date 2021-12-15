// load express and create function from handlebars
const express = require('express')
const { create } = require('express-handlebars')


const app = express()

// define a port for express server
const port = 3500


app.get('/', (req, res) => {
  console.log('hi')
})


app.listen(port, () => {
  console.log(`The express server is running at ${port}`)
})


