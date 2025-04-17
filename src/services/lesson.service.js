import { AttendanceModel } from '../models/attendance.model.js'
import { AttendanceDetailsModel } from '../models/attendance_details.model.js'
import { LessonsModel } from '../models/lessons.model.js'
import CustomError from '../utils/customerror.js'
import countStudents from './db.helper.js'

class LessonService {
  constructor() {
    this.lesson = LessonsModel
    this.attendance = AttendanceModel
    this.attendanceDetails = AttendanceDetailsModel
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
  async getGroupLessons(group_id, { start_date, end_date }) {
    try {
      const filterLesson = { group_id }
      if (start_date && end_date) {
        filterLesson.lesson_date = {
          $gte: new Date(start_date),
          $lte: new Date(end_date),
        }
      }
      const findLessons = await this.lesson.find(filterLesson)
      const lessons = []
      for (const lesson of findLessons) {
        const attendanceLesson = await this.attendance
          .findOne({
            lesson_id: lesson._id,
          })
          .populate('lesson_id')
        const lessonData = attendanceLesson.lesson_id.toObject()
        const attendance = await countStudents(attendanceLesson)
        const attendanceL = { ...lessonData, attendance }
        lessons.push(attendanceL)
      }
      return lessons
    } catch (error) {
      throw new CustomError(error.message, error.status)
    }
  }
}

export default LessonService
