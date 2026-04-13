const services = [
  { name: "Fix & Flip Loans", desc: "Up to 100% financing on purchase + rehab." },
  { name: "Private Money Lending", desc: "Asset-backed loans with common-sense underwriting." },
  { name: "Joint Venture Funding", desc: "We partner on deals — new and seasoned investors welcome." },
  { name: "Bridge Loans", desc: "Short-term capital to bridge between transactions." },
  { name: "Ground-up Construction", desc: "Financing for new construction projects from the ground up." },
  { name: "Rental Loans", desc: "Long-term financing for buy-and-hold rental properties." },
  { name: "Commercial Loans", desc: "Commercial real estate financing tailored to your project." },
  { name: "Jumbo Loans", desc: "Larger loan amounts for high-value investment properties." },
  { name: "Proof of Funds Letters", desc: "POF letters to back your offers with confidence." },
  { name: "Collateral DNA Reports", desc: "Deep-dive property analysis to underwrite smarter." },
  { name: "Debt Stack Reports", desc: "Understand the capital stack on any property." },
  { name: "Off-Market Lead Lists", desc: "Nationwide leads — avoid the competition saturation." },
];

export default function Services() {
  return (
    <section id="services" className="section bg-white">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">What We Fund</span>
          <h2 className="h-display text-brand-900">Every type of deal. Every price range.</h2>
          <p className="mt-6 text-lg text-brand-700">
            We fund homes as-is or needing repairs — across every price range, nationwide.
          </p>
        </div>

        <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.name}
              className="group relative overflow-hidden rounded-xl border border-brand-100 bg-gradient-to-br from-white to-brand-50 p-6 transition hover:border-gold-500"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-display text-lg font-bold text-brand-900">{s.name}</h3>
                  <p className="mt-1 text-sm text-brand-700">{s.desc}</p>
                </div>
                <svg
                  className="h-5 w-5 shrink-0 text-gold-500 opacity-0 transition group-hover:translate-x-1 group-hover:opacity-100"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
