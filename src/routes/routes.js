import authRouter from './auth.router.js'
import courseRouter from './course.router.js'
import groupRouter from './group.router.js'
import lessonRouter from './lesson.router.js'
import paymentRouter from './payment.router.js'
import staffRouter from './staff.router.js'
import studentRouter from './student.router.js'
import teacherRouter from './teacher.router.js'

const Routes = app => [
  app.use('/api/staff', staffRouter),
  app.use('/api/auth', authRouter),
  app.use('/api/student', studentRouter),
  app.use('/api/teacher', teacherRouter),
  app.use('/api/course', courseRouter),
  app.use('/api/group', groupRouter),
  app.use('/api/lesson', lessonRouter),
  app.use('/api/payment', paymentRouter),
]

export default Routes
