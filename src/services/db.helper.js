import { AttendanceDetailsModel } from '../models/attendance_details.model.js'

const attendanceDetails = AttendanceDetailsModel
async function countStudents(attendance) {
  const present = await attendanceDetails.countDocuments({
    attendance_id: attendance._id,
    status: 'present',
  })
  const absent = await attendanceDetails.countDocuments({
    attendance_id: attendance._id,
    status: 'absent',
  })
  const late = await attendanceDetails.countDocuments({
    attendance_id: attendance._id,
    status: 'late',
  })
  const attendanceCount = present + absent + late
  return { present, absent, late, attendanceCount }
}

export default countStudents
