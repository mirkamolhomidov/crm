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
  async getLessonController(req, res, next) {
    try {
      const lessons = await this.service.getGroupLessons(
        req.params.id,
        req.query
      )
      res.status(200).json({
        success: 'true',
        lessons,
      })
    } catch (error) {
      next(error)
    }
  }
}

export default LessonController
