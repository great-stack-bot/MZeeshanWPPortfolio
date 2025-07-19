import { useState } from "react";
import { motion } from "framer-motion";
import { portfolioItems } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Code } from "lucide-react";

export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "ecommerce", label: "E-commerce" },
    { id: "business", label: "Business" },
    { id: "portfolio", label: "Portfolio" },
    { id: "custom", label: "Custom Solutions" }
  ];

  const filteredItems = activeFilter === "all" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-bold text-secondary mb-4"
          >
            My Portfolio
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-neutral-600 max-w-3xl mx-auto"
          >
            A selection of recent projects showcasing my WordPress development expertise
          </motion.p>
        </div>
        
        {/* Portfolio Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter) => (
            <Button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              variant={activeFilter === filter.id ? "default" : "outline"}
              className={`px-6 py-3 rounded-full transition-all duration-300 ${
                activeFilter === filter.id
                  ? "portfolio-filter active"
                  : "border border-neutral-300 text-neutral-600 hover:border-primary hover:text-primary"
              }`}
            >
              {filter.label}
            </Button>
          ))}
        </motion.div>
        
        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card-hover bg-white rounded-xl overflow-hidden shadow-lg"
            >
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-secondary mb-2">{item.title}</h3>
                <p className="text-neutral-600 mb-4">{item.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.map((tag) => {
                    let variant: "default" | "secondary" | "outline" = "outline";
                    if (tag.includes("WooCommerce") || tag.includes("Custom")) variant = "default";
                    if (tag.includes("Payment") || tag.includes("SEO") || tag.includes("Animations")) variant = "secondary";
                    
                    return (
                      <Badge key={tag} variant={variant} className="text-sm">
                        {tag}
                      </Badge>
                    );
                  })}
                </div>
                <div className="flex space-x-4">
                  <a 
                    href={item.liveUrl} 
                    className="text-primary hover:text-blue-600 transition-colors duration-300 flex items-center"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </a>
                  <a 
                    href={item.codeUrl} 
                    className="text-neutral-600 hover:text-secondary transition-colors duration-300 flex items-center"
                  >
                    <Code className="w-4 h-4 mr-2" />
                    View Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
