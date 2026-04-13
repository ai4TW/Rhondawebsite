const steps = [
  {
    n: "01",
    title: "Prospect Properties",
    body: "Find distressed or undervalued properties that match your investment strategy.",
  },
  {
    n: "02",
    title: "Write Offers",
    body: "Submit offers confidently — we can provide proof-of-funds letters to strengthen them.",
  },
  {
    n: "03",
    title: "Get Under Contract",
    body: "Once the offer is accepted and earnest money is in escrow, the property is locked in.",
  },
  {
    n: "04",
    title: "We Fund It",
    body: "Send us the deal. We review, issue a term sheet within 24 business hours, and close fast.",
  },
];

export default function Process() {
  return (
    <section id="process" className="section bg-brand-900 text-white">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow !text-gold-400">How It Works</span>
          <h2 className="h-display text-white">
            From contract to close — <span className="text-gold-400">in 4 steps.</span>
          </h2>
          <p className="mt-6 text-lg text-brand-100">
            The biggest blunder investors make is shopping for money too early. Get the property
            under contract first — then bring us the deal.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <div key={s.n} className="relative">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur">
                <div className="font-display text-5xl font-bold text-gold-400">{s.n}</div>
                <h3 className="mt-4 font-display text-xl font-bold text-white">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-100">{s.body}</p>
              </div>
              {i < steps.length - 1 && (
                <div className="absolute -right-3 top-1/2 hidden h-px w-6 -translate-y-1/2 bg-gold-400/50 lg:block" />
              )}
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <a href="#contact" className="btn-primary">
            Submit My Deal →
          </a>
        </div>
      </div>
    </section>
  );
}
