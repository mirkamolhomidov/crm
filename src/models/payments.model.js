import mongoose, { Schema } from 'mongoose'

const paymentsSchema = new Schema(
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
		amount: {
			type: Number,
			required: true,
		},
		payment_date: {
			type: Date,
			default: Date.now,
		},
		payment_method: {
			type: String,
			default: 'cash',
			enum: ['cash', 'card', 'transfer'],
		},
		description: {
			type: String,
		},
		receipt_number: {
			type: String,
		},
		created_by: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Staff',
			required: true,
		},
	},
	{ timestamps: true, versionKey: false }
)

export const PaymentsModel = mongoose.model('Payments', paymentsSchema)
