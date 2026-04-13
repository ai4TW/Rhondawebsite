const reasons = [
  {
    title: "It's Fast",
    body: "Flipping is a time-sensitive business. Close in days to weeks — not the 1–3 months traditional banks demand.",
  },
  {
    title: "Collateral, Not Credit",
    body: "We look at the value in the property, not your credit score. The asset backs the loan.",
  },
  {
    title: "Tailored Solutions",
    body: "Every investment is unique. We build financing around your goals, not a cookie-cutter underwriting box.",
  },
  {
    title: "Proven Expertise",
    body: "CEO Rhonda Avera brings deep real estate experience and a results-driven track record.",
  },
  {
    title: "Integrity & Trust",
    body: "Transparent, ethical, and committed to long-term partnerships — not transactional lending.",
  },
  {
    title: "End-to-End Support",
    body: "Private money, JVs, POF letters, Collateral DNA Reports, and off-market lead lists — all in one place.",
  },
];

export default function Why() {
  return (
    <section id="why" className="section bg-brand-50">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Why Avera Lending</span>
          <h2 className="h-display text-brand-900">Built to close deals, not delay them.</h2>
          <p className="mt-6 text-lg text-brand-700">
            We transcend the role of a conventional private money lender. We&apos;re your partner in
            building enduring, sustainable wealth through real estate.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r) => (
            <div
              key={r.title}
              className="rounded-2xl border border-brand-100 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gold-500/20 text-gold-600">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-display text-xl font-bold text-brand-900">{r.title}</h3>
              <p className="mt-2 text-brand-700">{r.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
