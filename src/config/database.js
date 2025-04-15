import mongoose from 'mongoose'
import getConfig from './config.js'

const connectDB = async () => {
	try {
		const url = getConfig('DB_URL')
		await mongoose.connect(url)
		console.log('Database connected')
	} catch (error) {
		console.error(error.message)
		process.exit(1)
	}
}

export default connectDB
