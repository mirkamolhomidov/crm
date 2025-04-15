import 'dotenv/config'
import express from 'express'
import getConfig from './config/config.js'
import connectDB from './config/database.js'
import errorHandler from './middlewares/error.handler.js'
import Routes from './routes/routes.js'
import createSuperAdmin from './scripts/createsuperadmin.js'
import CustomError from './utils/customerror.js'

const app = express()
app.use(express.json())
Routes(app)
app.use(errorHandler)
const PORT = getConfig('PORT') || 8080

async function initTables() {
  try {
    await connectDB()
    await createSuperAdmin()
  } catch (error) {
    throw new CustomError(
      error.message || 'INTERNAL SERVER ERROR',
      error.status || 500
    )
  }
}
initTables()

app.listen(PORT, () =>
  console.log(`Server is running http://localhost:${PORT}`)
)
