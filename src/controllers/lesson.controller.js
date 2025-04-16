import LessonService from '../services/lesson.service.js'

class LessonController {
  constructor() {
    this.service = new LessonService()
  }
  async createLessonController(req, res, next) {
    try {
      const lesson = await this.service.createLesson(req.body)
      res.status(201).json({
        success: 'true',
        lesson,
      })
    } catch (error) {
      next(error)
    }
  }
  // async getStudentsController() {
  //   try {
  //     const students = await this.service.getStudents()
  //     res.status(200).json({
  //       success: 'true',
  //       count: students.length,
  //       students,
  //     })
  //   } catch (error) {
  //     next(error)
  //   }
  // }
}

export default LessonController
