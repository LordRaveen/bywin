import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import ImpactStats from "@/components/sections/ImpactStats";
import ProgramsSection from "@/components/sections/ProgramsSection";
import AboutSection from "@/components/sections/AboutSection";
import Testimonials from "@/components/sections/Testimonials";
import CTASection from "@/components/sections/CTASection";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <article className="flex-grow">
        <Hero />
        <ImpactStats />
        <ProgramsSection />
        <AboutSection />
        <Testimonials />
        <CTASection />
      </article>
      <Footer />
    </main>
  );
}
