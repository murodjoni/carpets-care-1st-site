import { Resend } from "resend"

import {
  orderSchema,
  COMMERCIAL_TYPE_LABELS,
  type OrderInput,
} from "../../src/lib/orderSchema"
import { siteConfig } from "../../src/config/site"

const RESEND_API_KEY = process.env.RESEND_API_KEY
const NOTIFY_EMAIL = process.env.NOTIFY_EMAIL ?? "carpetscarellc@gmail.com"
const FROM_EMAIL = process.env.FROM_EMAIL ?? "onboarding@resend.dev"
const FROM = `${siteConfig.name} <${FROM_EMAIL}>`

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  })
}

function esc(value: string | undefined): string {
  if (!value) return ""
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
}

function serviceSummary(data: OrderInput): string {
  if (data.serviceType === "commercial") {
    const label = data.commercialType
      ? COMMERCIAL_TYPE_LABELS[data.commercialType]
      : "Commercial"
    return `Commercial · ${label}`
  }
  const size = data.residentialArea ? ` · ${esc(data.residentialArea)}` : ""
  return `Residential${size}`
}

function ownerEmailHtml(data: OrderInput): string {
  const row = (label: string, value: string) =>
    value
      ? `<tr><td style="padding:6px 12px;color:#64748b;font-size:13px;vertical-align:top;white-space:nowrap">${label}</td><td style="padding:6px 12px;color:#0f172a;font-size:14px;font-weight:500">${value}</td></tr>`
      : ""

  return `
  <div style="font-family:system-ui,-apple-system,Segoe UI,sans-serif;max-width:600px;margin:0 auto">
    <div style="background:#0e7490;color:#fff;padding:20px 24px;border-radius:12px 12px 0 0">
      <h1 style="margin:0;font-size:18px">New Service Request</h1>
      <p style="margin:4px 0 0;opacity:.85;font-size:13px">${serviceSummary(data)}</p>
    </div>
    <div style="border:1px solid #e2e8f0;border-top:none;border-radius:0 0 12px 12px;padding:8px 12px">
      <table style="width:100%;border-collapse:collapse">
        ${row("Name", esc(data.name))}
        ${row("Phone", esc(data.phone))}
        ${row("Email", esc(data.email))}
        ${row("Address / City", esc(data.address))}
        ${row("Service", serviceSummary(data))}
        ${row("Preferred", esc(data.preferredDate))}
        ${row("Details", esc(data.details).replace(/\n/g, "<br>"))}
      </table>
    </div>
    <p style="color:#94a3b8;font-size:12px;text-align:center;margin-top:16px">
      Reply directly to this email to reach ${esc(data.name)}.
    </p>
  </div>`
}

function customerEmailHtml(data: OrderInput): string {
  return `
  <div style="font-family:system-ui,-apple-system,Segoe UI,sans-serif;max-width:600px;margin:0 auto">
    <div style="background:#0e7490;color:#fff;padding:24px;border-radius:12px 12px 0 0">
      <h1 style="margin:0;font-size:20px">Thanks, ${esc(data.name)}! 🧼</h1>
    </div>
    <div style="border:1px solid #e2e8f0;border-top:none;border-radius:0 0 12px 12px;padding:24px;color:#0f172a">
      <p style="margin:0 0 12px">
        We've received your carpet cleaning request and a member of our team will
        reach out shortly to confirm the details and schedule your service.
      </p>
      <p style="margin:0 0 12px"><strong>Your request:</strong> ${serviceSummary(data)}</p>
      <p style="margin:0 0 12px">
        Need to reach us sooner? Call
        <a href="${siteConfig.phoneHref}" style="color:#0e7490">${siteConfig.phone}</a>.
      </p>
      <p style="margin:16px 0 0;color:#64748b;font-size:13px">
        — The ${siteConfig.name} Team
      </p>
    </div>
  </div>`
}

export default async (req: Request) => {
  if (req.method !== "POST") {
    return json({ error: "Method not allowed" }, 405)
  }

  let payload: unknown
  try {
    payload = await req.json()
  } catch {
    return json({ error: "Invalid request body" }, 400)
  }

  const parsed = orderSchema.safeParse(payload)
  if (!parsed.success) {
    const firstIssue = parsed.error.issues[0]
    return json({ error: firstIssue?.message ?? "Invalid form data" }, 400)
  }

  const data = parsed.data

  // Honeypot: silently accept bot submissions without sending anything.
  if (data.website && data.website.length > 0) {
    return json({ ok: true })
  }

  if (!RESEND_API_KEY) {
    console.error("RESEND_API_KEY is not configured")
    return json({ error: "Email service is not configured" }, 500)
  }

  const resend = new Resend(RESEND_API_KEY)

  // Owner notification is the critical email.
  try {
    const { error } = await resend.emails.send({
      from: FROM,
      to: NOTIFY_EMAIL,
      replyTo: data.email,
      subject: `New service request — ${data.name} (${serviceSummary(data)})`,
      html: ownerEmailHtml(data),
    })
    if (error) throw new Error(error.message)
  } catch (err) {
    console.error("Failed to send owner notification:", err)
    return json({ error: "Could not send your request. Please call us." }, 502)
  }

  // Customer auto-reply is best-effort — don't fail the request if it bounces.
  try {
    await resend.emails.send({
      from: FROM,
      to: data.email,
      subject: `We received your request — ${siteConfig.name}`,
      html: customerEmailHtml(data),
    })
  } catch (err) {
    console.error("Failed to send customer auto-reply:", err)
  }

  return json({ ok: true })
}
