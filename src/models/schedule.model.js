import mongoose, { Schema } from 'mongoose'

const scheduleSchema = new Schema(
  {
    day: {
      type: [String],
      default: 'Monday',
      enum: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
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
      type: Number,
    },
  },
  { timestamps: true, versionKey: false }
)

scheduleSchema.index({ group_id: 1, day: 1, start_time: 1 }, { unique: true })
export const ScheduleModel = mongoose.model('Schedule', scheduleSchema)
