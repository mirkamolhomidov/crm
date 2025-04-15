import { CoursesModel } from '../models/courses.model.js'
import CustomError from '../utils/customerror.js'

class CourseService {
  constructor() {
    this.course = CoursesModel
  }
  async createCourse(data) {
    try {
      const course = await this.course.create(data)
      return course
    } catch (error) {
      throw new CustomError(error.message, error.status)
    }
  }
  async getCourses() {
    try {
      const courses = await this.course.find()
      return courses
    } catch (error) {
      throw new CustomError(error.message, error.status)
    }
  }
}

export default CourseService
