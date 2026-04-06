import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import PartnerLogos from "@/components/sections/PartnerLogos";
import ImpactStats from "@/components/sections/ImpactStats";
import ProgramsSection from "@/components/sections/ProgramsSection";
import AboutSection from "@/components/sections/AboutSection";
import Testimonials from "@/components/sections/Testimonials";
import CTASection from "@/components/sections/CTASection";
import ServicesSection from "@/components/sections/ServicesSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <article className="flex-grow bg-white">
        <Hero />
        <PartnerLogos />
        <AboutSection />
        <ImpactStats />
        <ProgramsSection />
        <ServicesSection />
        <Testimonials />
        <CTASection />
        <ContactSection />
      </article>
      <Footer />
    </main>
  );
}
