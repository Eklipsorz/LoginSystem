const express = require('express')

const router = express.Router()


router.use('/', (req, res) => {

  const errorMessage = {
    code: 404,
    reason: '抱歉！找不到頁面',
    handler: '將於 <span id="countdown-timer">10</span> 秒自動導向首頁'

  }
  res.status(404)
  res.render('error', { errorMessage })
})
exports = module.exports = router