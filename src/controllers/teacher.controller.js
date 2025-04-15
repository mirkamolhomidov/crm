import TeacherService from '../services/teacher.service.js'

class TeacherController {
  constructor() {
    this.service = new TeacherService()
  }
  async createTeacherInfoController(req, res, next) {
    try {
      const teacher = await this.service.createTeacherInfo(req.body)
      res.status(201).json({
        success: 'true',
        teacher,
      })
    } catch (error) {
      next(error)
    }
  }
  async getTeacherInfosController(req, res, next) {
    try {
      const teachers = await this.service.getTeacherInfos()
      res.status(200).json({
        success: 'true',
        count: teachers.length,
        teachers,
      })
    } catch (error) {
      next(error)
    }
  }
}

export default TeacherController
