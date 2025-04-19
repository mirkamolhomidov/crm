import mongoose, { Schema } from 'mongoose'

const groupsSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    course_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Course',
      required: true,
    },
    teacher_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'TeacherInfo',
      required: true,
    },
    start_date: {
      type: Date,
      required: true,
    },
    schedule_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Schedule',
      required: true,
    },
    end_date: {
      type: Date,
    },
    max_students: {
      type: Number,
      default: 20,
    },
    status: {
      type: String,
      default: 'planned',
      enum: ['planned', 'active', 'completed'],
    },
  },
  { timestamps: true, versionKey: false }
)

export const GroupsModel = mongoose.model('Group', groupsSchema)
