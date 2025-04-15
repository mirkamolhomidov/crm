import GroupService from '../services/group.service.js'

class GroupController {
  constructor() {
    this.service = new GroupService()
  }
  async createGroupController(req, res, next) {
    try {
      const group = await this.service.createGroup(req.body)
      res.status(201).json({
        success: 'true',
        group,
      })
    } catch (error) {
      next(error)
    }
  }
  async getGroupsController(req, res, next) {
    try {
      const groups = await this.service.getGroups()
      res.status(200).json({
        success: 'true',
        count: groups.length,
        groups,
      })
    } catch (error) {
      next(error)
    }
  }
}

export default GroupController
