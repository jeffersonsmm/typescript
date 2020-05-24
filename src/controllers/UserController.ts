import { Request, Response } from 'express'
import EmailService from '../services/EmailService'

const users = [
  { name: 'jeff', email: 'jeff@gmail.com' }
]

export default {
  async index(req: Request, res: Response) {
    return res.json(users)
  },
  async create(req: Request, res: Response) {
    const emailService = new EmailService()
    emailService.sendMail(
      {
        to: {
          name: 'jeff',
          email: 'jeff@gmail.com'
        },
        message: {
          subject: 'bl',
          body: 'kkk'
        }
      }
    )
    return res.send()
  }
}