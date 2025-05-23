import { GroupsModel } from '../models/groups.model.js'
import { ScheduleModel } from '../models/schedule.model.js'
import { StudentGroup } from '../models/student_groups.model.js'
import CustomError from '../utils/customerror.js'

class GroupService {
  constructor() {
    this.group = GroupsModel
    this.studentGroup = StudentGroup
    this.schedule = ScheduleModel
  }
  async createGroupSchedule(data) {
    try {
      const schedule = await this.schedule.create(data)
      return schedule
    } catch (error) {
      throw new CustomError(error.message, error.status)
    }
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
        { path: 'schedule_id', select: 'day start_time end_time room_number' },
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
        { path: 'schedule_id', select: 'day start_time end_time room_number' },
      ])
      return groups
    } catch (error) {
      throw new CustomError(error.message, error.status)
    }
  }
  async updateStatus({ group_id, status }) {
    const group = await this.group.findOne({ _id: group_id })
    if (!group) throw new CustomError('Invalid group id', 401)
    const studentGroup = await this.studentGroup.findOne({ group_id })
    group.status = status
    await group.save()
    if (studentGroup) {
      studentGroup.status = status
      await studentGroup.save()
    }
    return group
  }
}

export default GroupService
