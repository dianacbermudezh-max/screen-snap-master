import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { DomosSection } from "@/components/DomosSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <DomosSection />
      <ServicesSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
