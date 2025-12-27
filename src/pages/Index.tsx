import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProductsSection from "@/components/ProductsSection";
import ServicesSection from "@/components/ServicesSection";
import OriginsSection from "@/components/OriginsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>ANKU Coffee Project | Specialty Coffee from Peru</title>
        <meta name="description" content="Premium specialty coffee from the Central Jungle of Peru. Green coffee beans, roasted coffee, and ground coffee with fair trade practices." />
        <meta name="keywords" content="Peruvian coffee, specialty coffee, green coffee beans, roasted coffee, fair trade coffee" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <HeroSection />
          <AboutSection />
          <ProductsSection />
          <ServicesSection />
          <OriginsSection />
          <CTASection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
