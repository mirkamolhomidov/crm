import bcrypt from 'bcrypt'
import { StaffsModel } from '../models/staffs.model.js'
import { StudentsModel } from '../models/students.model.js'
import CustomError from '../utils/customerror.js'
import JwtService from './jwt.service.js'

class AuthService {
  constructor() {
    this.staff = StaffsModel
    this.student = StudentsModel
    this.jwtService = new JwtService()
  }
  async staffLogin(data) {
    try {
      const staff = await this.staff.findOne({ username: data.username })
      if (!staff) {
        throw new CustomError('Email or password invalid', 400)
      }
      const staffPassword = await bcrypt.compare(data.password, staff.password)
      if (!staffPassword) {
        throw new CustomError('Email or password invalid', 400)
      }
      const token = this.jwtService.generateToken(staff._id, staff.role)
      return { token, staff }
    } catch (error) {
      throw new CustomError(error.message, error.status)
    }
  }
  async studentLogin({ username, password }) {
    try {
      const student = await this.student.findOne({ username: username })
      const studentPassword = await bcrypt.compare(data.password, password)
      if (!student || !studentPassword) {
        throw new CustomError('Email or password invalid', 401)
      }
      const token = this.jwtService.generateToken(student._id, student.role)
      return { token, student }
    } catch (error) {
      throw new CustomError(error.message, error.status)
    }
  }
}

export default AuthService
