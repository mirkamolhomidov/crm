import mongoose, { Schema } from 'mongoose'

const attendance_detailsSchema = new Schema(
  {
    attendance_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Attendance',
      required: true,
    },
    student_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Student',
      required: true,
    },
    status: {
      type: String,
      default: 'absent',
      enum: ['present', 'absent', 'late'],
    },
    comment: {
      type: String,
    },
  },
  { versionKey: false }
)

attendance_detailsSchema.index(
  { attendance_id: 1, student_id: 1 },
  { unique: true }
)

export const AttendanceDetailsModel = mongoose.model(
  'AttendanceDetails',
  attendance_detailsSchema
)
