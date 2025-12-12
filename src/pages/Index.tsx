import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import IngredientsSection from "@/components/IngredientsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Lumière Skincare | Luxury Radiance Serum for Glowing Skin</title>
        <meta
          name="description"
          content="Discover Lumière's signature Radiance Serum with Vitamin C, Hyaluronic Acid & botanical extracts. Clinically proven to brighten skin in 2 weeks. Shop now for radiant, youthful skin."
        />
        <meta
          name="keywords"
          content="luxury skincare, radiance serum, vitamin c serum, hyaluronic acid, anti-aging, clean beauty, natural skincare"
        />
        <link rel="canonical" href="https://lumiere-skincare.com" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Lumière Skincare | Luxury Radiance Serum" />
        <meta
          property="og:description"
          content="Transform your skin with our clinically proven Radiance Serum. 97% saw visible results in just 2 weeks."
        />
        <meta property="og:type" content="website" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Lumière Radiance Serum",
            "description": "Luxury facial serum with Vitamin C, Hyaluronic Acid, and botanical extracts for radiant, youthful skin.",
            "brand": {
              "@type": "Brand",
              "name": "Lumière Skincare"
            },
            "offers": {
              "@type": "Offer",
              "price": "89.00",
              "priceCurrency": "USD",
              "availability": "https://schema.org/InStock"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "2847"
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <HeroSection />
          <BenefitsSection />
          <IngredientsSection />
          <TestimonialsSection />
          <FAQSection />
          <CTASection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
