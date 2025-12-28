import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import ProductDetail from "@/components/ProductDetail";
import { products, Product } from "@/data/products";
import { useLanguage } from "@/contexts/LanguageContext";

const Products = () => {
  const { t } = useLanguage();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <>
      <Helmet>
        <title>{t('productsTitle')} | ANKU Coffee Project</title>
        <meta name="description" content="Premium specialty coffee from Peru - green coffee beans, roasted coffee, and ground coffee with fair trade practices." />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-20">
          <section className="section-padding bg-background">
            <div className="container-custom">
              {/* Section Header */}
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-primary font-medium text-sm uppercase tracking-wider">
                  {t('productsSubtitle')}
                </span>
                <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3 mb-6">
                  {t('productsTitle')}
                </h1>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {t('productsDesc')}
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
            </div>
          </section>
        </main>
        <Footer />
      </div>

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

export default Products;