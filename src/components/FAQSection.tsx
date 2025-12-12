import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How do I use the Radiance Serum?",
    answer: "Apply 3-4 drops to clean, slightly damp skin morning and evening. Gently press into face, neck, and décolletage. Follow with your moisturizer and SPF (in the morning). For best results, use consistently for at least 4-6 weeks.",
  },
  {
    question: "When will I see results?",
    answer: "Most customers notice improved hydration and a healthy glow within the first week. Visible improvements in skin tone, texture, and fine lines typically appear within 2-4 weeks of consistent use. Full anti-aging benefits develop over 8-12 weeks.",
  },
  {
    question: "Is it suitable for sensitive skin?",
    answer: "Yes! Our formula is dermatologist-tested and free from common irritants like parabens, sulfates, and synthetic fragrances. The Vitamin C is stabilized for gentle yet effective delivery. However, we recommend patch testing first if you have extremely sensitive skin.",
  },
  {
    question: "Can I use it with other skincare products?",
    answer: "Absolutely. The Radiance Serum layers beautifully under most skincare products. We recommend applying it after cleansing and toning, but before heavier creams and oils. Avoid using with products containing high concentrations of AHAs/BHAs in the same routine.",
  },
  {
    question: "What is your return policy?",
    answer: "We offer a 30-day satisfaction guarantee. If you're not completely happy with your purchase, contact us within 30 days for a full refund—no questions asked. We want you to feel confident trying our products.",
  },
  {
    question: "Is the serum cruelty-free and vegan?",
    answer: "Yes! Lumière is 100% cruelty-free—we never test on animals. Our Radiance Serum is also vegan and formulated without any animal-derived ingredients. We're committed to ethical, sustainable skincare.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-24 md:py-32 bg-card">
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
            Questions & Answers
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-foreground mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Everything you need to know about our Radiance Serum. 
            Can't find the answer you're looking for? Reach out to our team.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-background rounded-xl px-6 border-none shadow-soft"
              >
                <AccordionTrigger className="text-left font-serif font-medium text-foreground hover:text-primary hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
