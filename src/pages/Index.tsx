import { Navbar } from "@/components/landing/Navbar";
import { HeroCarousel } from "@/components/landing/HeroCarousel";
import { About } from "@/components/landing/About";
import { Programs } from "@/components/landing/Programs";
import { Admissions } from "@/components/landing/Admissions";
import { Placements } from "@/components/landing/Placements";
import { Testimonials } from "@/components/landing/Testimonials";
import { Contact } from "@/components/landing/Contact";
import { Footer } from "@/components/landing/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroCarousel />
      <About />
      <Programs />
      <Admissions />
      <Placements />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
