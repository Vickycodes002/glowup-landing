import { motion } from "framer-motion";
import ingredientsImage from "@/assets/ingredients.jpg";
import serumTexture from "@/assets/serum-texture.jpg";

const ingredients = [
  {
    name: "Hyaluronic Acid",
    percentage: "2%",
    description: "Multi-molecular weight for deep and surface hydration",
  },
  {
    name: "Vitamin C",
    percentage: "15%",
    description: "L-Ascorbic acid for powerful antioxidant protection",
  },
  {
    name: "Niacinamide",
    percentage: "5%",
    description: "Vitamin B3 to refine pores and even skin tone",
  },
  {
    name: "Rose Hip Extract",
    percentage: "3%",
    description: "Natural retinol alternative for gentle cell renewal",
  },
];

const IngredientsSection = () => {
  return (
    <section id="ingredients" className="py-24 md:py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden shadow-elevated">
                  <img
                    src={ingredientsImage}
                    alt="Natural botanical ingredients - roses, citrus, and botanical extracts"
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="bg-sage/30 rounded-2xl p-6">
                  <p className="font-serif text-4xl font-semibold text-sage-dark mb-2">12+</p>
                  <p className="text-sm text-sage-dark/80">Active Botanicals</p>
                </div>
              </div>
              <div className="pt-8 space-y-4">
                <div className="bg-primary/10 rounded-2xl p-6">
                  <p className="font-serif text-4xl font-semibold text-primary mb-2">100%</p>
                  <p className="text-sm text-primary/80">Clean Formula</p>
                </div>
                <div className="rounded-2xl overflow-hidden shadow-elevated">
                  <img
                    src={serumTexture}
                    alt="Luxurious golden serum texture with light-catching bubbles"
                    className="w-full h-64 object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary font-medium text-sm tracking-widest uppercase mb-4 block">
              Premium Ingredients
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-foreground mb-6">
              Potent Actives, Pure Results
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10">
              Each ingredient is carefully selected for maximum efficacy and 
              sourced from sustainable farms around the world. No fillers, 
              no compromises—just what your skin truly needs.
            </p>

            {/* Ingredients List */}
            <div className="space-y-6">
              {ingredients.map((ingredient, index) => (
                <motion.div
                  key={ingredient.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-xl bg-card hover:bg-muted transition-colors duration-300"
                >
                  <div className="flex-shrink-0 w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center">
                    <span className="font-serif font-semibold text-primary">
                      {ingredient.percentage}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-serif font-semibold text-foreground mb-1">
                      {ingredient.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {ingredient.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default IngredientsSection;
