import { Router } from 'express'
import TeacherController from '../controllers/teacher.controller.js'
import auth from '../middlewares/auth.middleware.js'
import authorize from '../middlewares/role.middleware.js'

const controller = new TeacherController()
const teacherRouter = Router()

teacherRouter.post(
  '/',
  auth,
  authorize('admin'),
  controller.createTeacherInfoController.bind(controller)
)
teacherRouter.get(
  '/',
  auth,
  authorize('admin'),
  controller.getTeacherInfosController.bind(controller)
)

export default teacherRouter
