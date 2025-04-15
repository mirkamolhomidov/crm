import mongoose, { Schema } from 'mongoose'

const studentsSchema = new Schema(
  {
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
    },
    phone: {
      type: String,
    },
    address: {
      type: String,
    },
    birth_date: {
      type: String,
    },
    status: {
      type: String,
      default: 'active',
      enum: ['active', 'inactive', 'graduated'],
    },
    enrollment_date: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true, versionKey: false }
)

export const StudentsModel = mongoose.model('Student', studentsSchema)
