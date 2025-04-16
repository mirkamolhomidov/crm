import mongoose, { Schema } from 'mongoose'

const lessonsSchema = new Schema(
  {
    group_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Group',
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    lesson_date: {
      type: Date,
      required: true,
    },
    start_time: {
      type: String,
      required: true,
    },
    end_time: {
      type: String,
      required: true,
    },
    room_number: {
      type: String,
    },
  },
  { timestamps: true, versionKey: false }
)

export const LessonsModel = mongoose.model('Lesson', lessonsSchema)
