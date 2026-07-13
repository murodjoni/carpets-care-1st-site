# Carpets Care — Carpet Cleaning Website

Marketing site for a carpet cleaning company. Visitors submit a service request
from the homepage; the owner is emailed the order and the customer gets an
auto-reply.

**Stack:** React 19 + Vite · React Router · Tailwind CSS v4 · shadcn/ui ·
static site generation via [`vite-react-ssg`](https://github.com/Daydreamer-riri/vite-react-ssg)
(pre-rendered HTML per route for SEO) · Netlify Functions + [Resend](https://resend.com) for email.

## Local development

```bash
npm install
npm run dev          # Vite dev server (UI only — the form's function isn't served)
```

To test the **form + email end-to-end**, run the Netlify dev server so the
serverless function is available at `/.netlify/functions/submit-order`:

```bash
cp .env.example .env      # then fill in your Resend API key
npx netlify dev           # serves the app + functions together
```

## Environment variables

Set these locally in `.env` and in the Netlify UI (Site settings → Environment):

| Variable | Purpose | Default |
|----------|---------|---------|
| `RESEND_API_KEY` | Resend API key (required to send email) | — |
| `NOTIFY_EMAIL` | Where new service requests are emailed | `carpetscarellc@gmail.com` |
| `FROM_EMAIL` | Sender address | `onboarding@resend.dev` |

> **Resend note:** `onboarding@resend.dev` works out of the box but, in test
> mode, Resend only delivers to the email that owns the Resend account. To send
> to any address (and to send from your own brand), verify a domain in Resend
> and set `FROM_EMAIL` to e.g. `quotes@yourdomain.com`.

## Build

```bash
npm run build        # type-checks, then generates static HTML into dist/
npm run preview      # preview the production build
```

## Deploy (Netlify, free tier)

1. Push this repo to GitHub.
2. In Netlify: **Add new site → Import from Git**, pick the repo.
3. Build settings are read from `netlify.toml` (build `npm run build`, publish
   `dist`, functions in `netlify/functions`) — no manual config needed.
4. Add the environment variables above under Site settings → Environment.
5. Deploy, then submit the form on the live URL to confirm both emails arrive.

## Editing content

- **Company name, phone, email, hours, service area, socials:**
  [`src/config/site.ts`](src/config/site.ts) — the single swap point.
- **Services list:** [`src/config/services.ts`](src/config/services.ts).
- **Form fields / validation:** [`src/lib/orderSchema.ts`](src/lib/orderSchema.ts)
  (shared by the form and the serverless function).
- **Brand colors:** the theme tokens in [`src/index.css`](src/index.css).
