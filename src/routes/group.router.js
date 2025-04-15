import { Router } from 'express'
import GroupController from '../controllers/group.controller.js'
import auth from '../middlewares/auth.middleware.js'
import authorize from '../middlewares/role.middleware.js'

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

export default groupRouter
