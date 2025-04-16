import { LessonsModel } from '../models/lessons.model.js'
import CustomError from '../utils/customerror.js'

class LessonService {
  constructor() {
    this.lesson = LessonsModel
  }
  async createLesson(data) {
    try {
      const lesson = await this.lesson.create(data)
      await lesson.populate('group_id', 'name')
      return lesson
    } catch (error) {
      throw new CustomError(error.message, error.status)
    }
  }
  async getLessons() {
    try {
      const lessons = await this.lesson.find()
      return lessons
    } catch (error) {
      throw new CustomError(error.message, error.status)
    }
  }
}

export default LessonService
