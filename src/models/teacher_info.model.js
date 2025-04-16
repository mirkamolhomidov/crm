import mongoose, { Schema } from 'mongoose'

const teacher_infoSchema = new Schema(
  {
    staff_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Staff',
      required: true,
    },
    specialization: {
      type: String,
      required: true,
    },
    education: {
      type: String,
      required: true,
    },
    experience: {
      type: Number,
      required: true,
    },
  },
  { versionKey: false }
)

export const TeacherInfoModel = mongoose.model(
  'TeacherInfo',
  teacher_infoSchema
)
