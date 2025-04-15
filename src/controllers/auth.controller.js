import AuthService from '../services/auth.service.js'

class AuthController {
  constructor() {
    this.authService = new AuthService()
  }
  async staffLoginController(req, res, next) {
    try {
      const data = await this.authService.staffLogin(req.body)
      res.status(200).json({
        success: 'true',
        token: data.token,
        staff: data.staff,
      })
    } catch (error) {
      next(error)
    }
  }
  async studentLoginController(req, res, next) {
    try {
      const data = await this.authService.studentLogin(req.body)
      res.status(200).json({
        success: 'true',
        token: data.token,
        student: data.student,
      })
    } catch (error) {
      next(error)
    }
  }
}

export default AuthController
