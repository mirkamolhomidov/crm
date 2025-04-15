import mongoose, { Schema } from 'mongoose'

const attendanceSchema = new Schema(
	{
		lesson_id: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Lesson',
			required: true,
		},
		created_by: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Staff',
			required: true,
		},
	},
	{ timestamps: true, versionKey: false }
)

export const AttendanceModel = mongoose.model('Attendance', attendanceSchema)
