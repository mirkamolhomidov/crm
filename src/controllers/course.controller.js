import CourseService from '../services/course.service.js'

class CourseController {
  constructor() {
    this.service = new CourseService()
  }
  async createCourseController(req, res, next) {
    try {
      const course = await this.service.createCourse(req.body)
      res.status(201).json({
        success: 'true',
        course,
      })
    } catch (error) {
      next(error)
    }
  }
  async getCoursesController(req, res, next) {
    try {
      const courses = await this.service.getCourses()
      res.status(200).json({
        success: 'true',
        count: courses.length,
        courses,
      })
    } catch (error) {
      next(error)
    }
  }
}

export default CourseController
