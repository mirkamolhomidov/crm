import { Router } from 'express'
import AttendanceController from '../controllers/attendance.controller.js'
import auth from '../middlewares/auth.middleware.js'
import authorize from '../middlewares/role.middleware.js'

const controller = new AttendanceController()
const attendanceRouter = Router()

attendanceRouter.post(
  '/:id/attendance',
  auth,
  authorize('admin', 'teacher'),
  controller.createAttendanceController.bind(controller)
)
attendanceRouter.get(
  '/:id/attendance',
  auth,
  controller.getAttendanceController.bind(controller)
)

export default attendanceRouter
