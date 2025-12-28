import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, Briefcase, Link2, Globe, BarChart3 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const Consulting = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Briefcase,
      title: t('consultingFeature1Title'),
      description: t('consultingFeature1Desc'),
    },
    {
      icon: Link2,
      title: t('consultingFeature2Title'),
      description: t('consultingFeature2Desc'),
    },
    {
      icon: Globe,
      title: t('consultingFeature3Title'),
      description: t('consultingFeature3Desc'),
    },
    {
      icon: BarChart3,
      title: t('consultingFeature4Title'),
      description: t('consultingFeature4Desc'),
    },
  ];

  return (
    <>
      <Helmet>
        <title>{t('consultingPageTitle')} | ANKU Coffee Project</title>
        <meta name="description" content="Expert coffee business consulting services for management, finance, and supply chain optimization." />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-20">
          {/* Hero Section */}
          <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&q=80')" }}
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
                  {t('consultingPageTitle')}
                </h1>
                <p className="text-xl text-foreground/80 max-w-2xl">
                  {t('consultingPageSubtitle')}
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
                    {t('consultingPageDesc1')}
                  </p>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {t('consultingPageDesc2')}
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

export default Consulting;