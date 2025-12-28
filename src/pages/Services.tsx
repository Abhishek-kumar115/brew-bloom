import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, Ship, Users, Lightbulb } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Ship,
      title: t('exportService'),
      description: t('exportDesc'),
      image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=600&q=80",
      link: "/services/export",
    },
    {
      icon: Users,
      title: t('consultingService'),
      description: t('consultingDesc'),
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80",
      link: "/services/consulting",
    },
    {
      icon: Lightbulb,
      title: t('valueService'),
      description: t('valueDesc'),
      image: "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=600&q=80",
      link: "/services/value-added",
    },
  ];

  return (
    <>
      <Helmet>
        <title>{t('servicesTitle')} | ANKU Coffee Project</title>
        <meta name="description" content="Export services, coffee consulting, and value-added services for Peruvian specialty coffee." />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-20">
          <section className="section-padding bg-card">
            <div className="container-custom">
              {/* Section Header */}
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-primary font-medium text-sm uppercase tracking-wider">
                  {t('servicesSubtitle')}
                </span>
                <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3 mb-6">
                  {t('servicesTitle')}
                </h1>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {t('servicesDesc')}
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
                        <Link to={service.link}>
                          <Button variant="link" className="p-0 h-auto text-primary group/btn">
                            {t('viewMore')}
                            <ArrowRight className="ml-1 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Services;