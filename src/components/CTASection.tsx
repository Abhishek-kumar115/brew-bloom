import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="section-padding bg-card relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1920&q=80"
          alt="Coffee background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/90" />
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in-up">
            We are waiting for you to share the best origin coffee!
          </h2>
          <p className="text-xl text-muted-foreground mb-10 animate-fade-in-up delay-100">
            Contact us to learn more about our products and services
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up delay-200">
            <Button variant="hero" size="lg" className="group">
              Contact Us
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="heroOutline" size="lg">
              View Products
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
