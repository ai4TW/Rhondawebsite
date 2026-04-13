export default function Footer() {
  return (
    <footer className="bg-brand-950 text-brand-200">
      <div className="container-x border-t border-white/10 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-700 font-display text-xl font-bold text-white">
                A
              </div>
              <div className="font-display text-xl font-bold text-white">Avera Lending LLC</div>
            </div>
            <p className="mt-4 max-w-md text-sm">
              Private money lending for real estate investors nationwide. You bring the deal; we
              bring the money.
            </p>
          </div>
          <div>
            <div className="mb-4 text-xs font-bold uppercase tracking-wider text-gold-400">Company</div>
            <ul className="space-y-2 text-sm">
              <li><a href="#why" className="hover:text-white">Why Avera</a></li>
              <li><a href="#services" className="hover:text-white">Services</a></li>
              <li><a href="#referrals" className="hover:text-white">Referrals</a></li>
              <li><a href="#faq" className="hover:text-white">FAQ</a></li>
            </ul>
          </div>
          <div>
            <div className="mb-4 text-xs font-bold uppercase tracking-wider text-gold-400">Contact</div>
            <ul className="space-y-2 text-sm">
              <li><a href="tel:+19129271200" className="hover:text-white">912.927.1200</a></li>
              <li><a href="mailto:rhonda@avera-lending.com" className="hover:text-white">rhonda@avera-lending.com</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-brand-300 md:flex-row">
          <div>© {new Date().getFullYear()} Avera Lending LLC. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
