import { motion } from "framer-motion";
import { services } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { 
  Paintbrush, 
  Puzzle, 
  ShoppingCart, 
  Rocket, 
  Code, 
  Wrench,
  Check
} from "lucide-react";

const iconMap = {
  paintbrush: Paintbrush,
  puzzle: Puzzle,
  "shopping-cart": ShoppingCart,
  rocket: Rocket,
  code: Code,
  wrench: Wrench
};

const colorMap = {
  blue: "bg-blue-100 text-blue-600",
  yellow: "bg-yellow-100 text-yellow-600",
  green: "bg-green-100 text-green-600",
  purple: "bg-purple-100 text-purple-600",
  red: "bg-red-100 text-red-600"
};

export default function ServicesSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-bold text-secondary mb-4"
          >
            My Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-neutral-600 max-w-3xl mx-auto"
          >
            Comprehensive WordPress development services to bring your ideas to life
          </motion.p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap];
            const colorClass = colorMap[service.color as keyof typeof colorMap];
            
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-hover bg-neutral-50 p-8 rounded-xl border border-neutral-200"
              >
                <div className={`w-16 h-16 ${colorClass} rounded-full flex items-center justify-center mb-6`}>
                  <IconComponent className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-secondary mb-4">{service.title}</h3>
                <p className="text-neutral-600 mb-6">{service.description}</p>
                <ul className="space-y-2 text-neutral-600">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Button
            onClick={scrollToContact}
            className="bg-primary text-white px-8 py-4 rounded-lg hover:bg-blue-600 transition-all duration-300 transform hover:scale-105 font-medium"
            size="lg"
          >
            Let's Discuss Your Project
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
