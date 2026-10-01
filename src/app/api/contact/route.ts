import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body;

    // Server-side validation
    if (!name || typeof name !== "string" || name.trim() === "") {
      return NextResponse.json(
        { error: "Please provide your name." },
        { status: 400 }
      );
    }

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (!subject || typeof subject !== "string" || subject.trim() === "") {
      return NextResponse.json(
        { error: "Please provide a subject." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || message.trim() === "") {
      return NextResponse.json(
        { error: "Please provide your project details or message." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("Missing RESEND_API_KEY in environment variables");
      return NextResponse.json(
        {
          error:
            "RESEND_API_KEY is not configured on the server. Please add your Resend API key to .env.local",
        },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);
    const recipientEmail = process.env.CONTACT_RECEIVER_EMAIL || "usamatahir717@gmail.com";

    const emailResponse = await resend.emails.send({
      from: "Portfolio Contact <contact@devbite.dev>",
      to: [recipientEmail],
      replyTo: email.trim(),
      subject: `[Inquiry] ${subject.trim()} — ${name.trim()}`,
      text: `
New message received from your portfolio contact form:

Name: ${name.trim()}
Email: ${email.trim()}
Subject: ${subject.trim()}

Message:
${message.trim()}

--------------------------------------------------
Sent via https://portfolio.devbite.dev contact form
      `.trim(),
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background-color: #0f172a; border-radius: 12px; color: #f8fafc; border: 1px solid #1e293b;">
          <div style="border-bottom: 1px solid #334155; padding-bottom: 16px; margin-bottom: 20px;">
            <h2 style="color: #6366f1; margin: 0 0 6px 0; font-size: 20px;">New Portfolio Inquiry</h2>
            <p style="color: #94a3b8; margin: 0; font-size: 13px;">Received via portfolio.devbite.dev</p>
          </div>
          
          <div style="margin-bottom: 16px;">
            <p style="margin: 0 0 6px 0; font-size: 12px; color: #94a3b8; text-transform: uppercase; font-weight: 600;">Sender</p>
            <p style="margin: 0; font-size: 15px; color: #ffffff; font-weight: 600;">${name.trim()} &lt;<a href="mailto:${email.trim()}" style="color: #38bdf8; text-decoration: none;">${email.trim()}</a>&gt;</p>
          </div>

          <div style="margin-bottom: 16px;">
            <p style="margin: 0 0 6px 0; font-size: 12px; color: #94a3b8; text-transform: uppercase; font-weight: 600;">Subject</p>
            <p style="margin: 0; font-size: 15px; color: #ffffff;">${subject.trim()}</p>
          </div>

          <div style="margin-bottom: 24px; padding: 16px; background-color: #1e293b; border-radius: 8px; border: 1px solid #334155;">
            <p style="margin: 0 0 8px 0; font-size: 12px; color: #94a3b8; text-transform: uppercase; font-weight: 600;">Message Content</p>
            <p style="margin: 0; font-size: 14px; line-height: 1.6; color: #e2e8f0; white-space: pre-wrap;">${message.trim()}</p>
          </div>

          <div style="border-top: 1px solid #334155; padding-top: 16px; text-align: center;">
            <a href="mailto:${email.trim()}?subject=Re: ${encodeURIComponent(subject.trim())}" style="display: inline-block; padding: 10px 20px; background-color: #4f46e5; color: #ffffff; text-decoration: none; border-radius: 6px; font-size: 13px; font-weight: 600;">Reply to ${name.trim()}</a>
          </div>
        </div>
      `,
    });

    if (emailResponse.error) {
      console.error("Resend API error:", emailResponse.error);
      return NextResponse.json(
        { error: emailResponse.error.message || "Failed to deliver email through Resend." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, id: emailResponse.data?.id },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred while transmitting your message." },
      { status: 500 }
    );
  }
}
