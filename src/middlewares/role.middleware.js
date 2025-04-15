const authorize = (...roles) => {
  return (req, res, next) => {
    const userRole = req.user.userRole
    console.log(userRole)
    if (userRole === 'superadmin') return next()
    if (!roles.includes(userRole)) {
      return res.status(403).json({ message: 'Access denied' })
    }
    next()
  }
}

export default authorize
