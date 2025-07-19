import { Linkedin, Github, Twitter, Mail } from "lucide-react";

export default function Footer() {
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
    <footer className="bg-secondary text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Muhammad Zeeshan Khan</h3>
            <p className="text-neutral-300 mb-6 leading-relaxed">
              WordPress developer passionate about creating exceptional digital experiences. 
              Specializing in custom themes, plugins, and WooCommerce solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-neutral-300 hover:text-white transition-colors duration-300" aria-label="LinkedIn">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-neutral-300 hover:text-white transition-colors duration-300" aria-label="GitHub">
                <Github className="w-6 h-6" />
              </a>
              <a href="#" className="text-neutral-300 hover:text-white transition-colors duration-300" aria-label="Twitter">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-neutral-300 hover:text-white transition-colors duration-300" aria-label="Email">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('home')}
                  className="text-neutral-300 hover:text-white transition-colors duration-300 text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-neutral-300 hover:text-white transition-colors duration-300 text-left"
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('portfolio')}
                  className="text-neutral-300 hover:text-white transition-colors duration-300 text-left"
                >
                  Portfolio
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-neutral-300 hover:text-white transition-colors duration-300 text-left"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-neutral-300 hover:text-white transition-colors duration-300 text-left"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-neutral-300">Custom Theme Development</li>
              <li className="text-neutral-300">Plugin Development</li>
              <li className="text-neutral-300">WooCommerce Solutions</li>
              <li className="text-neutral-300">Performance Optimization</li>
              <li className="text-neutral-300">API Integration</li>
              <li className="text-neutral-300">Maintenance & Support</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-neutral-700 mt-12 pt-8 text-center">
          <p className="text-neutral-300">
            © 2024 Muhammad Zeeshan Khan. All rights reserved. Built with passion and WordPress expertise.
          </p>
        </div>
      </div>
    </footer>
  );
}
