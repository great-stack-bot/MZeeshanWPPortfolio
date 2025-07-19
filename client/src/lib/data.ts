export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  tags: string[];
  liveUrl: string;
  codeUrl: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  color: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  image: string;
}

export interface Skill {
  name: string;
  percentage: number;
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: "1",
    title: "Premium Fashion Store",
    description: "Custom WooCommerce store with advanced filtering, payment integration, and inventory management.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
    category: "ecommerce",
    tags: ["WooCommerce", "Payment Gateway", "Responsive"],
    liveUrl: "#",
    codeUrl: "#"
  },
  {
    id: "2",
    title: "Corporate Consulting",
    description: "Multi-page business website with custom post types, advanced SEO, and contact forms.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
    category: "business",
    tags: ["Custom Theme", "SEO Optimized", "Multi-page"],
    liveUrl: "#",
    codeUrl: "#"
  },
  {
    id: "3",
    title: "Creative Agency Portfolio",
    description: "Dynamic portfolio with filtering, lightbox galleries, and smooth animations.",
    image: "https://images.unsplash.com/photo-1561736778-92e52a7769ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
    category: "portfolio",
    tags: ["Gallery", "Animations", "Creative"],
    liveUrl: "#",
    codeUrl: "#"
  },
  {
    id: "4",
    title: "Booking Management Plugin",
    description: "Custom WordPress plugin for appointment booking with calendar integration and notifications.",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
    category: "custom",
    tags: ["Custom Plugin", "Calendar", "Booking System"],
    liveUrl: "#",
    codeUrl: "#"
  },
  {
    id: "5",
    title: "Fine Dining Restaurant",
    description: "Restaurant website with online menu, reservation system, and delivery integration.",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
    category: "business",
    tags: ["Restaurant", "Online Menu", "Reservations"],
    liveUrl: "#",
    codeUrl: "#"
  },
  {
    id: "6",
    title: "Online Learning Platform",
    description: "Custom LMS with course management, progress tracking, and student dashboards.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
    category: "custom",
    tags: ["LMS", "Course Management", "E-learning"],
    liveUrl: "#",
    codeUrl: "#"
  }
];

export const services: Service[] = [
  {
    id: "1",
    title: "Custom Theme Development",
    description: "Pixel-perfect, responsive WordPress themes built from scratch to match your unique design and brand requirements.",
    icon: "paintbrush",
    features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Cross-browser Compatible"],
    color: "blue"
  },
  {
    id: "2",
    title: "Custom Plugin Development",
    description: "Tailored WordPress plugins to extend functionality and meet your specific business requirements.",
    icon: "puzzle",
    features: ["Custom Functionality", "Database Integration", "Admin Dashboard", "Update Safe"],
    color: "yellow"
  },
  {
    id: "3",
    title: "WooCommerce Solutions",
    description: "Complete e-commerce solutions with custom features, payment gateways, and inventory management.",
    icon: "shopping-cart",
    features: ["Payment Integration", "Inventory Management", "Custom Checkout", "Shipping Options"],
    color: "green"
  },
  {
    id: "4",
    title: "Performance Optimization",
    description: "Speed up your WordPress site with advanced optimization techniques and best practices.",
    icon: "rocket",
    features: ["Page Speed Optimization", "Database Optimization", "Caching Setup", "Image Optimization"],
    color: "purple"
  },
  {
    id: "5",
    title: "API Integration",
    description: "Connect your WordPress site with third-party services and APIs for enhanced functionality.",
    icon: "code",
    features: ["REST API Development", "Third-party Integration", "Data Synchronization", "Webhook Setup"],
    color: "blue"
  },
  {
    id: "6",
    title: "Maintenance & Support",
    description: "Ongoing maintenance and support to keep your WordPress site secure, updated, and running smoothly.",
    icon: "wrench",
    features: ["Regular Updates", "Security Monitoring", "Backup Management", "24/7 Support"],
    color: "red"
  }
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "John Smith",
    role: "CEO",
    company: "TechStart Inc.",
    content: "Muhammad delivered an exceptional WordPress site that exceeded our expectations. His attention to detail and technical expertise made the entire process smooth.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150"
  },
  {
    id: "2",
    name: "Sarah Johnson",
    role: "Marketing Director",
    company: "Fashion Hub",
    content: "Working with Muhammad was a game-changer for our e-commerce business. The custom WooCommerce solution boosted our sales by 40%.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150"
  },
  {
    id: "3",
    name: "Michael Davis",
    role: "Owner",
    company: "Bella Vista Restaurant",
    content: "The custom plugin Muhammad developed for our booking system perfectly fits our workflow. Highly professional and reliable.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150"
  },
  {
    id: "4",
    name: "Emily Chen",
    role: "Digital Marketing Manager",
    company: "Growth Agency",
    content: "Muhammad's expertise in WordPress optimization significantly improved our site speed. Our PageSpeed score jumped from 65 to 95!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150"
  },
  {
    id: "5",
    name: "David Rodriguez",
    role: "Education Director",
    company: "LearnTech",
    content: "The learning management system Muhammad built for us is intuitive and feature-rich. Our students love the interface!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150"
  },
  {
    id: "6",
    name: "Alex Thompson",
    role: "Creative Director",
    company: "Design Studio",
    content: "Outstanding work on our portfolio website. Muhammad captured our brand perfectly and delivered ahead of schedule.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150"
  }
];

export const skills: Skill[] = [
  { name: "WordPress/PHP", percentage: 95 },
  { name: "JavaScript/jQuery", percentage: 90 },
  { name: "WooCommerce", percentage: 88 },
  { name: "React/Modern JS", percentage: 85 },
  { name: "UI/UX Design", percentage: 80 }
];
