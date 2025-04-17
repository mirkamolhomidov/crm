import PaymentService from '../services/payment.service.js'

class PaymentController {
  constructor() {
    this.service = new PaymentService()
  }
  async createPaymentController(req, res, next) {
    try {
      const { student_id, group_id, amount, payment_date, payment_method } =
        req.body
      const payment = await this.service.createPayment(
        { student_id, group_id },
        { amount, payment_date, payment_method }
      )
      res.status(201).json({
        success: 'true',
        payment,
      })
    } catch (error) {
      next(error)
    }
  }
}
export default PaymentController
