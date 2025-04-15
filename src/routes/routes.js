import authRouter from './auth.router.js'
import staffRouter from './staff.router.js'
import studentRouter from './student.router.js'

const Routes = app => [
  app.use('/api/staff', staffRouter),
  app.use('/api/auth', authRouter),
  app.use('/api/student', studentRouter),
]

export default Routes
