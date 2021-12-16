const express = require('express')

const router = express.Router()



router.use('/', (err, req, res, next) => {

  let code = 0
  let reason = ''
  let handler = ''
  console.log('hi, error')
  // switch (err.type) {

  //   default:
  //     code = 404
  //     reason = '抱歉！找不到頁面'
  //     handler = '將於 <span id="countdown-timer">10</span> 秒自動導向首頁'
  //     break
  // }

  // const errorMessage = { code, reason, handler }
  // res.status(code)
  // res.render('error', { errorMessage })
  next(error)
})
exports = module.exports = router