import { motion } from "framer-motion";
import { skills } from "@/lib/data";
import { useEffect, useRef, useState } from "react";

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="about" className="py-20 bg-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-bold text-secondary mb-4"
          >
            About Me
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-neutral-600 max-w-3xl mx-auto"
          >
            Passionate about creating digital experiences that make a difference
          </motion.p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Professional photo in working environment */}
            <img 
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Muhammad Zeeshan Khan working on WordPress development" 
              className="rounded-xl shadow-lg w-full"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-neutral-600 leading-relaxed">
              With over 5 years of experience in WordPress development, I specialize in creating 
              custom solutions that drive business growth. My expertise spans from custom theme 
              development to complex plugin architecture and WooCommerce implementations.
            </p>
            
            <p className="text-lg text-neutral-600 leading-relaxed">
              I believe in clean, maintainable code and user-centric design. Every project is 
              an opportunity to solve unique challenges and deliver exceptional results that 
              exceed client expectations.
            </p>
            
            {/* Skills Chart */}
            <div className="space-y-4 mt-8">
              <h3 className="text-2xl font-semibold text-secondary mb-6">Technical Skills</h3>
              
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="skill-item"
                  >
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-neutral-700">{skill.name}</span>
                      <span className="text-neutral-600">{skill.percentage}%</span>
                    </div>
                    <div className="w-full bg-neutral-200 rounded-full h-3">
                      <motion.div
                        className="skill-bar h-3 rounded-full"
                        initial={{ width: 0 }}
                        animate={isVisible ? { width: `${skill.percentage}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: index * 0.2 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
