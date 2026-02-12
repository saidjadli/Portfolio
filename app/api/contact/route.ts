import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

// Initialize Resend with API key from environment
const resend = new Resend(process.env.RESEND_API_KEY);

// Basic email validation regex
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Maximum message length to prevent abuse
const MAX_MESSAGE_LENGTH = 2000;

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const name = body.name?.trim();
        const email = body.email?.trim();
        const message = body.message?.trim();
        const website = body.website;

        // Honeypot check - if 'website' field is filled, it's likely a bot
        if (website) {
            console.log("Honeypot triggered, ignoring request.");
            // Silently return success without sending email
            return NextResponse.json({ success: true }, { status: 200 });
        }

        // Validate required fields
        if (!name || !email || !message) {
            console.log("Validation failure: Missing fields", { name: !!name, email: !!email, message: !!message });
            return NextResponse.json(
                { success: false, error: "All fields are required." },
                { status: 400 }
            );
        }

        // Validate email format
        if (!EMAIL_REGEX.test(email)) {
            return NextResponse.json(
                { success: false, error: "Invalid email address." },
                { status: 400 }
            );
        }

        // Validate message length
        if (message.length > MAX_MESSAGE_LENGTH) {
            return NextResponse.json(
                { success: false, error: `Message is too long. Maximum ${MAX_MESSAGE_LENGTH} characters.` },
                { status: 400 }
            );
        }

        // Validate environment variables
        if (!process.env.RESEND_API_KEY) {
            console.error("RESEND_API_KEY is not configured");
            return NextResponse.json(
                { success: false, error: "Email service is not configured." },
                { status: 500 }
            );
        }

        if (!process.env.CONTACT_TO_EMAIL || !process.env.CONTACT_FROM_EMAIL) {
            console.error("CONTACT_TO_EMAIL or CONTACT_FROM_EMAIL is not configured");
            return NextResponse.json(
                { success: false, error: "Email service is not configured." },
                { status: 500 }
            );
        }

        // Send email using Resend
        const { data, error } = await resend.emails.send({
            from: process.env.CONTACT_FROM_EMAIL,
            to: process.env.CONTACT_TO_EMAIL,
            replyTo: email,
            subject: `Portfolio Contact — ${name}`,
            html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #22C55E; border-bottom: 2px solid #22C55E; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="margin: 20px 0;">
            <p style="margin: 5px 0;"><strong>From:</strong> ${name}</p>
            <p style="margin: 5px 0;"><strong>Email:</strong> ${email}</p>
          </div>
          
          <div style="background: #f5f5f5; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <p style="margin: 0;"><strong>Message:</strong></p>
            <p style="margin: 10px 0 0 0; white-space: pre-wrap;">${message}</p>
          </div>
          
          <p style="color: #666; font-size: 12px; margin-top: 30px;">
            This email was sent from your portfolio contact form.
          </p>
        </div>
      `,
        });

        if (error) {
            console.error("Resend API error:", error);
            return NextResponse.json(
                { success: false, error: "Failed to send email. Please try again later." },
                { status: 500 }
            );
        }

        return NextResponse.json({ success: true }, { status: 200 });
    } catch (error) {
        console.error("Contact form error:", error);
        return NextResponse.json(
            { success: false, error: "An unexpected error occurred. Please try again later." },
            { status: 500 }
        );
    }
}
