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
    aboutDesc1: 'We are a Peruvian team passionate about coffee and committed to excellence, working directly with producers from the Central Jungle of Peru, always seeking to highlight the best of each green bean.',
    aboutDesc2: 'We are dedicated to offering high-quality coffee, both in green and roasted versions, under a sustainable and fair trade approach.',
    aboutDesc3: 'Our mission is to connect coffee lovers with the stories behind each cup, guaranteeing freshness, authentic flavor and a positive impact on coffee communities. At ANKU Coffee Project, each bean tells a story of effort, dedication and love for coffee.',
    specialtyCoffee: 'Specialty Coffee',
    specialtyCoffeeDesc: 'Hand-selected beans from the finest farms',
    sustainable: 'Sustainable Production',
    sustainableDesc: 'Eco-friendly practices at every step',
    fairTrade: 'Fair Trade',
    fairTradeDesc: 'Supporting local farming communities',
    
    // Products
    productsTitle: 'Our Products',
    productsSubtitle: 'Premium Selection',
    productsDesc: 'We have three presentations designed for each stage of coffee enjoyment: green coffee beans for roasters, roasted coffee for aroma and freshness, and ground coffee ready to prepare.',
    viewDetails: 'View Details',
    backToProducts: 'Back to Products',
    roastLevel: 'Roast Level',
    origin: 'Origin',
    category: 'Category',
    viewAllProducts: 'View All Products',
    getQuote: 'Get Quote',
    
    // Services
    servicesTitle: 'Our Services',
    servicesSubtitle: 'What We Offer',
    servicesDesc: 'At Anku Coffee Project we not only connect lovers of good coffee with quality products of origin, but we also provide export and specialized consulting services.',
    exportService: 'Export Services',
    exportDesc: 'Peruvian coffee export service to the world, directly connecting producers from the central jungle with international markets. We manage the entire logistics and commercial process, guaranteeing the quality, traceability and origin of each coffee batch.',
    consultingService: 'Coffee Consulting',
    consultingDesc: 'Consulting services in business management, finance, supply chain, foreign trade, process improvement and business intelligence, aimed at optimizing each stage of the client\'s business.',
    valueService: 'Value Added Services',
    valueDesc: 'Value-added services to enhance the quality and presentation of Peruvian coffee. We have personalized roasting services, professional cupping, barista training, quality control and technical advice.',
    viewMore: 'View More',
    readMore: 'Read More',
    
    // Export Page
    exportPageTitle: 'Export Services',
    exportPageSubtitle: 'Connecting Peruvian Coffee to the World',
    exportPageDesc1: 'Peruvian coffee export service to the world, directly connecting producers from the central jungle with international markets.',
    exportPageDesc2: 'We manage the entire logistics and commercial process, guaranteeing the quality, traceability and origin of each coffee batch.',
    exportFeature1Title: 'Direct Trade',
    exportFeature1Desc: 'We work directly with coffee producers, eliminating intermediaries to ensure fair prices and transparent relationships.',
    exportFeature2Title: 'Quality Assurance',
    exportFeature2Desc: 'Every batch undergoes rigorous quality control, including cupping sessions and physical analysis to meet international standards.',
    exportFeature3Title: 'Full Traceability',
    exportFeature3Desc: 'Complete documentation from farm to port, including origin certificates, quality reports, and shipping documentation.',
    exportFeature4Title: 'Logistics Management',
    exportFeature4Desc: 'End-to-end logistics handling including warehousing, containerization, and coordination with shipping lines.',
    
    // Consulting Page
    consultingPageTitle: 'Consulting Services',
    consultingPageSubtitle: 'Expert Guidance for Your Coffee Business',
    consultingPageDesc1: 'Consulting services in business management, finance, supply chain, foreign trade, process improvement and business intelligence.',
    consultingPageDesc2: 'Oriented to optimize each stage of your business, allowing you to increase competitiveness, operational efficiency and profitability in national and international markets.',
    consultingFeature1Title: 'Business Management',
    consultingFeature1Desc: 'Strategic planning, organizational development, and management systems implementation.',
    consultingFeature2Title: 'Supply Chain',
    consultingFeature2Desc: 'Optimization of procurement, production, storage, and distribution processes.',
    consultingFeature3Title: 'Foreign Trade',
    consultingFeature3Desc: 'Export/import procedures, customs regulations, and international market access strategies.',
    consultingFeature4Title: 'Business Intelligence',
    consultingFeature4Desc: 'Data analysis, market research, and strategic insights for informed decision-making.',
    
    // Value Added Page
    valuePageTitle: 'Value Added Services',
    valuePageSubtitle: 'Enhancing Your Coffee Experience',
    valuePageDesc1: 'Value-added services to enhance the quality and presentation of Peruvian coffee.',
    valuePageDesc2: 'We offer personalized roasting services, professional cupping, barista training, quality control and technical advice.',
    valueFeature1Title: 'Custom Roasting',
    valueFeature1Desc: 'Personalized roasting profiles tailored to your specific flavor preferences and market requirements.',
    valueFeature2Title: 'Professional Cupping',
    valueFeature2Desc: 'Expert cupping sessions to evaluate coffee quality, identify flavor profiles, and ensure consistency.',
    valueFeature3Title: 'Barista Training',
    valueFeature3Desc: 'Comprehensive training programs for baristas covering brewing techniques, latte art, and customer service.',
    valueFeature4Title: 'Quality Control',
    valueFeature4Desc: 'Rigorous quality assurance protocols to maintain the highest standards throughout the supply chain.',
    
    // Origins
    originsTitle: 'Coffee Origins',
    originsSubtitle: 'From the Heart of Peru',
    originsDesc: 'Coffee from the Central Jungle comes from one of the most recognized coffee regions in the country, covering areas such as Chanchamayo, Satipo, Villa Rica and Oxapampa.',
    harvestMonths: 'Harvest Months',
    harvestDesc: 'In the Central Jungle, the main harvest takes place between May and September, with a peak between June and August.',
    
    // CTA
    ctaTitle: 'We are waiting for you to share the best origin coffee!',
    ctaDesc: 'Contact us to learn more about our products and services.',
    contactUs: 'Contact Us',
    requestQuote: 'Request Quote',
    
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
    
    // Contact Page
    contactPageTitle: 'Contact Us',
    contactPageSubtitle: 'Get in Touch',
    contactPageDesc: 'Have questions about our products or services? We\'d love to hear from you.',
    contactFormName: 'Your Name',
    contactFormEmail: 'Email Address',
    contactFormPhone: 'Phone Number',
    contactFormMessage: 'Your Message',
    contactFormSubmit: 'Send Message',
    contactFormSuccess: 'Message sent successfully! We\'ll get back to you soon.',
    contactFormError: 'Please fill in all required fields.',
    contactInfo: 'Contact Information',
    scanQR: 'Scan to connect with us',
    
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
    peruSubPlan1: 'Weekly Fresh',
    peruSubPlan1Desc: 'Receive freshly roasted coffee every week. Perfect for daily coffee lovers.',
    peruSubPlan2: 'Monthly Explorer',
    peruSubPlan2Desc: 'Discover a new single-origin coffee each month.',
    peruSubPlan3: 'Quarterly Premium',
    peruSubPlan3Desc: 'Premium selection of our finest beans, delivered quarterly.',
    
    // Back button
    backToHome: 'Back to Home',
    backToServices: 'Back to Services',
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
    aboutDesc1: 'Somos un equipo peruano apasionado por el café y comprometido con la excelencia, trabajamos directamente con productores de la Selva Central del Perú, buscando siempre resaltar lo mejor de cada grano verde.',
    aboutDesc2: 'Nos dedicamos a ofrecer café de alta calidad, tanto en versiones verdes como tostadas, bajo un enfoque sostenible y de comercio justo.',
    aboutDesc3: 'Nuestra misión es conectar a los amantes del café con las historias detrás de cada taza, garantizando frescura, sabor auténtico y un impacto positivo en las comunidades cafetaleras. En ANKU Coffee Project, cada grano cuenta una historia de esfuerzo, dedicación y amor por el café.',
    specialtyCoffee: 'Café de Especialidad',
    specialtyCoffeeDesc: 'Granos seleccionados de las mejores fincas',
    sustainable: 'Producción Sostenible',
    sustainableDesc: 'Prácticas ecológicas en cada paso',
    fairTrade: 'Comercio Justo',
    fairTradeDesc: 'Apoyando comunidades agrícolas locales',
    
    // Products
    productsTitle: 'Nuestros Productos',
    productsSubtitle: 'Selección Premium',
    productsDesc: 'Contamos con tres presentaciones pensadas para cada etapa del disfrute del café: café en grano verde para tostadores, café tostado para quienes buscan aroma y frescura en cada taza, y café molido listo para preparar.',
    viewDetails: 'Ver Detalles',
    backToProducts: 'Volver a Productos',
    roastLevel: 'Nivel de Tueste',
    origin: 'Origen',
    category: 'Categoría',
    viewAllProducts: 'Ver Todos los Productos',
    getQuote: 'Solicitar Cotización',
    
    // Services
    servicesTitle: 'Nuestros Servicios',
    servicesSubtitle: 'Lo Que Ofrecemos',
    servicesDesc: 'En Anku Coffee Project no solo conectamos a los amantes del buen café con productos de calidad y origen, sino que también brindamos servicios de exportación y consultoría especializada.',
    exportService: 'Servicios de Exportación',
    exportDesc: 'Servicio de exportación de café peruano al mundo, conectando directamente a productores de la selva central con mercados internacionales. Nos encargamos de gestionar todo el proceso logístico y comercial, garantizando la calidad, trazabilidad y origen de cada lote de café.',
    consultingService: 'Consultoría de Café',
    consultingDesc: 'Servicios de consultoría en gestión empresarial, finanzas, cadena de suministros, comercio exterior, mejora de procesos y business intelligence, orientado a optimizar cada etapa del negocio del cliente.',
    valueService: 'Servicios de Valor Agregado',
    valueDesc: 'Servicios de valor agregado para potenciar la calidad y presentación del café peruano. Contamos con servicios de tostado personalizado, cata profesional, barismo, control de calidad y asesoría técnica.',
    viewMore: 'Ver Más',
    readMore: 'Leer Más',
    
    // Export Page
    exportPageTitle: 'Servicios de Exportación',
    exportPageSubtitle: 'Conectando el Café Peruano con el Mundo',
    exportPageDesc1: 'Servicio de exportación de café peruano al mundo, conectando directamente a productores de la selva central con mercados internacionales.',
    exportPageDesc2: 'Nos encargamos de gestionar todo el proceso logístico y comercial, garantizando la calidad, trazabilidad y origen de cada lote de café.',
    exportFeature1Title: 'Comercio Directo',
    exportFeature1Desc: 'Trabajamos directamente con productores de café, eliminando intermediarios para asegurar precios justos y relaciones transparentes.',
    exportFeature2Title: 'Garantía de Calidad',
    exportFeature2Desc: 'Cada lote pasa por rigurosos controles de calidad, incluyendo sesiones de catación y análisis físico para cumplir estándares internacionales.',
    exportFeature3Title: 'Trazabilidad Completa',
    exportFeature3Desc: 'Documentación completa desde la finca hasta el puerto, incluyendo certificados de origen, reportes de calidad y documentación de envío.',
    exportFeature4Title: 'Gestión Logística',
    exportFeature4Desc: 'Manejo logístico integral incluyendo almacenamiento, contenedorización y coordinación con líneas navieras.',
    
    // Consulting Page
    consultingPageTitle: 'Servicios de Consultoría',
    consultingPageSubtitle: 'Guía Experta para tu Negocio de Café',
    consultingPageDesc1: 'Servicios de consultoría en gestión empresarial, finanzas, cadena de suministros, comercio exterior, mejora de procesos y business intelligence.',
    consultingPageDesc2: 'Orientado a optimizar cada etapa de tu negocio, permitiéndote incrementar competitividad, eficiencia operativa y rentabilidad en mercados nacionales e internacionales.',
    consultingFeature1Title: 'Gestión Empresarial',
    consultingFeature1Desc: 'Planificación estratégica, desarrollo organizacional e implementación de sistemas de gestión.',
    consultingFeature2Title: 'Cadena de Suministros',
    consultingFeature2Desc: 'Optimización de procesos de adquisición, producción, almacenamiento y distribución.',
    consultingFeature3Title: 'Comercio Exterior',
    consultingFeature3Desc: 'Procedimientos de exportación/importación, regulaciones aduaneras y estrategias de acceso a mercados internacionales.',
    consultingFeature4Title: 'Business Intelligence',
    consultingFeature4Desc: 'Análisis de datos, investigación de mercado y perspectivas estratégicas para toma de decisiones informadas.',
    
    // Value Added Page
    valuePageTitle: 'Servicios de Valor Agregado',
    valuePageSubtitle: 'Mejorando tu Experiencia con el Café',
    valuePageDesc1: 'Servicios de valor agregado para potenciar la calidad y presentación del café peruano.',
    valuePageDesc2: 'Ofrecemos servicios de tostado personalizado, cata profesional, capacitación de baristas, control de calidad y asesoría técnica.',
    valueFeature1Title: 'Tueste Personalizado',
    valueFeature1Desc: 'Perfiles de tueste personalizados adaptados a tus preferencias específicas de sabor y requisitos de mercado.',
    valueFeature2Title: 'Catación Profesional',
    valueFeature2Desc: 'Sesiones de catación experta para evaluar la calidad del café, identificar perfiles de sabor y asegurar consistencia.',
    valueFeature3Title: 'Capacitación Barista',
    valueFeature3Desc: 'Programas de capacitación integral para baristas cubriendo técnicas de preparación, arte latte y servicio al cliente.',
    valueFeature4Title: 'Control de Calidad',
    valueFeature4Desc: 'Protocolos rigurosos de aseguramiento de calidad para mantener los más altos estándares en toda la cadena de suministro.',
    
    // Origins
    originsTitle: 'Orígenes del Café',
    originsSubtitle: 'Desde el Corazón del Perú',
    originsDesc: 'El café de la Selva Central proviene de una de las regiones cafetaleras más reconocidas del país, que abarca zonas como Chanchamayo, Satipo, Villa Rica y Oxapampa.',
    harvestMonths: 'Meses de Cosecha',
    harvestDesc: 'En la Selva Central, la cosecha principal se realiza entre mayo y septiembre, con un pico entre junio y agosto.',
    
    // CTA
    ctaTitle: '¡Te esperamos para compartir el mejor café de origen!',
    ctaDesc: 'Contáctanos para conocer más sobre nuestros productos y servicios.',
    contactUs: 'Contáctanos',
    requestQuote: 'Solicitar Cotización',
    
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
    
    // Contact Page
    contactPageTitle: 'Contáctanos',
    contactPageSubtitle: 'Ponte en Contacto',
    contactPageDesc: '¿Tienes preguntas sobre nuestros productos o servicios? Nos encantaría saber de ti.',
    contactFormName: 'Tu Nombre',
    contactFormEmail: 'Correo Electrónico',
    contactFormPhone: 'Número de Teléfono',
    contactFormMessage: 'Tu Mensaje',
    contactFormSubmit: 'Enviar Mensaje',
    contactFormSuccess: '¡Mensaje enviado con éxito! Te responderemos pronto.',
    contactFormError: 'Por favor completa todos los campos requeridos.',
    contactInfo: 'Información de Contacto',
    scanQR: 'Escanea para conectar con nosotros',
    
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
    
    // Back button
    backToHome: 'Volver al Inicio',
    backToServices: 'Volver a Servicios',
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