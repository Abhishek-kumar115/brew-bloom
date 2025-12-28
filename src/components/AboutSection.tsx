import { Coffee, Leaf, Heart } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const AboutSection = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Coffee,
      title: t('specialtyCoffee'),
      description: t('specialtyCoffeeDesc'),
    },
    {
      icon: Leaf,
      title: t('sustainable'),
      description: t('sustainableDesc'),
    },
    {
      icon: Heart,
      title: t('fairTrade'),
      description: t('fairTradeDesc'),
    },
  ];

  return (
    <section id="about" className="section-padding bg-card">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="animate-fade-in-up">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              ANKU Coffee Project
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3 mb-6">
              {t('aboutTitle')}
            </h2>
            <div className="space-y-4 text-foreground/80 leading-relaxed">
              <p>{t('aboutDesc1')}</p>
              <p>{t('aboutDesc2')}</p>
              <p>{t('aboutDesc3')}</p>
            </div>

            {/* Features */}
            <div className="grid sm:grid-cols-3 gap-6 mt-10">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="flex flex-col items-center text-center p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground text-sm">
                    {feature.title}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-slide-in-right">
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80"
                alt="Coffee farmer"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>

            {/* Stats Badge */}
            <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-gold">
              <div className="text-4xl font-display font-bold">15+</div>
              <div className="text-sm opacity-90">{t('yearsExperience')}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
