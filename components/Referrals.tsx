export default function Referrals() {
  return (
    <section id="referrals" className="section bg-gradient-to-br from-gold-400 to-gold-600">
      <div className="container-x">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <span className="eyebrow !text-brand-900">Referral Program</span>
            <h2 className="h-display text-brand-950">
              Know someone who needs funding? Earn $500+ per close.
            </h2>
            <p className="mt-6 text-lg text-brand-900">
              Send us your leads. Our team handles everything — follow-up, underwriting, close. When
              the deal funds, you get a generous referral bonus, minimum{" "}
              <span className="font-bold">$500</span>.
            </p>
            <a
              href="#contact"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-brand-950 px-8 py-4 font-semibold text-white transition hover:bg-brand-800"
            >
              Become a Referral Partner
            </a>
          </div>
          <div className="space-y-4">
            {[
              { t: "Send us the lead", b: "Share contact info via our form — we take it from there." },
              { t: "We handle everything", b: "Professional follow-up, underwriting, and guided closing." },
              { t: "You get paid at closing", b: "Minimum $500 bonus per successful close. No caps." },
            ].map((x, i) => (
              <div key={i} className="flex gap-4 rounded-xl bg-white/90 p-5 backdrop-blur">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-900 font-display font-bold text-gold-400">
                  {i + 1}
                </div>
                <div>
                  <div className="font-display text-lg font-bold text-brand-900">{x.t}</div>
                  <div className="text-sm text-brand-700">{x.b}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
