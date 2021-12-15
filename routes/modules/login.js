const express = require('express')


const router = express.Router()

// define static data about users
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

// GET /login: Read login page
router.get('/', (req, res) => {
  res.render('login', { enableErrorMessage: false })
})


// POST /login: handling account data you input and determine whether a user is allowed 
router.post('/', (req, res) => {

  const { email, password } = req.body

  // find user via email
  const userIndex = users.findIndex(user => email === user.email)

  // if user's email is not matched, then return false
  // if user's email is matched, then system check correctness of it's password
  // if user's email and password are matched, then return true.
  // Otherwise, it return false
  const enableErrorMessage = userIndex > -1 ?
    password === users[userIndex].password ? false : true : true

  // show ErrorMessage or welcome page according to enableErrorMessage (true|false)
  if (enableErrorMessage) {
    res.render("login", { enableErrorMessage })
  } else {
    res.render("welcome", { firstName: users[userIndex].firstName })

  }
})

exports = module.exports = router