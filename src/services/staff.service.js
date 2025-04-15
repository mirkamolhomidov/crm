import bcrypt from 'bcrypt'
import { StaffsModel } from '../models/staffs.model.js'
import CustomError from '../utils/customerror.js'

class StaffService {
  constructor() {
    this.staffModel = StaffsModel
  }
  async createStaff(data) {
    try {
      const checkStaff = await this.staffModel.findOne({
        username: data.username,
      })
      if (checkStaff) throw new CustomError('username already exists', 400)
      const hashedPass = await bcrypt.hash(data.password, 12)
      data.password = hashedPass
      const staff = await this.staffModel.create(data)
      return staff
    } catch (error) {
      throw new CustomError(error.message, error.status)
    }
  }
  async getStaffs() {
    try {
      const staffs = await this.staffModel.find()
      return staffs
    } catch (error) {
      throw new CustomError(error.message, error.status)
    }
  }
}

export default StaffService
