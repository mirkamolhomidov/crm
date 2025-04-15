import JwtService from '../services/jwt.service.js'
import CustomError from '../utils/customerror.js'

const jwtService = new JwtService()

const auth = (req, res, next) => {
  const authHeader = req.headers.authorization
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    throw new CustomError('Token invalid', 401)
  }
  const token = authHeader.split(' ')[1]
  try {
    const decoded = jwtService.verifyToken(token)
    req.user = decoded
    next()
  } catch (error) {
    next(error)
  }
}

export default auth
