import { X, ArrowLeft, Coffee } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Product } from "@/data/products";
import { useEffect, useState } from "react";

interface ProductDetailProps {
  product: Product;
  onClose: () => void;
}

const ProductDetail = ({ product, onClose }: ProductDetailProps) => {
  const [animationStage, setAnimationStage] = useState(0);

  useEffect(() => {
    // Stage 0: Initial
    // Stage 1: Package appears (0.5s)
    // Stage 2: Coffee beans appear (1s)
    const timer1 = setTimeout(() => setAnimationStage(1), 100);
    const timer2 = setTimeout(() => setAnimationStage(2), 800);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [product.id]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 bg-background/98 backdrop-blur-sm overflow-y-auto">
      {/* Close / Back Button */}
      <div className="sticky top-0 z-10 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="container-custom py-4 flex items-center justify-between">
          <Button
            variant="ghost"
            onClick={onClose}
            className="flex items-center gap-2 text-foreground hover:text-primary"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Products</span>
          </Button>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-6 w-6" />
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="container-custom py-8 md:py-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start min-h-[70vh]">
          {/* Left: Animated Packaging */}
          <div className="relative flex items-center justify-center py-8">
            <div className="relative w-full max-w-md aspect-[3/4]">
              {/* Glow Effect */}
              <div 
                className={`absolute inset-0 rounded-3xl transition-all duration-1000 ${
                  animationStage >= 1 ? "opacity-100 animate-pulse-glow" : "opacity-0"
                }`}
                style={{
                  background: "radial-gradient(ellipse at center, hsl(32 80% 50% / 0.15) 0%, transparent 70%)",
                }}
              />

              {/* Package Image */}
              <div 
                className={`relative z-10 transition-all duration-700 ${
                  animationStage >= 1 ? "animate-package-reveal" : "opacity-0 scale-90"
                }`}
              >
                <img
                  src={product.packagingImage}
                  alt={`${product.name} packaging`}
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
                
                {/* Shimmer Effect */}
                <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
                  <div 
                    className={`absolute inset-0 ${animationStage >= 1 ? "animate-shimmer" : ""}`}
                    style={{
                      background: "linear-gradient(90deg, transparent 0%, hsl(38 70% 50% / 0.2) 50%, transparent 100%)",
                      backgroundSize: "200% 100%",
                    }}
                  />
                </div>
              </div>

              {/* Coffee Beans Spilling Effect */}
              <div 
                className={`absolute -bottom-4 left-1/2 -translate-x-1/2 z-20 transition-all duration-700 ${
                  animationStage >= 2 ? "animate-coffee-spill" : "opacity-0"
                }`}
              >
                <img
                  src={product.image}
                  alt={`${product.name} beans`}
                  className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-primary shadow-gold"
                />
              </div>

              {/* Floating Coffee Bean Icons */}
              {animationStage >= 2 && (
                <>
                  <Coffee 
                    className="absolute top-10 right-0 w-8 h-8 text-primary/40 animate-float" 
                    style={{ animationDelay: "0s" }}
                  />
                  <Coffee 
                    className="absolute top-1/3 -left-4 w-6 h-6 text-primary/30 animate-float" 
                    style={{ animationDelay: "0.5s" }}
                  />
                  <Coffee 
                    className="absolute bottom-1/4 -right-2 w-7 h-7 text-primary/35 animate-float" 
                    style={{ animationDelay: "1s" }}
                  />
                </>
              )}
            </div>
          </div>

          {/* Right: Product Details */}
          <div className="space-y-6 lg:sticky lg:top-24">
            <div className="animate-fade-in-up">
              <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full mb-4">
                {product.category}
              </span>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                {product.name}
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {product.fullDescription}
              </p>
            </div>

            {/* Details Grid */}
            <div className="grid sm:grid-cols-2 gap-4 animate-fade-in-up delay-200">
              <div className="bg-muted/50 rounded-xl p-4">
                <span className="text-xs text-muted-foreground uppercase tracking-wider">Origin</span>
                <p className="font-semibold text-foreground mt-1">{product.origin}</p>
              </div>
              <div className="bg-muted/50 rounded-xl p-4">
                <span className="text-xs text-muted-foreground uppercase tracking-wider">Altitude</span>
                <p className="font-semibold text-foreground mt-1">{product.altitude}</p>
              </div>
              {product.roastLevel && (
                <div className="bg-muted/50 rounded-xl p-4">
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">Roast Level</span>
                  <p className="font-semibold text-foreground mt-1">{product.roastLevel}</p>
                </div>
              )}
              <div className="bg-muted/50 rounded-xl p-4">
                <span className="text-xs text-muted-foreground uppercase tracking-wider">Net Weight</span>
                <p className="font-semibold text-foreground mt-1">{product.weight}</p>
              </div>
            </div>

            {/* Flavor Notes */}
            {product.flavorNotes && (
              <div className="animate-fade-in-up delay-300">
                <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-3">
                  Flavor Notes
                </h3>
                <div className="flex flex-wrap gap-2">
                  {product.flavorNotes.map((note) => (
                    <span
                      key={note}
                      className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium"
                    >
                      {note}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Brewing Methods */}
            {product.brewingMethods && (
              <div className="animate-fade-in-up delay-400">
                <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-3">
                  Recommended Brewing
                </h3>
                <div className="flex flex-wrap gap-2">
                  {product.brewingMethods.map((method) => (
                    <span
                      key={method}
                      className="px-4 py-2 border border-border text-foreground/80 rounded-full text-sm"
                    >
                      {method}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-fade-in-up delay-500">
              <Button variant="hero" size="lg" className="flex-1">
                Request Quote
              </Button>
              <Button variant="outline" size="lg" className="flex-1">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
