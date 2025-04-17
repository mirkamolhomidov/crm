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
  async getStudentsController(req, res, next) {
    try {
      const students = await this.service.getStudents()
      res.status(200).json({
        success: 'true',
        count: students.length,
        students,
      })
    } catch (error) {
      next(error)
    }
  }
}

export default StudentController
