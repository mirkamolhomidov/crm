import jwt from 'jsonwebtoken'
import getConfig from '../config/config.js'
import CustomError from '../utils/customerror.js'

class JwtService {
  constructor() {
    this.key = getConfig('JWT_KEY')
  }
  generateToken(user_id, role) {
    const accessToken = jwt.sign(
      { userID: user_id, userRole: role },
      this.key,
      {
        expiresIn: '1h',
      }
    )
    const refreshToken = jwt.sign(
      { userId: user_id, userRole: role },
      this.key,
      {
        expiresIn: '2h',
      }
    )
    return { accessToken, refreshToken }
  }
  verifyToken(token) {
    try {
      const decoded = jwt.verify(token, this.key)
      return decoded
    } catch (error) {
      throw new CustomError('Token invalid', 401)
    }
  }
}
export default JwtService
