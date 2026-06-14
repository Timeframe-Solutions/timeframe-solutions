import { Resend } from "resend";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  if (!body.name || !body.businessName || !body.industry || !body.message) {
    throw createError({
      statusCode: 400,
      statusMessage: "Missing required fields",
    });
  }

  const config = useRuntimeConfig();
  const resend = new Resend(config.resendApiKey);

  const { error } = await resend.emails.send({
    from: "Timeframe Contact Form <onboarding@resend.dev>", // swap to your domain once verified
    to: config.contactEmail,
    subject: `New Project Brief from ${body.name} — ${body.businessName}`,
    html: `
      <h2>New Project Brief</h2>
      <table cellpadding="8" style="border-collapse:collapse; width:100%;">
        <tr><td><strong>Name</strong></td><td>${body.name}</td></tr>
        <tr><td><strong>Business</strong></td><td>${body.businessName}</td></tr>
        <tr><td><strong>Industry</strong></td><td>${body.industry}</td></tr>
      </table>
      <h3>Message</h3>
      <p style="white-space:pre-wrap;">${body.message}</p>
    `,
  });

  if (error) {
    console.error("Resend error:", error);
    throw createError({
      statusCode: 500,
      statusMessage: "Failed to send email",
    });
  }

  return { success: true };
});
