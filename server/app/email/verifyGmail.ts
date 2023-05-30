import verifyEmailTemplate from './templates/verifyEmailTemplate'
import { sendGmail } from './sendGmail'

export default async function sendVerificationGmail (email: string , username: string , useremail: string , usermessage: string) {
  const template = verifyEmailTemplate(username , useremail , usermessage)
  return await sendGmail({ template, to: email, from: 'Jomar.portfolio.emailer@gmail.com', subject: 'New message' })
}