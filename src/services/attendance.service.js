import { AttendanceModel } from '../models/attendance.model.js'
import { AttendanceDetailsModel } from '../models/attendance_details.model.js'
import CustomError from '../utils/customerror.js'
import countStudents from './db.helper.js'

class AttendanceService {
  constructor() {
    this.attendance = AttendanceModel
    this.attendanceDetails = AttendanceDetailsModel
  }
  async createAttendance(lesson_id, attendances) {
    try {
      const checkLessonid = await this.attendance.findOne({ lesson_id })
      if (checkLessonid) {
        throw new CustomError('Lesson id already exists', 400)
      }
      const attendance = await this.attendance.create({ lesson_id })
      const { lesson_id: lesson } = await attendance.populate(
        'lesson_id',
        'title lesson_date'
      )
      await this.attendanceDetails.insertMany(
        attendances.map(i => ({
          ...i,
          attendance_id: attendance._id,
        }))
      )
      const { present, absent, late, attendanceCount } = await countStudents(
        attendance
      )
      return { lesson, attendanceCount, present, absent, late }
    } catch (error) {
      throw new CustomError(error.message, error.status)
    }
  }
  async getAttendance(id) {
    try {
      const attendances = await this.attendance
        .findOne({ lesson_id: id })
        .populate({
          path: 'lesson_id',
          select: 'title lesson_date group_id',
          populate: { path: 'group_id', select: 'name' },
        })
      const { lesson_id: lesson } = attendances
      const students = await this.attendanceDetails
        .find({
          attendance_id: attendances._id,
        })
        .populate({
          path: 'student_id',
          select: 'first_name last_name',
        })
        .select('student_id status comment')
      const { present, absent, late, attendanceCount } = await countStudents(
        attendances
      )
      return {
        lesson,
        attendance: { present, absent, late, total: attendanceCount, students },
      }
    } catch (error) {
      throw new CustomError(error.message, error.status)
    }
  }
}

export default AttendanceService
