export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-brand-950 text-white">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 15%, #e17d34 0%, transparent 45%), radial-gradient(circle at 85% 70%, #c04108 0%, transparent 50%)",
        }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(12,10,9,0.3),rgba(12,10,9,0.95))]" />

      <div className="container-x relative z-10 py-24 md:py-36">
        <div className="max-w-3xl">
          <span className="eyebrow !text-gold-400">Private Money Lending · Nationwide</span>
          <h1 className="h-display text-white">
            Up to <span className="text-gold-400">100% Funding</span> for Your Next Fix &amp; Flip.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-brand-100 md:text-xl">
            You bring the deal; we bring the money. Avera Lending partners with new and experienced
            real estate investors to close fast — no credit score gymnastics, no endless paperwork.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a href="#contact" className="btn-primary text-base">
              Get My Term Sheet →
            </a>
            <a
              href="tel:+19129271200"
              className="inline-flex items-center justify-center rounded-full border-2 border-white/30 px-8 py-4 font-semibold text-white transition hover:bg-white/10"
            >
              Call 912.927.1200
            </a>
          </div>

          <div className="mt-12 grid max-w-2xl grid-cols-3 gap-6 border-t border-white/10 pt-8">
            <Stat value="100%" label="Max Funding" />
            <Stat value="24 hr" label="Response Time" />
            <Stat value="$500+" label="Referral Bonus" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="font-display text-3xl font-bold text-gold-400 md:text-4xl">{value}</div>
      <div className="mt-1 text-xs font-semibold uppercase tracking-wider text-brand-200">
        {label}
      </div>
    </div>
  );
}
