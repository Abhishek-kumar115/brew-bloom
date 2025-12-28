import { useState, useEffect } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { t } = useLanguage();
  const navigate = useNavigate();

  const heroSlides = [
    {
      subtitle: t('heroSubtitle1'),
      title: t('heroTitle1'),
      description: t('heroDesc1'),
      image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=1920&q=80",
    },
    {
      subtitle: t('heroSubtitle2'),
      title: t('heroTitle2'),
      description: t('heroDesc2'),
      image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1920&q=80",
    },
    {
      subtitle: t('heroSubtitle3'),
      title: t('heroTitle3'),
      description: t('heroDesc3'),
      image: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=1920&q=80",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {heroSlides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          <div className="absolute inset-0 bg-gradient-overlay" />
        </div>
      ))}

      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="container-custom text-center">
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`transition-all duration-700 ${
                index === currentSlide
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8 absolute inset-0 pointer-events-none"
              }`}
            >
              {index === currentSlide && (
                <>
                  <span className="inline-block px-4 py-2 mb-6 text-sm font-medium text-primary border border-primary/40 rounded-full animate-fade-in-up">
                    {slide.subtitle}
                  </span>
                  <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 animate-fade-in-up delay-100">
                    {slide.title}
                  </h1>
                  <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto mb-10 animate-fade-in-up delay-200">
                    {slide.description}
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up delay-300">
                    <Button 
                      variant="hero" 
                      size="lg" 
                      className="group"
                      onClick={() => navigate('/products')}
                    >
                      {t('viewProducts')}
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    <Button 
                      variant="heroOutline" 
                      size="lg"
                      onClick={() => navigate('/services')}
                    >
                      {t('ourServices')}
                    </Button>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={() => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 p-2 text-foreground/60 hover:text-primary transition-colors"
      >
        <ChevronLeft className="h-8 w-8" />
      </button>
      <button
        onClick={() => setCurrentSlide((prev) => (prev + 1) % heroSlides.length)}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 p-2 text-foreground/60 hover:text-primary transition-colors"
      >
        <ChevronRight className="h-8 w-8" />
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-primary w-8" : "bg-foreground/30 hover:bg-foreground/50"
            }`}
          />
        ))}
      </div>

      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-20 animate-float">
        <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-primary rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;