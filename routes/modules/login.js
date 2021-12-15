const express = require('express')


const router = express.Router()

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


router.get('/', (req, res) => {

  res.render('login', { enableErrorMessage: false })
})


router.post('/', (req, res) => {

  const { email, password } = req.body

  const userIndex = users.findIndex(user => email === user.email)

  const enableErrorMessage = userIndex > -1 ?
    password === users[userIndex].password ? false : true : true

  if (enableErrorMessage) {
    res.render("login", { enableErrorMessage })
  } else {
    res.render("welcome", { firstName: users[userIndex].firstName })

  }
})

exports = module.exports = router