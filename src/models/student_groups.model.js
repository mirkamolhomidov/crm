import mongoose, { Schema } from 'mongoose'

const student_groupsSchema = new Schema(
  {
    student_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Student',
      required: true,
    },
    group_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Group',
      required: true,
    },
    join_date: {
      type: Date,
      default: Date.now,
    },
    status: {
      type: String,
      default: 'inactive',
      enum: ['active', 'inactive', 'completed'],
    },
  },
  { timestamps: true, versionKey: false }
)

student_groupsSchema.index({ student_id: 1, group_id: 1 }, { unique: true })
export const StudentGroup = mongoose.model('StudentGroup', student_groupsSchema)
