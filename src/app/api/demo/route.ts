import { NextRequest, NextResponse } from "next/server";

interface DemoPayload {
  name:       string;
  email:      string;
  phone:      string;
  school:     string;
  role:       string;
  schoolSize: string;
  message?:   string;
}

function validate(body: Partial<DemoPayload>): string | null {
  if (!body.name?.trim())                                         return "Full name is required.";
  if (!body.email?.trim() || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(body.email))
                                                                  return "A valid email is required.";
  if (!body.phone?.trim())                                        return "Phone number is required.";
  if (!body.school?.trim())                                       return "School name is required.";
  if (!body.role?.trim())                                         return "Your role is required.";
  if (!body.schoolSize?.trim())                                   return "School size is required.";
  return null;
}

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const body = (await req.json()) as Partial<DemoPayload>;
    const err  = validate(body);
    if (err) return NextResponse.json({ success: false, message: err }, { status: 400 });

    /**
     * ── INTEGRATION POINT ──────────────────────────────────────────
     * Uncomment the service you want to use:
     *
     * Resend:
     *   const { Resend } = await import("resend");
     *   const resend = new Resend(process.env.RESEND_API_KEY);
     *   await resend.emails.send({ from: "noreply@sckoolsuite.com",
     *     to: "team@sckoolsuite.com", subject: "New Demo Request",
     *     text: JSON.stringify(body, null, 2) });
     *
     * Webhook (Zapier / Make):
     *   await fetch(process.env.WEBHOOK_URL!, {
     *     method: "POST", body: JSON.stringify(body),
     *     headers: { "Content-Type": "application/json" } });
     * ───────────────────────────────────────────────────────────────
     */
    console.log("[Demo Submission]", body);

    return NextResponse.json({
      success: true,
      message: "Your demo request has been received. We will contact you within 24 hours.",
    });
  } catch {
    return NextResponse.json(
      { success: false, message: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
