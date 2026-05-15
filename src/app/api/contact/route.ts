import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const { name, email, company, industry, budget, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    // Log the form submission (in production, integrate with email service like Resend, SendGrid, or Nodemailer)
    console.log("=== NEW CONTACT FORM SUBMISSION ===");
    console.log({
      name,
      email,
      company: company || "Not provided",
      industry: industry || "Not provided",
      budget: budget || "Not provided",
      message,
      timestamp: new Date().toISOString(),
    });
    console.log("===================================");

    // In production, you would send this data to:
    // - Resend (email): https://resend.com
    // - SendGrid: https://sendgrid.com
    // - Nodemailer: for SMTP
    // - Database: save to lead management system
    // - CRM: integrate with HubSpot, Salesforce, etc.

    return NextResponse.json(
      {
        success: true,
        message: "Thank you for your message! We'll get back to you within 24 hours."
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { message: "Contact API is running. Use POST to submit form." },
    { status: 200 }
  );
}