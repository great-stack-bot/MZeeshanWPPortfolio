import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-neutral-50 to-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="animate-fade-in"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-secondary leading-tight">
              Muhammad Zeeshan Khan
              <span className="block text-primary mt-2">WordPress Developer</span>
            </h1>
            <p className="text-lg sm:text-xl text-neutral-600 mt-6 leading-relaxed">
              Crafting exceptional WordPress experiences with custom themes, plugins, and WooCommerce solutions. 
              Let's bring your vision to life with clean code and modern design.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button
                onClick={() => scrollToSection('portfolio')}
                className="bg-primary text-white px-8 py-4 rounded-lg hover:bg-blue-600 transition-all duration-300 transform hover:scale-105 text-center font-medium"
                size="lg"
              >
                View My Work
              </Button>
              <Button
                onClick={() => scrollToSection('contact')}
                variant="outline"
                className="border-2 border-primary text-primary px-8 py-4 rounded-lg hover:bg-primary hover:text-white transition-all duration-300 text-center font-medium"
                size="lg"
              >
                Get In Touch
              </Button>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-6 mt-8">
              <a href="#" className="text-neutral-600 hover:text-primary transition-colors duration-300" aria-label="LinkedIn">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-neutral-600 hover:text-primary transition-colors duration-300" aria-label="GitHub">
                <Github className="h-6 w-6" />
              </a>
              <a href="#" className="text-neutral-600 hover:text-primary transition-colors duration-300" aria-label="Twitter">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-neutral-600 hover:text-primary transition-colors duration-300" aria-label="Email">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="animate-float hidden lg:block"
          >
            {/* Professional headshot placeholder */}
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=800" 
              alt="Muhammad Zeeshan Khan - Professional Headshot" 
              className="rounded-2xl shadow-2xl w-full max-w-md mx-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
