import sendVerificationGmail from '../app/email/verifyGmail'

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    return await sendVerificationGmail('Gamayanjomar@gmail.com' , body.name , body.email , body.message)
  } catch (error) {
    return sendError(event, createError(error as string))
  }
})