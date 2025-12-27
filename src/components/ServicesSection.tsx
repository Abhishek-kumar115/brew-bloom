import { ArrowRight, Ship, Users, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Ship,
    title: "Export",
    description: "Peruvian coffee export service to the world, directly connecting producers from the central jungle with international markets. We manage the entire logistics and commercial process, guaranteeing the quality, traceability and origin of each coffee batch.",
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=600&q=80",
  },
  {
    icon: Users,
    title: "Consulting",
    description: "Consulting services in business management, finance, supply chain, foreign trade, process improvement and business intelligence, aimed at optimizing each stage of the client's business.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80",
  },
  {
    icon: Lightbulb,
    title: "Value Added Services",
    description: "Value-added services to enhance the quality and presentation of Peruvian coffee. We have personalized roasting services, professional cupping, barista training, quality control and technical advice.",
    image: "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=600&q=80",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-card">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            What We Offer
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3 mb-6">
            Our Services
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            At Anku Coffee Project we not only connect lovers of good coffee with quality
            products of origin, but we also provide export and specialized consulting services.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="relative overflow-hidden rounded-2xl bg-muted/30 border border-border/50 hover:border-primary/50 transition-all duration-500 h-full">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                  
                  {/* Icon */}
                  <div className="absolute bottom-4 left-4 w-14 h-14 rounded-xl bg-primary flex items-center justify-center shadow-gold">
                    <service.icon className="h-7 w-7 text-primary-foreground" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <Button variant="link" className="p-0 h-auto text-primary group/btn">
                    View more
                    <ArrowRight className="ml-1 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
