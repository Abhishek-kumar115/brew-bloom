import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { useCountry } from "@/contexts/CountryContext";

const Footer = () => {
  const { t } = useLanguage();
  const { data: countryData } = useCountry();

  const quickLinks = [
    { name: t('home'), href: "/" },
    { name: t('products'), href: "/products" },
    { name: t('services'), href: "/services" },
    { name: t('aboutUs'), href: "/#about" },
    { name: t('blog'), href: "/blog" },
    { name: t('contact'), href: "/contact" },
  ];

  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="font-display text-2xl font-bold text-gradient-gold">ANKU</span>
              <span className="text-foreground/80 text-sm font-body">Coffee Project</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              {t('footerDesc')}
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display text-lg font-semibold text-foreground mb-4">{t('quickLinks')}</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg font-semibold text-foreground mb-4">{t('products')}</h4>
            <ul className="space-y-3">
              {["Green Coffee Beans", "Roasted Coffee", "Ground Coffee", "Espresso Blend", "Single Origin"].map((link) => (
                <li key={link}>
                  <Link 
                    to="/products"
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg font-semibold text-foreground mb-4">{t('contactTitle')}</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground text-sm">{countryData.location}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <a href={`mailto:${countryData.email}`} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  {countryData.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <a href={`tel:${countryData.phone.replace(/\s/g, '')}`} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  {countryData.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} {countryData.companyName}. {t('allRights')}
          </p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">{t('privacyPolicy')}</a>
            <a href="#" className="hover:text-primary transition-colors">{t('termsOfService')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;