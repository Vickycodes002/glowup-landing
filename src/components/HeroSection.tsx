import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sparkles, Star } from "lucide-react";
import heroImage from "@/assets/hero-product.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center gradient-hero overflow-hidden pt-20">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-rose-gold-light/30 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-sage/30 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-2 lg:order-1"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="inline-flex items-center gap-2 bg-sage/40 text-sage-dark px-4 py-2 rounded-full mb-6"
            >
              <Sparkles className="h-4 w-4" />
              <span className="text-sm font-medium">Clinically Proven Results</span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-foreground leading-tight mb-6">
              Reveal Your Skin's{" "}
              <span className="text-primary">Natural Radiance</span>
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg">
              Experience the transformative power of our signature Radiance Serum, 
              crafted with rare botanical extracts and advanced peptides for 
              visibly luminous, youthful skin.
            </p>

            {/* Rating */}
            <div className="flex items-center gap-4 mb-8">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">4.9</span> from 2,847 reviews
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl">
                Shop Now — $89
              </Button>
              <Button variant="hero-outline" size="xl">
                Learn More
              </Button>
            </div>

            {/* Trust badges */}
            <div className="flex items-center gap-6 mt-10 pt-8 border-t border-border/50">
              <div className="text-center">
                <p className="text-2xl font-serif font-semibold text-foreground">97%</p>
                <p className="text-xs text-muted-foreground">Saw visible results</p>
              </div>
              <div className="w-px h-10 bg-border" />
              <div className="text-center">
                <p className="text-2xl font-serif font-semibold text-foreground">100%</p>
                <p className="text-xs text-muted-foreground">Clean ingredients</p>
              </div>
              <div className="w-px h-10 bg-border" />
              <div className="text-center">
                <p className="text-2xl font-serif font-semibold text-foreground">30</p>
                <p className="text-xs text-muted-foreground">Day guarantee</p>
              </div>
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-rose-gold/20 rounded-3xl blur-3xl scale-90" />
              
              {/* Image container */}
              <div className="relative rounded-3xl overflow-hidden shadow-elevated">
                <img
                  src={heroImage}
                  alt="Lumière Radiance Serum - Luxury skincare product with botanical ingredients"
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute -bottom-4 -left-4 md:bottom-8 md:-left-8 bg-background shadow-elevated rounded-2xl p-4 md:p-6"
              >
                <p className="text-xs text-muted-foreground mb-1">Best Seller</p>
                <p className="font-serif font-semibold text-foreground">Radiance Serum</p>
                <p className="text-sm text-primary font-medium">30ml / 1 fl oz</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
