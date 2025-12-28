import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, Coffee, Award, GraduationCap, Shield } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const ValueAdded = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Coffee,
      title: t('valueFeature1Title'),
      description: t('valueFeature1Desc'),
    },
    {
      icon: Award,
      title: t('valueFeature2Title'),
      description: t('valueFeature2Desc'),
    },
    {
      icon: GraduationCap,
      title: t('valueFeature3Title'),
      description: t('valueFeature3Desc'),
    },
    {
      icon: Shield,
      title: t('valueFeature4Title'),
      description: t('valueFeature4Desc'),
    },
  ];

  return (
    <>
      <Helmet>
        <title>{t('valuePageTitle')} | ANKU Coffee Project</title>
        <meta name="description" content="Value-added services including custom roasting, professional cupping, barista training, and quality control." />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-20">
          {/* Hero Section */}
          <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1511920170033-f8396924c348?w=1920&q=80')" }}
            />
            <div className="absolute inset-0 bg-gradient-overlay" />
            <div className="relative z-10 h-full flex items-center">
              <div className="container-custom">
                <Link to="/services">
                  <Button variant="ghost" className="mb-4 text-foreground/80 hover:text-primary">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    {t('backToServices')}
                  </Button>
                </Link>
                <span className="inline-block px-4 py-2 mb-4 text-sm font-medium text-primary border border-primary/40 rounded-full">
                  {t('servicesSubtitle')}
                </span>
                <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-4">
                  {t('valuePageTitle')}
                </h1>
                <p className="text-xl text-foreground/80 max-w-2xl">
                  {t('valuePageSubtitle')}
                </p>
              </div>
            </div>
          </section>

          {/* Content Section */}
          <section className="section-padding bg-card">
            <div className="container-custom">
              <div className="max-w-4xl mx-auto">
                <div className="prose prose-lg prose-invert mb-12">
                  <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                    {t('valuePageDesc1')}
                  </p>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {t('valuePageDesc2')}
                  </p>
                </div>

                {/* Features Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                  {features.map((feature, index) => (
                    <div 
                      key={feature.title}
                      className="bg-muted/30 rounded-xl p-6 border border-border/50 animate-fade-in-up"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                        <feature.icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-display text-xl font-bold text-foreground mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="text-center mt-12">
                  <Link to="/contact">
                    <Button variant="hero" size="lg">
                      {t('contactUs')}
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default ValueAdded;