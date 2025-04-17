import { Router } from 'express'
import GroupController from '../controllers/group.controller.js'
import auth from '../middlewares/auth.middleware.js'
import authorize from '../middlewares/role.middleware.js'
import lessonRouter from './lesson.router.js'

const controller = new GroupController()
const groupRouter = Router()

groupRouter.post(
  '/',
  auth,
  authorize('admin'),
  controller.createGroupController.bind(controller)
)
groupRouter.get(
  '/',
  auth,
  authorize('admin'),
  controller.getGroupsController.bind(controller)
)
groupRouter.put(
  '/',
  auth,
  authorize('admin'),
  controller.updateStatusController.bind(controller)
)
groupRouter.use(lessonRouter)

export default groupRouter
