import StaffService from '../services/staffs.service.js'

class StaffController {
  constructor() {
    this.service = new StaffService()
  }
  async createStaffController(req, res, next) {
    try {
      const staff = await this.service.createStaff(req.body)
      res.status(201).json({
        success: 'true',
        staff,
      })
    } catch (error) {
      next(error)
    }
  }
  async getStaffsController(req, res, next) {
    try {
      const staffs = await this.service.getStaffs()
      res.status(201).json({
        success: 'true',
        count: staffs.length,
        staffs,
      })
    } catch (error) {
      next(error)
    }
  }
}

export default StaffController
