import { motion } from "framer-motion";
import { Droplets, Sun, Shield, Leaf } from "lucide-react";

const benefits = [
  {
    icon: Droplets,
    title: "Deep Hydration",
    description: "Hyaluronic acid complex penetrates multiple skin layers, providing 72-hour moisture retention for plump, dewy skin.",
  },
  {
    icon: Sun,
    title: "Radiant Glow",
    description: "Vitamin C and niacinamide work synergistically to brighten dull skin and fade dark spots for an even-toned complexion.",
  },
  {
    icon: Shield,
    title: "Anti-Aging Protection",
    description: "Advanced peptides and antioxidants defend against environmental stressors while reducing fine lines and wrinkles.",
  },
  {
    icon: Leaf,
    title: "Clean Formula",
    description: "100% vegan, cruelty-free, and free from parabens, sulfates, and synthetic fragrances. Just pure botanical goodness.",
  },
];

const BenefitsSection = () => {
  return (
    <section id="benefits" className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-primary font-medium text-sm tracking-widest uppercase mb-4 block">
            Why Choose Lumière
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-foreground mb-6">
            Science Meets Nature
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Our breakthrough formula combines cutting-edge dermatological science 
            with the finest natural ingredients for visible, lasting results.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-background rounded-2xl p-8 h-full shadow-soft hover:shadow-elevated transition-all duration-500 hover:-translate-y-1">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                  <benefit.icon className="h-7 w-7 text-primary" />
                </div>

                {/* Content */}
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
