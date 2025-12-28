import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { products, Product } from "@/data/products";
import ProductCard from "./ProductCard";
import ProductDetail from "./ProductDetail";
import { useNavigate, useLocation } from "react-router-dom";

const ProductsSection = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToProducts = () => {
    const element = document.getElementById('products');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <section id="products" className="section-padding bg-background">
        <div className="container-custom">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Our Collection
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3 mb-6">
              Our Products
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              We have three presentations designed for each stage of coffee enjoyment:
              green coffee beans for roasters, roasted coffee for aroma and freshness,
              and ground coffee ready to prepare.
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {products.map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                onClick={() => setSelectedProduct(product)}
                index={index}
              />
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <Button variant="hero" size="lg" className="group" onClick={scrollToProducts}>
              View All Products
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <ProductDetail
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </>
  );
};

export default ProductsSection;
