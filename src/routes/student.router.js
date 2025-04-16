import { Router } from 'express'
import StudentController from '../controllers/student.controller.js'
import auth from '../middlewares/auth.middleware.js'
import authorize from '../middlewares/role.middleware.js'

const controller = new StudentController()
const studentRouter = Router()

studentRouter.post(
  '/',
  auth,
  authorize('admin'),
  controller.createStudentController.bind(controller)
)
studentRouter.get(
  '/',
  auth,
  authorize('admin'),
  controller.getStudentsController.bind(controller)
)
studentRouter.post(
  '/group',
  auth,
  authorize('admin'),
  controller.createStudentGroupController.bind(controller)
)

export default studentRouter
