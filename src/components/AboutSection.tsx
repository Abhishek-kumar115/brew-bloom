import { Coffee, Leaf, Heart } from "lucide-react";

const features = [
  {
    icon: Coffee,
    title: "Specialty Coffee",
    description: "Hand-selected beans from the finest farms",
  },
  {
    icon: Leaf,
    title: "Sustainable Production",
    description: "Eco-friendly practices at every step",
  },
  {
    icon: Heart,
    title: "Fair Trade",
    description: "Supporting local farming communities",
  },
];

const AboutSection = () => {
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
              Who We Are?
            </h2>
            <div className="space-y-4 text-foreground/80 leading-relaxed">
              <p>
                We are a team passionate about coffee and committed to excellence,
                working directly with producers from the Central Jungle of Peru,
                always seeking to highlight the best of each green bean.
              </p>
              <p>
                We are dedicated to offering high-quality coffee, both in green and
                roasted versions, under a sustainable and fair trade approach.
              </p>
              <p>
                Our mission is to connect coffee lovers with the stories behind each
                cup, guaranteeing freshness, authentic flavor and a positive impact
                on coffee communities. At ANKU Coffee Project, each bean tells a
                story of effort, dedication and love for coffee.
              </p>
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
              <div className="text-sm opacity-90">years of experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
