import { motion } from "framer-motion";
import { Instagram, Facebook, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    Shop: ["All Products", "Best Sellers", "New Arrivals", "Gift Sets"],
    About: ["Our Story", "Ingredients", "Sustainability", "Press"],
    Support: ["Contact Us", "Shipping Info", "Returns", "FAQ"],
    Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
  };

  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Youtube, href: "#", label: "Youtube" },
  ];

  return (
    <footer className="bg-charcoal text-cream py-16 md:py-20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="font-serif text-3xl font-semibold tracking-wide inline-block mb-4">
              Lumière
            </a>
            <p className="text-cream/70 leading-relaxed mb-6 max-w-sm">
              Luxury skincare crafted with the finest natural ingredients 
              and backed by science. Your journey to radiant skin starts here.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center hover:bg-cream/20 transition-colors duration-300"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold mb-4 text-sm tracking-wider uppercase">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-cream/70 hover:text-cream transition-colors duration-300 text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="border-t border-cream/10 pt-12 mb-12">
          <div className="max-w-xl">
            <h4 className="font-serif text-xl font-semibold mb-2">
              Join the Lumière Family
            </h4>
            <p className="text-cream/70 text-sm mb-4">
              Subscribe for exclusive offers, skincare tips, and early access to new products.
            </p>
            <form className="flex gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-cream/10 border border-cream/20 text-cream placeholder:text-cream/50 focus:outline-none focus:border-cream/40 transition-colors"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-cream text-charcoal font-medium rounded-lg hover:bg-cream/90 transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-cream/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-cream/50 text-sm">
            © 2024 Lumière Skincare. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/200px-MasterCard_Logo.svg.png"
              alt="Mastercard"
              className="h-6 opacity-50"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/200px-Visa_Inc._logo.svg.png"
              alt="Visa"
              className="h-4 opacity-50"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/200px-PayPal.svg.png"
              alt="PayPal"
              className="h-5 opacity-50"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
