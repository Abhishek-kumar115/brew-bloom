import { Helmet } from 'react-helmet-async';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, User } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { blogPosts } from '@/data/blogPosts';
import { useLanguage } from '@/contexts/LanguageContext';

const Blog = () => {
  const { language, t } = useLanguage();
  const navigate = useNavigate();
  const [expandedPost, setExpandedPost] = useState<string | null>(null);

  const handleReadMore = (postId: string) => {
    setExpandedPost(expandedPost === postId ? null : postId);
  };

  return (
    <>
      <Helmet>
        <title>Blog | ANKU Coffee Project</title>
        <meta name="description" content="Explore coffee stories, brewing tips, and insights from the world of specialty coffee." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-24 pb-16">
          <div className="container-custom">
            {/* Back Button */}
            <Link to="/">
              <Button variant="ghost" className="mb-8 text-muted-foreground hover:text-primary">
                <ArrowLeft className="mr-2 h-4 w-4" />
                {t('home')}
              </Button>
            </Link>

            {/* Header */}
            <div className="text-center mb-16">
              <span className="text-primary font-medium text-sm uppercase tracking-wider">
                {t('blogSubtitle')}
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-3">
                {t('blogTitle')}
              </h1>
            </div>

            {/* Blog Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
              {blogPosts.map((post, index) => (
                <article
                  key={post.id}
                  className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={post.image}
                      alt={language === 'en' ? post.titleEn : post.titleEs}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <span className="px-3 py-1 bg-primary/90 text-primary-foreground text-xs font-medium rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {new Date(post.date).toLocaleDateString(language === 'en' ? 'en-US' : 'es-PE', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </span>
                      <span className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        {post.author}
                      </span>
                    </div>

                    <h2 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {language === 'en' ? post.titleEn : post.titleEs}
                    </h2>

                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {expandedPost === post.id 
                        ? (language === 'en' ? post.contentEn : post.contentEs)
                        : (language === 'en' ? post.excerptEn : post.excerptEs)
                      }
                    </p>

                    <Button 
                      variant="ghost" 
                      className="text-primary hover:text-primary p-0 h-auto font-medium group/btn"
                      onClick={() => handleReadMore(post.id)}
                    >
                      {expandedPost === post.id ? (language === 'en' ? 'Show Less' : 'Ver Menos') : t('readMore')}
                      <span className="ml-2 group-hover/btn:translate-x-1 transition-transform">→</span>
                    </Button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Blog;
