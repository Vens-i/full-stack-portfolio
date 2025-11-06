import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

type RateLimitStore = Map<string, number>

declare global {
  // eslint-disable-next-line no-var
  var _contactRateLimiter: RateLimitStore | undefined
  // eslint-disable-next-line no-var
  var _contactTransporter: nodemailer.Transporter | undefined
}

const RATE_LIMIT_WINDOW_MS = 60_000

const rateLimiter: RateLimitStore =
  globalThis._contactRateLimiter ?? new Map<string, number>()
if (!globalThis._contactRateLimiter) globalThis._contactRateLimiter = rateLimiter

const smtpHost = process.env.SMTP_HOST ?? "smtp.gmail.com"
const smtpPort = Number(process.env.SMTP_PORT ?? 465)

const transporter =
  globalThis._contactTransporter ??
  nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpPort === 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })
if (!globalThis._contactTransporter) globalThis._contactTransporter = transporter

const sanitize = (value: unknown, { allowNewlines = false } = {}) => {
  if (typeof value !== "string") return ""
  const trimmed = value.trim()
  const pattern = allowNewlines ? /[<>]/g : /[<>\r\n]/g
  return trimmed.replace(pattern, "")
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(request: Request) {
  if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
    return NextResponse.json({ ok: false, error: "Email service not configured." }, { status: 500 })
  }

  let payload: {
    name?: unknown
    email?: unknown
    message?: unknown
    company?: unknown
    startedAt?: unknown
  }

  try {
    payload = await request.json()
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request body." }, { status: 400 })
  }

  // Honeypot
  const company = sanitize(payload.company)
  if (company) {
    return NextResponse.json({ ok: false, error: "Unable to process request." }, { status: 400 })
  }

  // Time on form
  const startedAt = Number(payload.startedAt)
  if (!Number.isFinite(startedAt) || Date.now() - startedAt < 3000) {
    return NextResponse.json({ ok: false, error: "Thanks for your note. Please try again." }, { status: 400 })
  }

  // Fields
  const name = sanitize(payload.name).slice(0, 120)
  const email = sanitize(payload.email)
  const message = sanitize(payload.message, { allowNewlines: true }).slice(0, 4000)

  if (!name || !email || !message) {
    return NextResponse.json({ ok: false, error: "Please complete every field before sending." }, { status: 400 })
  }
  if (!emailRegex.test(email)) {
    return NextResponse.json({ ok: false, error: "That email address does not look right." }, { status: 400 })
  }

  // Context
  const forwardedFor = request.headers.get("x-forwarded-for") ?? ""
  const ip = forwardedFor.split(",")[0]?.trim() || "unknown"
  const userAgent = request.headers.get("user-agent") || "unknown"
  const referer = request.headers.get("referer") || "unknown"
  const now = Date.now()

  // Simple rate limit
  for (const [storedIp, timestamp] of rateLimiter) {
    if (now - timestamp > RATE_LIMIT_WINDOW_MS) rateLimiter.delete(storedIp)
  }
  const lastAttempt = rateLimiter.get(ip)
  if (lastAttempt && now - lastAttempt < RATE_LIMIT_WINDOW_MS) {
    return NextResponse.json({ ok: false, error: "Thanks. Give it a moment before sending again." }, { status: 429 })
  }
  rateLimiter.set(ip, now)

  const toAddress = process.env.CONTACT_TO ?? process.env.SMTP_USER

  // Email parts
  const subject = `New message from ${name} • Contact form`
  const text = `You have a new message via the contact form.

Name: ${name}
Email: ${email}

Message:
${message}

IP Address: ${ip}
User Agent: ${userAgent}
Referer: ${referer}
Received: ${new Date(now).toISOString()}
`

  const brandBg = "#faf7f3"
  const bodyBg = "#ffffff"
  const textColor = "#2d1e12"
  const subText = "#7a6a5a"
  const accent = "#b67433"
  const border = "rgba(45,30,18,0.12)"

  const html = `<!doctype html>
<html>
  <head>
    <meta name="color-scheme" content="light" />
    <meta name="supported-color-schemes" content="light" />
    <meta charset="utf-8" />
    <title>${subject}</title>
    <style>
      body{margin:0;padding:0;background:${brandBg};font-family:system-ui,-apple-system,Segoe UI,Roboto,Inter,sans-serif;color:${textColor}}
      .wrap{max-width:640px;margin:0 auto;padding:32px}
      .card{background:${bodyBg};border:1px solid ${border};border-radius:16px;box-shadow:0 24px 48px -32px rgba(80,50,30,.18);padding:24px}
      h1{font-size:20px;margin:0 0 8px}
      p{margin:0 0 12px;line-height:1.55}
      .meta{color:${subText};font-size:13px}
      .badge{display:inline-block;background:${accent};color:#fff;border-radius:999px;font-weight:700;font-size:12px;padding:6px 10px;margin-bottom:12px}
      .field{margin:12px 0}
      .label{color:${subText};font-size:12px;text-transform:uppercase;letter-spacing:.08em}
      .value{margin-top:4px;white-space:pre-wrap}
      .footer{color:${subText};font-size:12px;margin-top:16px}
      a{color:${accent};text-decoration:none}
    </style>
  </head>
  <body>
    <div class="wrap">
      <div class="card">
        <span class="badge">Website Contact</span>
        <h1>New message from ${escapeHtml(name)}</h1>
        <p class="meta">Sent at ${new Date(now).toLocaleString()}</p>

        <div class="field">
          <div class="label">From</div>
          <div class="value">${escapeHtml(name)} &lt;${escapeHtml(email)}&gt;</div>
        </div>

        <div class="field">
          <div class="label">Message</div>
          <div class="value">${escapeHtml(message)}</div>
        </div>

        <hr style="border:none;border-top:1px solid ${border};margin:16px 0" />

        <div class="field">
          <div class="label">Context</div>
          <div class="value meta">
            IP: ${escapeHtml(ip)}<br/>
            User agent: ${escapeHtml(userAgent)}<br/>
            Referer: ${escapeHtml(referer)}
          </div>
        </div>

        <p class="footer">
          Reply directly to this email to reach the sender. This message was generated by your site contact form.
        </p>
      </div>
    </div>
  </body>
</html>`

  try {
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: toAddress,
      replyTo: `${name} <${email}>`,
      subject,
      text,
      html,
      headers: {
        "X-Contact-From": "portfolio-site",
        "X-Form-IP": ip,
      },
    })

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error("Contact form email failed:", error)
    return NextResponse.json(
      { ok: false, error: "Could not send the email right now. Please try again shortly." },
      { status: 500 },
    )
  }
}

export function GET() {
  return NextResponse.json({ ok: false, error: "Method not allowed." }, { status: 405, headers: { Allow: "POST" } })
}
export function PUT() {
  return NextResponse.json({ ok: false, error: "Method not allowed." }, { status: 405, headers: { Allow: "POST" } })
}
export function DELETE() {
  return NextResponse.json({ ok: false, error: "Method not allowed." }, { status: 405, headers: { Allow: "POST" } })
}

/** Safe HTML escape for the HTML email body */
function escapeHtml(input: string) {
  return input
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;")
}