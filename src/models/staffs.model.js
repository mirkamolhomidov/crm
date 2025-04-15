import mongoose, { Schema } from 'mongoose'

const staffsSchema = new Schema(
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
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
      default: 'teacher',
      enum: ['superadmin', 'admin', 'teacher'],
    },
    position: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
    },
    address: {
      type: String,
    },
    hire_date: {
      type: String,
      default: () => new Date().toISOString().split('T')[0],
    },
    status: {
      type: String,
      default: 'active',
      enum: ['active', 'inactive'],
    },
  },
  { timestamps: true, versionKey: false }
)

export const StaffsModel = mongoose.model('Staff', staffsSchema)
