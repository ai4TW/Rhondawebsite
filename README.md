# Rhonda Website — Avera Lending LLC

A high-conversion marketing site for [Avera Lending LLC](http://www.avera-lending.com), a private
money lender serving real estate investors nationwide. CEO: Rhonda Avera.

## Stack

- Next.js 15 (App Router)
- React 19
- Tailwind CSS 3
- TypeScript
- Deployed on Vercel

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Structure

- `app/` — App Router pages, layout, globals, `/api/contact` route
- `components/` — Nav, Hero, Why, Services, Process, Referrals, FAQ, Contact, Footer

## Content source

Content was distilled from the existing Avera Lending website:
- Up to 100% funding for fix & flips
- Services: Private Money, JV, Fix & Flip, Bridge, Rental, Commercial, Construction, Jumbo,
  POF letters, Collateral DNA Reports, Debt Stack Reports, off-market Lead Lists
- 4-step process: prospect → offer → under contract → fund
- Referral program: minimum $500 bonus at close
- Contact: 912.927.1200 · rhonda@avera-lending.com

## TODO

- Wire `/api/contact` to a real email service (Resend, SendGrid) or CRM
- Add real headshot/photo of Rhonda and property imagery
- Add testimonials / case studies once available
- Real Terms & Privacy pages
- Google Analytics / Meta Pixel for conversion tracking
