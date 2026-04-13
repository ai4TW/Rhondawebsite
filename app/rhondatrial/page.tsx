import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Rhonda Avera — Avera Lending LLC",
  description: "Owner / Broker / Investor at Avera Lending LLC. Private money for real estate investors.",
};

const vcard = `BEGIN:VCARD
VERSION:3.0
N:Avera;Rhonda;;;
FN:Rhonda Avera
ORG:Avera Lending LLC
TITLE:Owner / Broker / Investor
TEL;TYPE=WORK,VOICE:+17703000020
TEL;TYPE=WORK,VOICE:+19129271200
EMAIL;TYPE=WORK:rhondaavera.lending@gmail.com
URL:https://avera-lending.com
END:VCARD`;

const vcardHref = `data:text/vcard;charset=utf-8,${encodeURIComponent(vcard)}`;

const links = [
  {
    label: "Visit our website",
    sub: "avera-lending.com",
    href: "https://avera-lending.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3a15 15 0 010 18M12 3a15 15 0 000 18" />
      </svg>
    ),
  },
  {
    label: "Pay via Venmo",
    sub: "@rhonda-avera",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.5 4c.8 1.2 1.2 2.5 1.2 4.1 0 5.1-4.4 11.8-8 15.9h-7L3 6.6l6.3-.6 1.5 11.8c1.4-2.3 3.1-5.9 3.1-8.3 0-1.3-.2-2.2-.6-3L19.5 4z" />
      </svg>
    ),
  },
  {
    label: "Follow me on Instagram",
    sub: "@averalending",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "rhondaavera.lending@gmail.com",
    sub: "Email",
    href: "mailto:rhondaavera.lending@gmail.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 7l9 6 9-6" />
      </svg>
    ),
  },
  {
    label: "+1 (770) 300-0020",
    sub: "Work",
    href: "tel:+17703000020",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
        <path d="M3 5a2 2 0 012-2h2.3a1 1 0 01.95.68l1.5 4.5a1 1 0 01-.5 1.21l-1.7.85a11 11 0 005.52 5.52l.85-1.7a1 1 0 011.21-.5l4.5 1.5a1 1 0 01.68.95V19a2 2 0 01-2 2h-1C9.72 21 3 14.28 3 6V5z" />
      </svg>
    ),
  },
  {
    label: "+1 (912) 927-1200",
    sub: "Work",
    href: "tel:+19129271200",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
        <path d="M3 5a2 2 0 012-2h2.3a1 1 0 01.95.68l1.5 4.5a1 1 0 01-.5 1.21l-1.7.85a11 11 0 005.52 5.52l.85-1.7a1 1 0 011.21-.5l4.5 1.5a1 1 0 01.68.95V19a2 2 0 01-2 2h-1C9.72 21 3 14.28 3 6V5z" />
      </svg>
    ),
  },
];

export default function RhondaCard() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-brand-100 via-brand-50 to-gold-100 py-10 md:py-16">
      <div className="mx-auto max-w-md px-4">
        <div className="overflow-hidden rounded-3xl bg-white shadow-2xl shadow-brand-900/10">
          {/* Banner */}
          <div className="relative h-32 bg-gradient-to-br from-brand-900 to-brand-700">
            <div className="absolute inset-0 opacity-30"
              style={{ backgroundImage: "radial-gradient(circle at 80% 30%, #e17d34 0%, transparent 55%)" }}
            />
            <div className="absolute right-5 top-5 rounded-lg bg-white/95 p-2">
              <Image src="/logo.webp" alt="Avera Lending" width={329} height={231} className="h-8 w-auto" />
            </div>
          </div>

          {/* Profile */}
          <div className="-mt-16 flex flex-col items-center px-6 pb-2">
            <div className="relative h-32 w-32 overflow-hidden rounded-full border-4 border-white shadow-xl ring-2 ring-gold-500/20">
              <Image
                src="/rhonda.jpg"
                alt="Rhonda Avera"
                fill
                sizes="128px"
                className="object-cover"
                priority
              />
            </div>
            <h1 className="mt-5 font-display text-3xl font-bold text-brand-900">Rhonda Avera</h1>
            <p className="mt-1 text-sm font-semibold uppercase tracking-wider text-gold-600">
              Owner · Broker · Investor
            </p>
            <p className="text-sm text-brand-600">Avera Lending LLC</p>
          </div>

          {/* Links */}
          <div className="mt-6 divide-y divide-brand-100 border-t border-brand-100">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="group flex items-center gap-4 px-6 py-4 transition hover:bg-brand-50"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold-500/10 text-gold-600 transition group-hover:bg-gold-500 group-hover:text-white">
                  <span className="h-5 w-5 [&>svg]:h-5 [&>svg]:w-5">{l.icon}</span>
                </div>
                <div className="min-w-0 flex-1">
                  <div className="truncate font-semibold text-brand-900">{l.label}</div>
                  <div className="text-xs font-medium uppercase tracking-wider text-brand-500">{l.sub}</div>
                </div>
                <svg className="h-4 w-4 shrink-0 text-brand-300 transition group-hover:translate-x-1 group-hover:text-gold-500" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            ))}
          </div>

          {/* Save contact */}
          <div className="p-6">
            <a
              href={vcardHref}
              download="rhonda-avera.vcf"
              className="flex w-full items-center justify-center rounded-full bg-brand-900 px-8 py-4 font-bold text-white shadow-lg transition hover:bg-brand-800 active:scale-[0.98]"
            >
              Save Contact
            </a>
          </div>
        </div>

        <p className="mt-6 text-center text-xs text-brand-500">
          Powered by Avera Lending LLC · Private Money · Nationwide
        </p>
      </div>
    </main>
  );
}
