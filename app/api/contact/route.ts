import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Get your email from environment variable
    const recipientEmail = process.env.CONTACT_EMAIL || 'your-email@example.com';
    
    // Using Resend to send email
    if (resend) {
      const { data, error: resendError } = await resend.emails.send({
        from: process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev',
        to: recipientEmail,
        subject: `New Contact Form Message from ${name}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
        `,
        replyTo: email,
      });

      if (resendError) {
        console.error('Resend error:', resendError);
        throw new Error(resendError.message || 'Failed to send email');
      }

      return NextResponse.json(
        { message: 'Email sent successfully!' },
        { status: 200 }
      );
    }

    // Fallback: Log the message if Resend is not configured
    console.log('Contact Form Submission (Resend not configured):', { name, email, message });
    
    return NextResponse.json(
      { 
        error: 'Email service not configured. Please set RESEND_API_KEY in your environment variables.',
        note: 'Message logged to console for development'
      },
      { status: 503 }
    );

  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again later.' },
      { status: 500 }
    );
  }
}
