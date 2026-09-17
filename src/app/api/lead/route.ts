import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const email = (body.email ?? "").toString().trim().toLowerCase();
    const source = (body.source ?? "homepage-hero").toString();
    const honeypot = (body.website ?? "").toString();

    if (honeypot.length > 0) {
      return NextResponse.json({ ok: true });
    }

    if (!EMAIL_REGEX.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address." },
        { status: 400 },
      );
    }

    await resend.emails.send({
      from: "AxiomForge Leads <onboarding@resend.dev>",
      to: ["dominickaris234@gmail.com"],
      replyTo: email,
      subject: `New lead: ${email}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #0A0D14; color: #F5F7FA; border-radius: 12px;">
          <div style="font-size: 12px; letter-spacing: 0.2em; text-transform: uppercase; color: #06B6D4; margin-bottom: 20px;">
            ◢ New Lead · AxiomForge
          </div>
          <h1 style="font-size: 24px; margin: 0 0 24px 0; color: #F5F7FA;">Someone wants to forge a system.</h1>

          <div style="background: #0F131C; border: 1px solid #1F2533; border-radius: 8px; padding: 20px; margin-bottom: 20px;">
            <div style="font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase; color: #4B5468; margin-bottom: 6px;">Institutional Email</div>
            <div style="font-size: 18px; color: #06B6D4; font-weight: 600; word-break: break-all;">${email}</div>
          </div>

          <div style="background: #0F131C; border: 1px solid #1F2533; border-radius: 8px; padding: 20px; margin-bottom: 20px;">
            <div style="font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase; color: #4B5468; margin-bottom: 6px;">Source</div>
            <div style="font-size: 14px; color: #8B94A7;">${source}</div>
          </div>

          <div style="font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase; color: #4B5468; margin-top: 24px; text-align: center;">
            Received ${new Date().toLocaleString("en-KE", { timeZone: "Africa/Nairobi" })} EAT
          </div>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Lead submission error:", error);
    return NextResponse.json(
      { error: "Could not process submission." },
      { status: 500 },
    );
  }
}