# Kervens Auguste · Personal Website

A calm, human-focused personal site for Kervens Auguste, built with the Next.js App Router and a bespoke earth-tone design system. The experience leans on strong typography, generous white space, and subtle motion to introduce Kervens’ story, values, and contact paths.

![Preview](public/preview.png)

## ✨ Highlights

- Minimal, “digital handshake” layout with warm earth-tone palette
- Semantic App Router pages for Home, About (with integrated experience timeline), Values, and Contact
- Reusable site shell with animated route transitions and responsive navigation
- Client-side contact form with validation, loading states, and spam protection (honeypot, time-on-page, rate limit)
- Server-side mailer using Nodemailer + Gmail SMTP via app password

## 🧱 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: CSS Modules + custom global theme
- **Font**: Inter via `next/font`
- **Motion**: Framer Motion
- **Email**: Nodemailer with Gmail SMTP (free tier)

## 🚀 Getting Started

```bash
git clone https://github.com/vens-i/full-stack-portfolio.git
cd full-stack-portfolio
npm install
```

### Environment

Create `.env.local` at the project root:

```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_USER=ksauguste@gmail.com
SMTP_PASS=<gmail app password>
CONTACT_TO=ksauguste@gmail.com
```

> Generate an App Password inside your Google account (Security → App passwords) and paste it into `SMTP_PASS`. Never use your regular Gmail password.

### Develop

```bash
npm run dev
```

Visit <http://localhost:3000>.

## 📂 Key Structure

```
app/
  api/contact/route.ts   # Email endpoint with validation & rate limiting
  about/                 # About page + embedded experience timeline
  experience/            # Standalone experience view using shared data
  values/                # Manifesto-style values page
  contact/               # Contact screen housing the form
components/
  SiteLayout.tsx         # Shell, navigation, transitions
  Experience.tsx         # Reusable experience timeline
  ContactForm.tsx        # Client-side form logic
```

## 🔒 Spam & Delivery Safeguards

- Honeypot `company` field to deter bots
- Hidden `startedAt` timestamp; submissions require >3 seconds on page
- Per-IP 60s rate limiter in API route (in-memory)
- Input sanitation and length limits before emailing
- Credentials only read server-side via environment variables

## 🧩 Customization Notes

- Update copy inside page components (`app/*/page.tsx`)
- Adjust colors, radii, and shadows in `app/globals.css`
- Extend navigation or page transitions via `components/SiteLayout.tsx`
- Swap placeholder portrait on the About page for a real image

## 📜 License

MIT © Kervens Auguste
