import { Router } from 'express'
import PaymentController from '../controllers/payment.controller.js'
import auth from '../middlewares/auth.middleware.js'
import authorize from '../middlewares/role.middleware.js'

const controller = new PaymentController()
const paymentRouter = Router()

paymentRouter.post(
  '/',
  auth,
  authorize('admin'),
  controller.createPaymentController.bind(controller)
)

export default paymentRouter
