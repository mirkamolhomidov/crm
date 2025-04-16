import { GroupsModel } from '../models/groups.model.js'
import CustomError from '../utils/customerror.js'

class GroupService {
  constructor() {
    this.group = GroupsModel
  }
  async createGroup(data) {
    try {
      const group = await this.group.create(data)
      await group.populate([
        { path: 'course_id', select: 'name' },
        {
          path: 'teacher_id',
          select: 'staff_id',
          populate: {
            path: 'staff_id',
            model: 'Staff',
            select: 'first_name last_name',
          },
        },
      ])
      return group
    } catch (error) {
      throw new CustomError(error.message, error.status)
    }
  }
  async getGroups() {
    try {
      const groups = await this.group.find().populate([
        { path: 'course_id', select: 'name' },
        {
          path: 'teacher_id',
          select: 'staff_id',
          populate: { path: 'staff_id', select: 'first_name last_name' },
        },
      ])
      return groups
    } catch (error) {
      throw new CustomError(error.message, error.status)
    }
  }
}

export default GroupService
