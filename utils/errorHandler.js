function notFoundPageHandle(req, res) {
  const error = new Error()
  error.type = 'NOT-FOUND-PAGE'
  throw error
}

function systemErrorHandler(err, req, res, next) {
  let code = 0
  let reason = ''
  let handler = '將於 <span id="countdown-timer">10</span> 秒自動導向首頁'
  console.log(err.type)

  switch (err.type) {
    case 'CANNOT-FIND-DATA':
      code = 500
      reason = '認證系統目前出現問題'
      break
    case 'NOT-FOUND-PAGE':
      code = 404
      reason = '抱歉！找不到頁面'
      break
  }

  const errorMessage = { code, reason, handler }
  res.status(code)
  res.render('error', { errorMessage })

}

exports = module.exports = { notFoundPageHandle, systemErrorHandler }