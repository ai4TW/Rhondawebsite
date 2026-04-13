import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Why from "@/components/Why";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Referrals from "@/components/Referrals";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Why />
        <Services />
        <Process />
        <Referrals />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
