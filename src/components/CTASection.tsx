import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, ShieldCheck, Truck, RotateCcw } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import heroImage from "@/assets/hero-product.jpg";

const PRODUCT = {
  id: "radiance-serum",
  name: "Radiance Serum",
  price: 89,
  image: heroImage,
};

const CTASection = () => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(PRODUCT);
  };

  return (
    <section className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <span className="text-primary font-medium text-sm tracking-widest uppercase mb-4 block">
            Limited Time Offer
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-foreground mb-6">
            Start Your Glow Journey Today
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            Experience the Lumière difference with our 30-day satisfaction guarantee. 
            Transform your skincare routine and reveal your most radiant skin yet.
          </p>

          {/* Pricing Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card rounded-3xl p-8 md:p-12 shadow-elevated max-w-xl mx-auto mb-12"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="text-muted-foreground line-through text-xl">$120</span>
              <span className="bg-sage text-sage-dark text-sm font-medium px-3 py-1 rounded-full">
                Save 26%
              </span>
            </div>
            <p className="font-serif text-5xl md:text-6xl font-semibold text-foreground mb-2">
              $89
            </p>
            <p className="text-muted-foreground mb-8">30ml / 1 fl oz • One-time purchase</p>

            {/* Benefits */}
            <div className="space-y-3 mb-8">
              {[
                "Free express shipping worldwide",
                "30-day money-back guarantee",
                "Complimentary skincare consultation",
              ].map((benefit) => (
                <div key={benefit} className="flex items-center gap-3 justify-center">
                  <Check className="h-5 w-5 text-sage-dark" />
                  <span className="text-muted-foreground">{benefit}</span>
                </div>
              ))}
            </div>

            <Button variant="hero" size="xl" className="w-full md:w-auto" onClick={handleAddToCart}>
              Add to Cart — $89
            </Button>

            <p className="text-xs text-muted-foreground mt-4">
              Secure checkout • Pay in 4 installments available
            </p>
          </motion.div>

          {/* Trust Badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: ShieldCheck, label: "Secure Payment" },
              { icon: Truck, label: "Free Shipping" },
              { icon: RotateCcw, label: "30-Day Returns" },
              { icon: Check, label: "Cruelty Free" },
            ].map((badge, index) => (
              <motion.div
                key={badge.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="flex flex-col items-center gap-2"
              >
                <badge.icon className="h-6 w-6 text-primary" />
                <span className="text-sm text-muted-foreground">{badge.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
