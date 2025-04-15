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
			ref: 'Staff',
			required: true,
		},
		start_date: {
			type: Date,
			required: true,
		},
		end_date: {
			type: Date,
		},
		schedule: {
			type: String,
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
