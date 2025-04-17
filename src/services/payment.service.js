import { GroupsModel } from '../models/groups.model.js'
import { PaymentsModel } from '../models/payments.model.js'
import { StudentGroup } from '../models/student_groups.model.js'
import { StudentsModel } from '../models/students.model.js'
import CustomError from '../utils/customerror.js'

class PaymentService {
  constructor() {
    this.studentgroup = StudentGroup
    this.payment = PaymentsModel
    this.student = StudentsModel
    this.group = GroupsModel
  }
  async createPayment(studentgroup, payment) {
    const checkStudent = await this.student.findOne({
      _id: studentgroup.student_id,
    })
    if (!checkStudent) throw new CustomError('Invalid student id', 400)
    const checkGroup = await this.group.findOne({ _id: studentgroup.group_id })
    if (!checkGroup) throw new CustomError('Invalid group id', 400)
    const checkStudentGroup = await this.studentgroup.findOne({
      student_id: studentgroup.student_id,
      group_id: studentgroup.group_id,
    })
    if (checkStudentGroup)
      throw new CustomError('StudentGroup already exists', 400)
    await this.studentgroup.create(studentgroup)
    const data = {
      ...payment,
      student_id: studentgroup.student_id,
      group_id: studentgroup.group_id,
    }
    const payment_data = await this.payment.create(data)
    await payment_data.populate('student_id', 'first_name last_name')
    await payment_data.populate('group_id', 'name')
    return { ...payment_data.toObject() }
  }
}

export default PaymentService
