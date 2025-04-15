import { StaffsModel } from '../models/staffs.model.js'
import { TeacherInfoModel } from '../models/teacher_info.model.js'
import CustomError from '../utils/customerror.js'

class TeacherService {
  constructor() {
    this.teacher = TeacherInfoModel
    this.staff = StaffsModel
  }
  async createTeacherInfo(data) {
    try {
      const staff = await this.staff.find({ _id: data.staff_id })
      if (staff.role !== 'teacher') {
        throw new CustomError('staff_id owner is not a teacher', 400)
      }
      const teacherInfo = await this.teacher.create(data)
      await teacherInfo.populate('staff_id', 'first_name last_name')
      return teacherInfo
    } catch (error) {
      throw new CustomError(error.message, error.status)
    }
  }
  async getTeacherInfos() {
    try {
      const teacherInfos = await this.teacher
        .find()
        .populate('staff_id', 'first_name last_name')
      return teacherInfos
    } catch (error) {
      throw new CustomError(error.message, error.status)
    }
  }
}

export default TeacherService
