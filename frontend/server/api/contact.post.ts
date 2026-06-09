export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  // Basic validation
  if (!body.name || !body.businessName || !body.industry || !body.message) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Missing required fields',
    })
  }

  // In a real app, you would send an email here using nodemailer or a service like Resend/Brevo
  console.log('New Contact Form Submission:', body)

  return { success: true }
})
