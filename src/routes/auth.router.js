import { Router } from 'express'
import AuthController from '../controllers/auth.controller.js'

const authRouter = Router()
const controller = new AuthController()

authRouter.post(
  '/staff/login',
  controller.staffLoginController.bind(controller)
)
authRouter.post(
  '/student/login',
  controller.studentLoginController.bind(controller)
)

export default authRouter
