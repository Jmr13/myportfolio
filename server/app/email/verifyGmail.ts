import verifyEmailTemplate from './templates/verifyEmailTemplate'
import { sendGmail } from './sendGmail'

export default async function sendVerificationGmail (email: string) {
  const template = verifyEmailTemplate('example-otp', 'nuxt-mailer', 'Nuxt Mailer Support', 'Nuxt Mailer')
  return await sendGmail({ template, to: email, from: 'Jomar.portfolio.emailer@gmail.com', subject: 'Nuxt Mailer email verification' })
}