# AR Builders — Ultra-Premium Construction Website

A Rolex/Cartier-inspired luxury website for AR Builders, a Chennai-based
construction company. Built by hand with React, TypeScript, Tailwind CSS
and Framer Motion — no site builder involved.

## Tech stack

- React 19 + TypeScript + Vite
- Tailwind CSS (custom palette: black `#0A0A0A`, gold `#C8A96E`, off-white `#F8F5F0`)
- Framer Motion for every animation (page loader, Ken Burns hero, scroll reveals, custom carousel, count-up stats)
- React Router (`/` and `/contact`)
- Resend for the contact form email delivery (via a Vercel serverless function)
- Fonts: Cormorant Garamond (headings) + DM Sans (body) — Google Fonts

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Build

```bash
npm run build
npm run preview
```

## Deploy to Vercel

1. Push this folder to a GitHub repo.
2. Import the repo in Vercel (vercel.com → Add New → Project).
3. Vercel auto-detects Vite. No build settings need changing.
4. Before deploying, go to **Project → Settings → Environment Variables**
   and add:
   - `RESEND_API_KEY` — your key from https://resend.com (free tier is fine)
5. Deploy. The contact form posts to `/api/send-enquiry`, a serverless
   function that sends a formatted email via Resend to
   `info@arbuilders.in` (change that address in `api/send-enquiry.ts`
   once you have a real inbox for the client, or connect a verified
   sending domain in Resend).

## Notes

- The contact form's Resend key lives server-side (`RESEND_API_KEY`),
  never in client-side code — this keeps it from being exposed in the
  browser, unlike a `VITE_`-prefixed variable would.
- Images are placeholder Unsplash architecture photography. Swap the
  URLs in `src/data/content.ts` for real AR Builders project photography
  once available — the layout (masonry grid, carousel, hero) is built to
  drop in any image at the same aspect ratios.
- The custom gold cursor only activates on desktop (`lg` breakpoint +
  hover-capable devices) — it's disabled on touch/mobile automatically.
- All copy (services, testimonials, process steps) is real content per
  the brief — no lorem ipsum — but names, phone numbers and the address
  are placeholders. Update them in `src/data/content.ts`,
  `src/components/Footer.tsx` and `src/pages/Contact.tsx`.
