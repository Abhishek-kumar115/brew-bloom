import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'es';

const translations = {
  en: {
    // Navigation
    home: 'Home',
    products: 'Products',
    services: 'Services',
    blog: 'Blog',
    contact: 'Contact',
    subscription: 'Subscription & Delivery',
    
    // Hero
    viewProducts: 'View Products',
    ourServices: 'Our Services',
    heroSubtitle1: 'Perú · Selva Central',
    heroTitle1: 'ANKU Coffee Project',
    heroDesc1: 'Specialty coffee from the Central Jungle of Peru',
    heroSubtitle2: '100% Arabica',
    heroTitle2: 'Release The Flavor',
    heroDesc2: 'Experience the authentic taste of Peruvian highlands',
    heroSubtitle3: 'Fair Trade · Sustainable',
    heroTitle3: 'From Farm to Cup',
    heroDesc3: 'Supporting local producers with every sip',
    
    // About
    aboutTitle: 'Who We Are?',
    aboutDesc1: 'We are a team passionate about coffee and committed to excellence, working directly with producers from the Central Jungle of Peru, always seeking to highlight the best of each green bean.',
    aboutDesc2: 'We are dedicated to offering high-quality coffee, both in green and roasted versions, under a sustainable and fair trade approach.',
    aboutDesc3: 'Our mission is to connect coffee lovers with the stories behind each cup, guaranteeing freshness, authentic flavor and a positive impact on coffee communities. At ANKU Coffee Project, each bean tells a story of effort, dedication and love for coffee.',
    specialtyCoffee: 'Specialty Coffee',
    specialtyCoffeeDesc: 'Hand-selected beans from the finest farms',
    sustainable: 'Sustainable Production',
    sustainableDesc: 'Eco-friendly practices at every step',
    fairTrade: 'Fair Trade',
    fairTradeDesc: 'Supporting local farming communities',
    yearsExperience: 'years of experience',
    
    // Products
    productsTitle: 'Our Products',
    productsSubtitle: 'Premium Selection',
    viewDetails: 'View Details',
    backToProducts: 'Back to Products',
    roastLevel: 'Roast Level',
    origin: 'Origin',
    category: 'Category',
    
    // Services
    servicesTitle: 'Our Services',
    servicesSubtitle: 'What We Offer',
    exportService: 'Export Services',
    exportDesc: 'We export high-quality green and roasted coffee to buyers around the world.',
    consultingService: 'Coffee Consulting',
    consultingDesc: 'Expert advice on coffee sourcing, quality control, and supply chain.',
    valueService: 'Value Added Services',
    valueDesc: 'Custom roasting, private labeling, and packaging solutions.',
    
    // Origins
    originsTitle: 'Coffee Origins',
    originsSubtitle: 'From the Heart of Peru',
    
    // CTA
    ctaTitle: 'Ready to Experience Premium Coffee?',
    ctaDesc: 'Get in touch with us to learn more about our products and services.',
    contactUs: 'Contact Us',
    
    // Footer
    quickLinks: 'Quick Links',
    aboutUs: 'About Us',
    contactTitle: 'Contact Us',
    allRights: 'All rights reserved.',
    privacyPolicy: 'Privacy Policy',
    termsOfService: 'Terms of Service',
    footerDesc: 'Specialty coffee from the Central Jungle of Peru. Connecting coffee lovers with the stories behind each cup.',
    
    // Blog
    blogTitle: 'Our Blog',
    blogSubtitle: 'Coffee Stories & Insights',
    readMore: 'Read More',
    
    // Subscription
    subscriptionTitle: 'Subscription & Delivery',
    subscriptionSubtitle: 'Fresh Coffee at Your Doorstep',
    subscribeNow: 'Subscribe Now',
    deliveryOptions: 'Delivery Options',
    subscriptionPlans: 'Subscription Plans',
    
    // USA specific
    usaDeliveryTitle: 'US Delivery',
    usaDeliveryDesc: 'Free shipping on orders over $50. Standard delivery 3-5 business days.',
    usaSubPlan1: 'Weekly Fresh Roast',
    usaSubPlan1Desc: 'Get freshly roasted beans delivered every week. Perfect for daily coffee lovers.',
    usaSubPlan2: 'Monthly Explorer',
    usaSubPlan2Desc: 'Discover a new single-origin coffee each month.',
    usaSubPlan3: 'Quarterly Premium',
    usaSubPlan3Desc: 'Premium selection of our finest beans, delivered quarterly.',
    
    // Peru specific
    peruDeliveryTitle: 'Peru Delivery',
    peruDeliveryDesc: 'Delivery available nationwide. Express delivery to Lima in 24-48 hours.',
    peruSubPlan1: 'Semanal Fresco',
    peruSubPlan1Desc: 'Recibe café recién tostado cada semana. Perfecto para amantes del café diario.',
    peruSubPlan2: 'Explorador Mensual',
    peruSubPlan2Desc: 'Descubre un nuevo café de origen único cada mes.',
    peruSubPlan3: 'Premium Trimestral',
    peruSubPlan3Desc: 'Selección premium de nuestros mejores granos, entregado trimestralmente.',
  },
  es: {
    // Navigation
    home: 'Inicio',
    products: 'Productos',
    services: 'Servicios',
    blog: 'Blog',
    contact: 'Contacto',
    subscription: 'Suscripción y Envíos',
    
    // Hero
    viewProducts: 'Ver Productos',
    ourServices: 'Nuestros Servicios',
    heroSubtitle1: 'Perú · Selva Central',
    heroTitle1: 'ANKU Coffee Project',
    heroDesc1: 'Café de especialidad de la Selva Central del Perú',
    heroSubtitle2: '100% Arábica',
    heroTitle2: 'Libera el Sabor',
    heroDesc2: 'Experimenta el auténtico sabor de las alturas peruanas',
    heroSubtitle3: 'Comercio Justo · Sostenible',
    heroTitle3: 'Del Campo a tu Taza',
    heroDesc3: 'Apoyando a productores locales con cada sorbo',
    
    // About
    aboutTitle: '¿Quiénes Somos?',
    aboutDesc1: 'Somos un equipo apasionado por el café y comprometido con la excelencia, trabajando directamente con productores de la Selva Central del Perú, siempre buscando destacar lo mejor de cada grano verde.',
    aboutDesc2: 'Nos dedicamos a ofrecer café de alta calidad, tanto en versiones verdes como tostadas, bajo un enfoque sostenible y de comercio justo.',
    aboutDesc3: 'Nuestra misión es conectar a los amantes del café con las historias detrás de cada taza, garantizando frescura, sabor auténtico y un impacto positivo en las comunidades cafetaleras. En ANKU Coffee Project, cada grano cuenta una historia de esfuerzo, dedicación y amor por el café.',
    specialtyCoffee: 'Café de Especialidad',
    specialtyCoffeeDesc: 'Granos seleccionados de las mejores fincas',
    sustainable: 'Producción Sostenible',
    sustainableDesc: 'Prácticas ecológicas en cada paso',
    fairTrade: 'Comercio Justo',
    fairTradeDesc: 'Apoyando comunidades agrícolas locales',
    yearsExperience: 'años de experiencia',
    
    // Products
    productsTitle: 'Nuestros Productos',
    productsSubtitle: 'Selección Premium',
    viewDetails: 'Ver Detalles',
    backToProducts: 'Volver a Productos',
    roastLevel: 'Nivel de Tueste',
    origin: 'Origen',
    category: 'Categoría',
    
    // Services
    servicesTitle: 'Nuestros Servicios',
    servicesSubtitle: 'Lo Que Ofrecemos',
    exportService: 'Servicios de Exportación',
    exportDesc: 'Exportamos café verde y tostado de alta calidad a compradores de todo el mundo.',
    consultingService: 'Consultoría de Café',
    consultingDesc: 'Asesoría experta en abastecimiento, control de calidad y cadena de suministro.',
    valueService: 'Servicios de Valor Agregado',
    valueDesc: 'Tostado personalizado, etiquetado privado y soluciones de empaque.',
    
    // Origins
    originsTitle: 'Orígenes del Café',
    originsSubtitle: 'Desde el Corazón del Perú',
    
    // CTA
    ctaTitle: '¿Listo para Experimentar Café Premium?',
    ctaDesc: 'Contáctanos para conocer más sobre nuestros productos y servicios.',
    contactUs: 'Contáctanos',
    
    // Footer
    quickLinks: 'Enlaces Rápidos',
    aboutUs: 'Nosotros',
    contactTitle: 'Contáctanos',
    allRights: 'Todos los derechos reservados.',
    privacyPolicy: 'Política de Privacidad',
    termsOfService: 'Términos de Servicio',
    footerDesc: 'Café de especialidad de la Selva Central del Perú. Conectando amantes del café con las historias detrás de cada taza.',
    
    // Blog
    blogTitle: 'Nuestro Blog',
    blogSubtitle: 'Historias e Ideas sobre Café',
    readMore: 'Leer Más',
    
    // Subscription
    subscriptionTitle: 'Suscripción y Envíos',
    subscriptionSubtitle: 'Café Fresco en tu Puerta',
    subscribeNow: 'Suscríbete Ahora',
    deliveryOptions: 'Opciones de Envío',
    subscriptionPlans: 'Planes de Suscripción',
    
    // USA specific
    usaDeliveryTitle: 'Envío a EE.UU.',
    usaDeliveryDesc: 'Envío gratis en pedidos mayores a $50. Entrega estándar 3-5 días hábiles.',
    usaSubPlan1: 'Tueste Semanal Fresco',
    usaSubPlan1Desc: 'Recibe granos recién tostados cada semana. Perfecto para amantes del café diario.',
    usaSubPlan2: 'Explorador Mensual',
    usaSubPlan2Desc: 'Descubre un nuevo café de origen único cada mes.',
    usaSubPlan3: 'Premium Trimestral',
    usaSubPlan3Desc: 'Selección premium de nuestros mejores granos, entregado trimestralmente.',
    
    // Peru specific
    peruDeliveryTitle: 'Envío a Perú',
    peruDeliveryDesc: 'Envío disponible a nivel nacional. Envío express a Lima en 24-48 horas.',
    peruSubPlan1: 'Semanal Fresco',
    peruSubPlan1Desc: 'Recibe café recién tostado cada semana. Perfecto para amantes del café diario.',
    peruSubPlan2: 'Explorador Mensual',
    peruSubPlan2Desc: 'Descubre un nuevo café de origen único cada mes.',
    peruSubPlan3: 'Premium Trimestral',
    peruSubPlan3Desc: 'Selección premium de nuestros mejores granos, entregado trimestralmente.',
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
