import bcrypt from 'bcrypt'
import { StudentsModel } from '../models/students.model.js'
import CustomError from '../utils/customerror.js'

class StudentService {
  constructor() {
    this.student = StudentsModel
  }
  async createStudent(data) {
    try {
      const hashedPass = await bcrypt.hash(data.password, 12)
      data.password = hashedPass
      const student = await this.student.create(data)
      return student
    } catch (error) {
      throw new CustomError(error.message, error.status)
    }
  }
  async getStudents() {
    try {
      const students = await this.student.find()
      return students
    } catch (error) {
      throw new CustomError(error.message, error.status)
    }
  }
}

export default StudentService
