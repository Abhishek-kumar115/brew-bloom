import { Helmet } from "react-helmet-async";
import { Mail, Phone, MapPin } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { useLanguage } from "@/contexts/LanguageContext";
import { useCountry } from "@/contexts/CountryContext";

const Contact = () => {
  const { t } = useLanguage();
  const { data: countryData } = useCountry();

  return (
    <>
      <Helmet>
        <title>{t('contactPageTitle')} | ANKU Coffee Project</title>
        <meta name="description" content="Contact ANKU Coffee Project for premium Peruvian specialty coffee inquiries." />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-20">
          <section className="section-padding bg-background">
            <div className="container-custom">
              {/* Section Header */}
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-primary font-medium text-sm uppercase tracking-wider">
                  {t('contactPageSubtitle')}
                </span>
                <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3 mb-6">
                  {t('contactPageTitle')}
                </h1>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {t('contactPageDesc')}
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-12">
                {/* Contact Form */}
                <div className="bg-card rounded-2xl p-8 border border-border/50">
                  <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                    {t('requestQuote')}
                  </h2>
                  <ContactForm />
                </div>

                {/* Contact Info & QR */}
                <div className="space-y-8">
                  {/* Contact Information */}
                  <div className="bg-card rounded-2xl p-8 border border-border/50">
                    <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                      {t('contactInfo')}
                    </h2>
                    <ul className="space-y-6">
                      <li className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <MapPin className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-1">{countryData.companyName}</h4>
                          <p className="text-muted-foreground text-sm">{countryData.location}</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Mail className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-1">Email</h4>
                          <a 
                            href={`mailto:${countryData.email}`} 
                            className="text-primary hover:underline text-sm"
                          >
                            {countryData.email}
                          </a>
                        </div>
                      </li>
                      <li className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Phone className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-1">{t('contactFormPhone')}</h4>
                          <a 
                            href={`tel:${countryData.phone.replace(/\s/g, '')}`} 
                            className="text-primary hover:underline text-sm"
                          >
                            {countryData.phone}
                          </a>
                        </div>
                      </li>
                    </ul>
                  </div>

                  {/* QR Code */}
                  <div className="bg-card rounded-2xl p-8 border border-border/50 text-center">
                    <h3 className="font-display text-xl font-bold text-foreground mb-4">
                      {t('scanQR')}
                    </h3>
                    <div className="bg-white rounded-xl p-4 inline-block">
                      <img 
                        src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://sites.google.com/view/anku-coffee-project/inicio" 
                        alt="QR Code - ANKU Coffee Project" 
                        className="w-48 h-48 mx-auto"
                      />
                    </div>
                    <p className="text-muted-foreground text-sm mt-4">
                      ANKU Coffee Project
                    </p>
                  </div>
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

export default Contact;