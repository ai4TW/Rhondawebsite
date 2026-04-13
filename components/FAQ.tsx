const faqs = [
  {
    q: "Do I need good credit to get funded?",
    a: "No. Private money lenders look at the value of the property (the collateral), not your credit score. If the deal makes sense, we fund it.",
  },
  {
    q: "How fast can you close?",
    a: "Depending on how quickly you submit loan package items, you can have funding in several days to several weeks — versus 1–3 months with traditional financing.",
  },
  {
    q: "Can you really fund 100% of the deal?",
    a: "Yes. We specialize in joint venture real estate transactions and offer up to 100% funding on fix-and-flip deals when the numbers work.",
  },
  {
    q: "What kind of properties do you fund?",
    a: "All types, at all price ranges — as-is or needing repairs. Single family, multi-family, commercial, new construction, rentals, and more.",
  },
  {
    q: "Do I need the property under contract first?",
    a: "Yes. The biggest mistake investors make is shopping for money before they have a deal. Get it under contract first, then bring it to us.",
  },
  {
    q: "Do you work outside my state?",
    a: "We fund deals nationwide. Reach out and tell us about your market.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="section bg-white">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Frequently Asked</span>
          <h2 className="h-display text-brand-900">Questions investors ask us most.</h2>
        </div>

        <div className="mx-auto mt-14 max-w-3xl space-y-4">
          {faqs.map((f) => (
            <details
              key={f.q}
              className="group rounded-xl border border-brand-100 bg-brand-50/50 p-6 transition open:bg-white open:shadow-md"
            >
              <summary className="flex cursor-pointer items-center justify-between font-display text-lg font-bold text-brand-900 marker:hidden [&::-webkit-details-marker]:hidden">
                {f.q}
                <svg
                  className="h-5 w-5 shrink-0 text-gold-500 transition group-open:rotate-45"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={3}
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                </svg>
              </summary>
              <p className="mt-4 leading-relaxed text-brand-700">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
