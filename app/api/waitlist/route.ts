import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { Resend } from 'resend';

// Init Supabase
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

// Init Resend
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { fullName, email, reason, honeypot } = await request.json();

    // Anti-bot honeypot check
    if (honeypot) {
      console.log('Bot detected, silently ignoring.');
      return NextResponse.json({ message: 'Ignored' }, { status: 200 });
    }

    // Basic validation
    if (!fullName || !email) {
      return NextResponse.json(
        { message: 'Full name and email are required.' },
        { status: 400 }
      );
    }

    // Save to Supabase
    const { error } = await supabase
      .from('waitlist_signups')
      .insert([{ full_name: fullName, email, reason_for_joining: reason }]);

    if (error) {
      console.error('Supabase error:', error);
      if (error.code === '23505') {
        return NextResponse.json(
          { message: 'This email is already on the waitlist.' },
          { status: 409 }
        );
      }
      throw new Error('Failed to save to database.');
    }

    // Send admin notification email
    const adminEmail = await resend.emails.send({
      from: 'Waitlist Notifier <onboarding@resend.dev>',
      to: ['josiah@weblitzstack.com'],
      subject: `🚨 New Waitlist Signup: ${fullName}`,
      html: `
        <h2>New Signup</h2>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Reason:</strong> ${reason || 'N/A'}</p>
      `,
    });

    // Send user confirmation email
    const userEmail = await resend.emails.send({
      from: 'Josiah from WeblitzStack <onboarding@resend.dev>',
      to: [email],
      subject: '🎉 Welcome to the Founding Cohort Waitlist!',
      html: `
        <h1>Welcome, ${fullName}!</h1>
        <p>You're officially on the waitlist for WeblitzStack Academy.</p>
        <p>We’ll be in touch soon with early updates and your next steps.</p>
        <p>Excited to build with you!</p>
        <p>— Josiah & The WeblitzStack Team</p>
      `,
    });

    return NextResponse.json({ message: 'Success!' }, { status: 201 });
  } catch (err: any) {
    console.error('API error:', err);
    return NextResponse.json(
      { message: err.message || 'Something went wrong.' },
      { status: 500 }
    );
  }
}
