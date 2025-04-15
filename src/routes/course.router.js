import { Router } from 'express'
import CourseController from '../controllers/course.controller.js'
import auth from '../middlewares/auth.middleware.js'
import authorize from '../middlewares/role.middleware.js'

const controller = new CourseController()
const courseRouter = Router()

courseRouter.post(
  '/',
  auth,
  authorize('admin'),
  controller.createCourseController.bind(controller)
)
courseRouter.get(
  '/',
  auth,
  authorize('admin'),
  controller.getCoursesController.bind(controller)
)

export default courseRouter
