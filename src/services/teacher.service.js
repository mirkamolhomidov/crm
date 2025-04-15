import TeacherInfoModel from '../models/teacher_info.model.js'
import CustomError from '../utils/customerror.js'

class TeacherService {
  constructor() {
    this.teacherModel = TeacherInfoModel
  }
  async createTeacherInfo(data) {
    try {
      const teacherInfo = await this.teacherModel.create(data)
      return teacherInfo
    } catch (error) {
      throw new CustomError(error.message, error.status)
    }
  }
  async getTeacherInfos() {
    try {
      const teacherInfos = await this.teacherModel.find()
      return teacherInfos
    } catch (error) {
      throw new CustomError(error.message, error.status)
    }
  }
}

export default TeacherService
