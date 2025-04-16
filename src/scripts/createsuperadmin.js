import bcrypt from 'bcrypt'
import 'dotenv/config'
import { StaffsModel } from '../models/staffs.model.js'

const createSuperAdmin = async () => {
  const checkSuperAdmin = await StaffsModel.findOne({ role: 'superadmin' })

  if (!checkSuperAdmin) {
    const password = process.env.SUPER_ADMIN_PASSWORD
    const hashedPassword = await bcrypt.hash(password, 10)
    await StaffsModel.create({
      first_name: process.env.SUPER_ADMIN_FIRST_NAME,
      last_name: process.env.SUPER_ADMIN_LAST_NAME,
      username: process.env.SUPER_ADMIN_USERNAME,
      password: hashedPassword,
      role: 'superadmin',
      position: 'Owner',
      phone: '998773020482',
      address: 'Ferghana',
    })

    console.log('Superadmin created successfully')
  } else {
    console.log('SuperAdmin already exists')
  }
}

export default createSuperAdmin
