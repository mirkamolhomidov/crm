import { Router } from 'express'
import LessonController from '../controllers/lesson.controller.js'
import auth from '../middlewares/auth.middleware.js'
import authorize from '../middlewares/role.middleware.js'
import attendanceRouter from './attendance.router.js'

const controller = new LessonController()
const lessonRouter = Router()

lessonRouter.post(
  '/',
  auth,
  authorize('admin', 'teacher'),
  controller.createLessonController.bind(controller)
)
lessonRouter.get(
  '/:id/lesson',
  auth,
  controller.getLessonController.bind(controller)
)
lessonRouter.use(attendanceRouter)

export default lessonRouter
