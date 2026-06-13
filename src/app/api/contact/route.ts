import { NextResponse } from "next/server";
import { Resend } from "resend";

type ContactRequestBody = {
  name?: string;
  email?: string;
  phone?: string;
  businessName?: string;
  message?: string;
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    const resendApiKey = process.env.RESEND_API_KEY;
    console.log("ENV KEY:", process.env.RESEND_API_KEY);

    if (!resendApiKey) {
      return NextResponse.json(
        { message: "Missing RESEND_API_KEY. Check your .env.local file." },
        { status: 500 }
      );
    }

    const resend = new Resend(resendApiKey);

    const body = (await request.json()) as ContactRequestBody;

    const name = body.name?.trim() || "";
    const email = body.email?.trim() || "";
    const phone = body.phone?.trim() || "Not provided";
    const businessName = body.businessName?.trim() || "Not provided";
    const message = body.message?.trim() || "";

    if (!name || !email || !message) {
      return NextResponse.json(
        { message: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { message: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const { error } = await resend.emails.send({
      from: "Bowen Websites <onboarding@resend.dev>",
      to: ["cameronbowen888@gmail.com"],
      replyTo: email,
      subject: `New Website Inquiry From ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111827;">
          <h2>New Website Inquiry</h2>

          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Business Name:</strong> ${businessName}</p>

          <hr style="margin: 24px 0; border: none; border-top: 1px solid #e5e7eb;" />

          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, "<br />")}</p>
        </div>
      `,
    });

    if (error) {
      return NextResponse.json(
        { message: "Email failed to send. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Message sent successfully." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact route error:", error);

    return NextResponse.json(
      { message: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}