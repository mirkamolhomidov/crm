import bcrypt from 'bcrypt'
import { GroupsModel } from '../models/groups.model.js'
import { StudentGroup } from '../models/student_groups.model.js'
import { StudentsModel } from '../models/students.model.js'
import CustomError from '../utils/customerror.js'

class StudentService {
  constructor() {
    this.student = StudentsModel
    this.studentGroup = StudentGroup
    this.group = GroupsModel
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
  async createStudentGroup(data) {
    try {
      const checkStudent = await this.student.findOne({ _id: data.student_id })
      if (!checkStudent) throw new CustomError('Invalid student id', 400)
      const checkGroup = await this.group.findOne({ _id: data.group_id })
      if (!checkGroup) throw new CustomError('Invalid group id', 400)
      const studentGroup = await this.studentGroup.create(data)
      return studentGroup
    } catch (error) {
      throw new CustomError(error.message, error.status)
    }
  }
}

export default StudentService
