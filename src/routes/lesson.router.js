import { Router } from 'express'
import LessonController from '../controllers/lesson.controller.js'
import auth from '../middlewares/auth.middleware.js'
import authorize from '../middlewares/role.middleware.js'

const controller = new LessonController()
const lessonRouter = Router()

lessonRouter.post(
  '/',
  auth,
  authorize('admin', 'teacher'),
  controller.createLessonController.bind(controller)
)
// lessonRouter.get(
//   '/',
//   auth,
//   authorize('admin'),
//   controller.getStudentsController.bind(controller)
// )

export default lessonRouter
