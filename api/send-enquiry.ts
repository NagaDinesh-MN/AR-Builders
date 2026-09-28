import { Resend } from "resend";

// Vercel serverless function — runs on POST /api/send-enquiry
// Requires env var RESEND_API_KEY set in Vercel project settings.

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  try {
    const {
      name,
      phone,
      email,
      projectType,
      location,
      budget,
      message,
      source,
    } = req.body;

    if (!name || !phone || !email || !projectType || !location || !message) {
      res.status(400).json({ error: "Missing required fields" });
      return;
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const html = `
      <div style="font-family: 'DM Sans', Arial, sans-serif; max-width: 560px; margin: 0 auto; background: #F8F5F0; padding: 32px;">
        <div style="background:#0A0A0A; padding: 28px 32px;">
          <span style="font-family: Georgia, serif; color:#C8A96E; font-size: 26px;">AR</span>
          <span style="font-family: Arial, sans-serif; color:#888880; letter-spacing:3px; font-size: 11px; margin-left:8px;">BUILDERS</span>
        </div>
        <div style="background: #ffffff; padding: 32px; border: 1px solid #EDE8DF;">
          <h2 style="font-family: Georgia, serif; color:#0A0A0A; font-weight: 400; margin-top:0;">New Project Enquiry</h2>
          <table style="width:100%; border-collapse: collapse; font-size: 14px; color:#1A1A1A;">
            <tr><td style="padding:8px 0; color:#888880; width:160px;">Name</td><td style="padding:8px 0;">${name}</td></tr>
            <tr><td style="padding:8px 0; color:#888880;">Phone</td><td style="padding:8px 0;">${phone}</td></tr>
            <tr><td style="padding:8px 0; color:#888880;">Email</td><td style="padding:8px 0;">${email}</td></tr>
            <tr><td style="padding:8px 0; color:#888880;">Project Type</td><td style="padding:8px 0;">${projectType}</td></tr>
            <tr><td style="padding:8px 0; color:#888880;">Location</td><td style="padding:8px 0;">${location}</td></tr>
            <tr><td style="padding:8px 0; color:#888880;">Budget</td><td style="padding:8px 0;">${budget || "Not specified"}</td></tr>
            <tr><td style="padding:8px 0; color:#888880;">Heard via</td><td style="padding:8px 0;">${source || "Not specified"}</td></tr>
          </table>
          <div style="margin-top:20px; padding-top:16px; border-top: 1px solid #EDE8DF;">
            <p style="color:#888880; font-size:12px; text-transform:uppercase; letter-spacing:1px; margin:0 0 8px;">Message</p>
            <p style="color:#1A1A1A; font-size:14px; line-height:1.7; margin:0;">${message}</p>
          </div>
        </div>
      </div>
    `;

    await resend.emails.send({
      from: "AR Builders Website <onboarding@resend.dev>",
      to: ["info@arbuilders.in"],
      reply_to: email,
      subject: `New Enquiry: ${projectType} in ${location} — ${name}`,
      html,
    });

    res.status(200).json({ ok: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to send enquiry" });
  }
}
