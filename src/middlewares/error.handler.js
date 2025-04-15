const errorHandler = async (err, req, res, next) => {
  console.error(err.stack)
  const message = err.message || 'Serverda xatolik yuz berdi'
  res.status(err.status || 500).json({ success: false, message })
}

export default errorHandler
