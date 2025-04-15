import { Router } from 'express'
import StudentController from '../controllers/student.controller.js'

const controller = new StudentController()
const studentRouter = Router()

studentRouter.post('/', controller.createStudentController.bind(controller))

export default studentRouter
