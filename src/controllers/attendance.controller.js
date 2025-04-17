import AttendanceService from '../services/attendance.service.js'

class AttendanceController {
  constructor() {
    this.service = new AttendanceService()
  }
  async createAttendanceController(req, res, next) {
    try {
      const { lesson, attendanceCount, present, absent, late } =
        await this.service.createAttendance(req.params.id, req.body)
      res.status(201).json({
        success: 'true',
        message: 'Davomat muvaffaqiyatli saqlandi',
        lesson,
        attendanceCount,
        present,
        absent,
        late,
      })
    } catch (error) {
      next(error)
    }
  }
  async getAttendanceController(req, res, next) {
    try {
      const attendance = await this.service.getAttendance(req.params.id)
      res.status(200).json({
        success: 'true',
        ...attendance,
      })
    } catch (error) {
      next(error)
    }
  }
}

export default AttendanceController
