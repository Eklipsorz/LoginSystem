function notFoundPageHandle(req, res) {
  const error = new Error()
  error.type = 'NOT-FOUND-PAGE'
  throw error
}

function switchErrorHandler(err, req, res, next) {
  console.log(err.type)
}

exports = module.exports = { notFoundPageHandle, switchErrorHandler }