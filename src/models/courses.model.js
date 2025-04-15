import mongoose, { Schema } from 'mongoose'

const coursesSchema = new Schema(
	{
		name: {
			type: String,
			required: true,
		},
		description: {
			type: String,
		},
		price: {
			type: Number,
			required: true,
		},
		duration: {
			type: Number,
			required: true,
		},
		level: {
			type: String,
			default: 'beginner',
			enum: ['beginner', 'intermediate', 'advanced'],
		},
		is_active: {
			type: Boolean,
			default: true,
		},
	},
	{ timestamps: true, versionKey: false }
)

export const CoursesModel = mongoose.model('Course', coursesSchema)
