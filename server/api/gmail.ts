import sendVerificationGmail from '../app/email/verifyGmail'

export default defineEventHandler(async (event) => {
  try {
    return await sendVerificationGmail('Gamayanjomar@gmail.com')
  } catch (error) {
    return sendError(event, createError(error as string))
  }
})