import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowLeft, Truck, Package, Star, Check, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { useCountry } from '@/contexts/CountryContext';

const Subscription = () => {
  const { language, t } = useLanguage();
  const { country, data: countryData } = useCountry();

  const usaPlans = [
    {
      name: t('usaSubPlan1'),
      description: t('usaSubPlan1Desc'),
      price: '$24.99/week',
      features: ['Fresh roasted weekly', 'Free shipping', '12oz bag', 'Cancel anytime'],
      popular: false,
    },
    {
      name: t('usaSubPlan2'),
      description: t('usaSubPlan2Desc'),
      price: '$34.99/month',
      features: ['New origin each month', 'Tasting notes included', '16oz bag', 'Exclusive selections'],
      popular: true,
    },
    {
      name: t('usaSubPlan3'),
      description: t('usaSubPlan3Desc'),
      price: '$89.99/quarter',
      features: ['Premium selection', 'Gift packaging', '2x 12oz bags', 'Early access'],
      popular: false,
    },
  ];

  const peruPlans = [
    {
      name: t('peruSubPlan1'),
      description: t('peruSubPlan1Desc'),
      price: 'S/. 59.99/semana',
      features: ['Tostado semanal fresco', 'Envío gratis a Lima', 'Bolsa de 340g', 'Cancela cuando quieras'],
      popular: false,
    },
    {
      name: t('peruSubPlan2'),
      description: t('peruSubPlan2Desc'),
      price: 'S/. 89.99/mes',
      features: ['Nuevo origen cada mes', 'Notas de cata incluidas', 'Bolsa de 500g', 'Selecciones exclusivas'],
      popular: true,
    },
    {
      name: t('peruSubPlan3'),
      description: t('peruSubPlan3Desc'),
      price: 'S/. 199.99/trimestre',
      features: ['Selección premium', 'Empaque regalo', '2x bolsas 340g', 'Acceso anticipado'],
      popular: false,
    },
  ];

  const plans = country === 'USA' ? usaPlans : peruPlans;

  return (
    <>
      <Helmet>
        <title>{t('subscriptionTitle')} | ANKU Coffee Project</title>
        <meta name="description" content="Subscribe to receive fresh specialty coffee delivered to your doorstep." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-24 pb-16">
          <div className="container-custom">
            {/* Back Button */}
            <Link to="/">
              <Button variant="ghost" className="mb-8 text-muted-foreground hover:text-primary">
                <ArrowLeft className="mr-2 h-4 w-4" />
                {t('home')}
              </Button>
            </Link>

            {/* Header */}
            <div className="text-center mb-16">
              <span className="text-primary font-medium text-sm uppercase tracking-wider">
                {t('subscriptionSubtitle')}
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-3 mb-6">
                {t('subscriptionTitle')}
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {country === 'USA' 
                  ? 'Experience the finest Peruvian coffee delivered fresh to your home across the United States.'
                  : 'Disfruta del mejor café peruano entregado fresco en tu hogar en todo el Perú.'}
              </p>
            </div>

            {/* Delivery Info */}
            <div className="bg-card rounded-2xl p-8 mb-16 border border-border">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                  <Truck className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h2 className="font-display text-2xl font-bold text-foreground">
                    {country === 'USA' ? t('usaDeliveryTitle') : t('peruDeliveryTitle')}
                  </h2>
                  <p className="text-muted-foreground">
                    {country === 'USA' ? t('usaDeliveryDesc') : t('peruDeliveryDesc')}
                  </p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {(country === 'USA' 
                  ? ['Standard: 3-5 days', 'Express: 1-2 days', 'Free over $50', 'Tracking included']
                  : ['Lima: 24-48 horas', 'Provincias: 3-5 días', 'Gratis en Lima +S/.100', 'Seguimiento incluido']
                ).map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 text-foreground/80">
                    <Check className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Subscription Plans */}
            <div className="mb-16">
              <h2 className="font-display text-3xl font-bold text-foreground text-center mb-10">
                {t('subscriptionPlans')}
              </h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                {plans.map((plan, index) => (
                  <div
                    key={index}
                    className={`relative bg-card rounded-2xl p-8 border transition-all duration-300 animate-fade-in-up ${
                      plan.popular 
                        ? 'border-primary shadow-gold scale-105' 
                        : 'border-border hover:border-primary/50'
                    }`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {plan.popular && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                        <span className="px-4 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full flex items-center gap-1">
                          <Star className="h-3 w-3" />
                          Popular
                        </span>
                      </div>
                    )}

                    <div className="text-center mb-6">
                      <h3 className="font-display text-xl font-bold text-foreground mb-2">
                        {plan.name}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4">
                        {plan.description}
                      </p>
                      <div className="text-3xl font-bold text-primary">
                        {plan.price}
                      </div>
                    </div>

                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-center gap-2 text-foreground/80">
                          <Check className="h-4 w-4 text-primary flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button 
                      variant={plan.popular ? 'hero' : 'heroOutline'} 
                      className="w-full"
                    >
                      {t('subscribeNow')}
                    </Button>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact CTA */}
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 text-center border border-primary/20">
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                {language === 'en' ? 'Need Help Choosing?' : '¿Necesitas Ayuda?'}
              </h2>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                {language === 'en' 
                  ? 'Contact us for personalized recommendations or custom subscription options.'
                  : 'Contáctanos para recomendaciones personalizadas u opciones de suscripción personalizadas.'}
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <a href={`mailto:${countryData.email}`}>
                  <Button variant="hero" className="gap-2">
                    <Mail className="h-4 w-4" />
                    {countryData.email}
                  </Button>
                </a>
                <a href={`tel:${countryData.phone.replace(/\s/g, '')}`}>
                  <Button variant="heroOutline" className="gap-2">
                    <Phone className="h-4 w-4" />
                    {countryData.phone}
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Subscription;
