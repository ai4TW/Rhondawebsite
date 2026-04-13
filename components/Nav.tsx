import Image from "next/image";

export default function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-brand-100 bg-white/90 backdrop-blur-md">
      <div className="container-x flex h-20 items-center justify-between">
        <a href="#top" className="flex items-center">
          <Image
            src="/logo.webp"
            alt="Avera Lending LLC — Private Money Broker"
            width={329}
            height={231}
            priority
            className="h-14 w-auto"
          />
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          <a href="#services" className="text-sm font-medium text-brand-800 hover:text-brand-600">Services</a>
          <a href="#process" className="text-sm font-medium text-brand-800 hover:text-brand-600">Process</a>
          <a href="#why" className="text-sm font-medium text-brand-800 hover:text-brand-600">Why Us</a>
          <a href="#referrals" className="text-sm font-medium text-brand-800 hover:text-brand-600">Referrals</a>
          <a href="#faq" className="text-sm font-medium text-brand-800 hover:text-brand-600">FAQ</a>
        </nav>
        <div className="flex items-center gap-3">
          <a href="tel:+19129271200" className="hidden text-sm font-semibold text-brand-800 md:block">
            912.927.1200
          </a>
          <a
            href="#contact"
            className="rounded-full bg-gold-500 px-5 py-2.5 text-sm font-bold text-brand-950 shadow-md transition hover:bg-gold-400"
          >
            Get Funded
          </a>
        </div>
      </div>
    </header>
  );
}
