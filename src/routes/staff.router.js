import { Router } from 'express'
import StaffController from '../controllers/staff.controller.js'
import auth from '../middlewares/auth.middleware.js'
import authorize from '../middlewares/role.middleware.js'

const controller = new StaffController()
const staffRouter = Router()

staffRouter.post(
  '/',
  auth,
  authorize('admin'),
  controller.createStaffController.bind(controller)
)
staffRouter.get(
  '/',
  auth,
  authorize('admin'),
  controller.getStaffsController.bind(controller)
)

export default staffRouter
