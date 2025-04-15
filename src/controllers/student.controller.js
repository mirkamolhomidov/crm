import StudentService from '../services/student.service.js'

class StudentController {
  constructor() {
    this.service = new StudentService()
  }
  async createStudentController(req, res, next) {
    try {
      const student = await this.service.createStudent(req.body)
      res.status(201).json({
        success: 'true',
        student,
      })
    } catch (error) {
      next(error)
    }
  }
}

export default StudentController
