import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { useCountry } from "@/contexts/CountryContext";

const Footer = () => {
  const { t } = useLanguage();
  const { data: countryData } = useCountry();
  const navigate = useNavigate();
  const location = useLocation();

  const quickLinks = [
    { name: t('home'), href: "/#home", isSection: true },
    { name: t('products'), href: "/#products", isSection: true },
    { name: t('services'), href: "/#services", isSection: true },
    { name: t('aboutUs'), href: "/#about", isSection: true },
    { name: t('blog'), href: "/blog", isSection: false },
    { name: t('contact'), href: "/#contact", isSection: true },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, link: { href: string; isSection: boolean }) => {
    if (link.isSection) {
      e.preventDefault();
      const sectionId = link.href.replace('/#', '');
      
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <footer id="contact" className="bg-muted/30 border-t border-border">
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
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

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold text-foreground mb-4">{t('quickLinks')}</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  {link.isSection ? (
                    <a 
                      href={link.href} 
                      onClick={(e) => handleLinkClick(e, link)}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm cursor-pointer"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link 
                      to={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-display text-lg font-semibold text-foreground mb-4">{t('products')}</h4>
            <ul className="space-y-3">
              {["Green Coffee Beans", "Roasted Coffee", "Ground Coffee", "Espresso Blend", "Single Origin"].map((link) => (
                <li key={link}>
                  <a 
                    href="/#products" 
                    onClick={(e) => handleLinkClick(e, { href: "/#products", isSection: true })}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm cursor-pointer"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-semibold text-foreground mb-4">{t('contactTitle')}</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground text-sm">
                  {countryData.location}
                </span>
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

        {/* Bottom */}
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
