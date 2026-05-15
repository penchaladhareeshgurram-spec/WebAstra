import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  CheckCircle2, 
  ChevronDown,
  Code2, 
  Cookie,
  Layout, 
  MessageCircle, 
  MonitorSmartphone,
  Moon,
  Quote, 
  Rocket, 
  Star,
  Sun,
  Zap 
} from 'lucide-react';
import React, { useState, useEffect } from 'react';

const WHATSAPP_NUMBER = "9182047829";

const NavBar = ({ isDark, toggleDark }: { isDark: boolean; toggleDark: () => void }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/80 dark:bg-gray-950/80 backdrop-blur-md shadow-sm py-4 border-b border-gray-100 dark:border-gray-800' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="h-10 w-10 relative rounded-lg overflow-hidden flex items-center justify-center bg-indigo-600/10">
            <img src="/logo.png" alt="Web-Nethra" className="w-full h-full object-cover mix-blend-multiply dark:mix-blend-lighten" />
          </div>
          <span className="font-display font-bold text-xl tracking-tight text-gray-900 dark:text-white">Web-Nethra</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600 dark:text-gray-300">
          <a href="#services" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Services</a>
          <a href="#pricing" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Pricing</a>
          <a href="#testimonials" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Testimonials</a>
        </div>
        <div className="flex items-center gap-4">
          <button 
            onClick={toggleDark} 
            className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors relative overflow-hidden"
            aria-label="Toggle Dark Mode"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={isDark ? 'dark' : 'light'}
                initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                transition={{ duration: 0.2 }}
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </motion.div>
            </AnimatePresence>
          </button>
          <a 
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi! I'm interested in creating a website.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-indigo-600 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-indigo-700 transition-colors hidden sm:flex items-center gap-2 shadow-lg shadow-indigo-600/20"
          >
            <MessageCircle size={18} />
            <span>Let's Talk</span>
          </a>
        </div>
      </div>
    </motion.nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-300/30 dark:bg-indigo-600/20 rounded-full blur-3xl -z-10 mix-blend-multiply dark:mix-blend-lighten" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-300/30 dark:bg-purple-600/20 rounded-full blur-3xl -z-10 mix-blend-multiply dark:mix-blend-lighten" />
      
      <div className="max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-900/40 border border-indigo-100 dark:border-indigo-800 text-indigo-600 dark:text-indigo-400 text-sm font-medium mb-6">
            <Zap size={16} className="fill-indigo-600 dark:fill-indigo-400" />
            <span>Fast & Affordable Websites</span>
          </div>
          <h1 className="text-6xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6 text-gray-900 dark:text-white">
            Stand out online without breaking the bank.
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-lg leading-relaxed">
            We build stunning, high-performance, and responsive websites for Indian businesses. Quality design at prices that make sense.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#pricing"
              className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-8 py-4 rounded-full font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-all flex items-center justify-center gap-2 group"
            >
              View Pricing
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <div className="flex items-center gap-[-8px]">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className={`w-10 h-10 rounded-full border-2 border-white dark:border-gray-950 bg-gray-200 dark:bg-gray-700 flex items-center justify-center -ml-2 first:ml-0 z-[${10-i}] overflow-hidden`}>
                  <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User" />
                </div>
              ))}
              <div className="ml-4 text-sm">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} className="fill-current" />)}
                </div>
                <span className="font-medium text-gray-900 dark:text-white">100+ Happy Clients</span>
              </div>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div className="aspect-square max-w-md mx-auto relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-3xl rotate-3 opacity-20 blur-xl"></div>
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-3xl -rotate-3 transition-transform hover:rotate-0 duration-500">
              <div className="absolute inset-[2px] bg-white dark:bg-gray-900 rounded-[22px] p-6 flex flex-col pt-8">
                {/* Mock Browser Interface */}
                <div className="w-full h-4 relative flex items-center gap-1.5 mb-8">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="flex-1 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 p-6 flex flex-col gap-4">
                  <div className="w-1/3 h-6 bg-gray-200 dark:bg-gray-700 rounded-md"></div>
                  <div className="w-full h-32 bg-indigo-100 dark:bg-indigo-900/50 rounded-lg"></div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="h-20 bg-gray-200 dark:bg-gray-700 rounded-lg"></div>
                    <div className="h-20 bg-gray-200 dark:bg-gray-700 rounded-lg"></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Element */}
            <motion.div 
               animate={{ y: [0, -10, 0] }}
               transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
               className="absolute -right-6 top-1/4 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-xl shadow-gray-200/50 dark:shadow-gray-950/50 border border-gray-100 dark:border-gray-700 flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400">
                <CheckCircle2 size={20} />
              </div>
              <div>
                <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">Status</p>
                <p className="text-sm font-bold text-gray-900 dark:text-white">Live in 3 Days</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Services = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const features = [
    {
      icon: <MonitorSmartphone size={24} />,
      title: "Responsive Design",
      desc: "Looks perfect on mobile phones, tablets, and desktops alike.",
      details: "We build websites that automatically adapt to any screen size. Whether your customers are using the latest smartphone or a large desktop monitor, they will experience a seamless, beautiful interface that is easy to navigate."
    },
    {
      icon: <Rocket size={24} />,
      title: "Lightning Fast Performance",
      desc: "Optimized for speed to keep your visitors engaged and convert better.",
      details: "Website speed is a crucial ranking factor. We optimize images, minify code, and use modern techniques to ensure your site loads instantly, offering a stutter-free experience that prevents visitors from bouncing."
    },
    {
      icon: <Code2 size={24} />,
      title: "Modern Tech Stack",
      desc: "Built with the latest technologies like React and Tailwind CSS.",
      details: "Our tech stack guarantees that your website is future-proof, secure, and easily maintainable. By using the same tools as top tech companies, we deliver high quality at scalable architectures."
    }
  ];

  return (
    <section id="services" className="py-24 bg-white dark:bg-gray-950 transition-colors relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="md:sticky md:top-32 text-left"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-900/40 border border-indigo-100 dark:border-indigo-800 text-indigo-600 dark:text-indigo-400 text-sm font-medium mb-6">
            <Layout size={16} />
            <span>Our Services</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-gray-900 dark:text-white">Everything you need to succeed online.</h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-8">We focus on quality, speed, and beautiful design so you can focus on growing your business. Explore our core services.</p>
        </motion.div>
        
        <div className="flex flex-col gap-4">
          {features.map((f, i) => {
            const isExpanded = expandedIndex === i;
            return (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.1 }}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${isExpanded ? 'border-indigo-200 dark:border-indigo-900/50 bg-indigo-50/50 dark:bg-indigo-900/10 shadow-lg shadow-indigo-100/50 dark:shadow-none' : 'border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50 hover:border-gray-300 dark:hover:border-gray-700'}`}
              >
                <button
                  onClick={() => setExpandedIndex(isExpanded ? null : i)}
                  className="w-full text-left p-6 sm:p-8 flex items-center justify-between gap-4 group"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110 ${isExpanded ? 'bg-indigo-600 text-white' : 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white dark:group-hover:bg-indigo-500 dark:group-hover:text-white'}`}>
                      {f.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">{f.title}</h3>
                    </div>
                  </div>
                  <ChevronDown className={`shrink-0 text-gray-400 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-6 sm:px-8 pb-8 pt-0 text-gray-600 dark:text-gray-400 leading-relaxed border-t border-indigo-100/50 dark:border-indigo-900/20 mt-4">
                        <p className="pt-4">{f.details}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  );
};

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      desc: "Perfect for single-page portfolios and small shops.",
      price: "₹3,999",
      features: [
        "1 Page Responsive Layout",
        "Contact Form Integration",
        "Mobile Optimized",
        "Basic SEO",
        "Delivery in 3 Days"
      ]
    },
    {
      name: "Business",
      desc: "Ideal for growing businesses needing multiple pages.",
      price: "₹8,999",
      isPopular: true,
      features: [
        "Up to 5 Pages Layout",
        "Custom Animations",
        "Lead Capture Forms",
        "Advanced SEO Setup",
        "Google Analytics Integration",
        "Delivery in 7 Days"
      ]
    },
    {
      name: "E-Commerce",
      desc: "Full-scale online store to sell your products.",
      price: "₹19,999",
      features: [
        "Full Online Store Setup",
        "Payment Gateway Integration",
        "Product Management",
        "Admin Dashboard",
        "Domain & Hosting Assistance",
        "Delivery in 14 Days"
      ]
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-gray-50 dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-gray-900 dark:text-white">Affordable Pricing</h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">Transparent pricing with no hidden fees. Get your business online today.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-center">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" }}
              className={`relative bg-white dark:bg-gray-800 rounded-3xl p-8 transition-colors ${
                plan.isPopular 
                  ? 'ring-2 ring-indigo-600 dark:ring-indigo-500 shadow-xl shadow-indigo-600/10 dark:shadow-indigo-900/20 md:-translate-y-4' 
                  : 'border border-gray-200 dark:border-gray-700 shadow-sm'
              }`}
            >
              {plan.isPopular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-indigo-600 text-white px-4 py-1 rounded-full text-sm font-semibold tracking-wide shadow-md">
                  MOST POPULAR
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">{plan.name}</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm h-10">{plan.desc}</p>
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">{plan.price}</span>
                </div>
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 size={20} className="text-indigo-600 dark:text-indigo-400 shrink-0" />
                    <span className="text-gray-600 dark:text-gray-300 font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hi! I'm interested in the ${plan.name} plan for ${plan.price}.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-4 rounded-xl flex items-center justify-center gap-2 font-semibold transition-all ${
                  plan.isPopular
                    ? 'bg-indigo-600 text-white hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-600/20'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                Buy {plan.name} Plan
                <MessageCircle size={18} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    {
      name: "Rahul Sharma",
      role: "Founder, TechGrow",
      content: "The quality of the website delivered is simply outstanding. It represents our brand perfectly and the animations are incredibly smooth. Highly recommend their service!",
      avatar: "https://i.pravatar.cc/150?img=11"
    },
    {
      name: "Priya Desai",
      role: "Boutique Owner",
      content: "I needed a website fast for my new boutique. They delivered a stunning one-page site in just 3 days! It's affordable, looks premium, and works great on mobile.",
      avatar: "https://i.pravatar.cc/150?img=5"
    },
    {
      name: "Vikram Reddy",
      role: "CEO, InnovateX",
      content: "Excellent communication and a very clean UI design process. The e-commerce integration was seamless. Our sales have visibly increased since the redesign.",
      avatar: "https://i.pravatar.cc/150?img=12"
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-white dark:bg-gray-950 transition-colors relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-50 dark:bg-indigo-900/10 rounded-full blur-3xl -z-10" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-gray-900 dark:text-white">What Our Clients Say</h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">Don't just take our word for it—listen to our happy customers.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.15, duration: 0.5, ease: "easeOut" }}
              className="bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 p-8 rounded-3xl relative transition-colors"
            >
              <Quote className="absolute top-6 right-8 text-indigo-100 dark:text-indigo-900/50" size={60} />
              <div className="flex text-yellow-400 mb-6">
                 {[...Array(5)].map((_, i) => <Star key={i} size={16} className="fill-current" />)}
              </div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8 relative z-10 font-medium">"{review.content}"</p>
              
              <div className="flex items-center gap-4">
                <img src={review.avatar} alt={review.name} className="w-12 h-12 rounded-full border-2 border-white dark:border-gray-800 shadow-sm" />
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white">{review.name}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 dark:bg-black text-gray-400 py-12 border-t border-gray-800 dark:border-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8 mb-12">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <div className="h-10 w-10 relative rounded-lg overflow-hidden flex items-center justify-center bg-white/10">
              <img src="/logo.png" alt="Web-Nethra" className="w-full h-full object-cover" />
            </div>
            <span className="font-display font-bold text-xl text-white tracking-tight">Web-Nethra</span>
          </div>
          <p className="max-w-sm">
            Crafting premium, high-performance websites for Indian businesses at affordable prices. Let's build your digital presence.
          </p>
        </div>
        
        <div>
          <h4 className="text-white font-bold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="#services" onClick={(e) => handleSmoothScroll(e, 'services')} className="hover:text-indigo-400 transition-colors">Services</a></li>
            <li><a href="#pricing" onClick={(e) => handleSmoothScroll(e, 'pricing')} className="hover:text-indigo-400 transition-colors">Pricing</a></li>
            <li><a href="#testimonials" onClick={(e) => handleSmoothScroll(e, 'testimonials')} className="hover:text-indigo-400 transition-colors">Testimonials</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-white font-bold mb-4">Contact</h4>
          <ul className="space-y-2">
            <li>India</li>
            <li>hello@web-nethra.in</li>
            <li>+91 82047 829</li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-gray-800 dark:border-gray-900 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
        <p>&copy; {new Date().getFullYear()} Web-Nethra. All rights reserved.</p>
        <p>Built with quality & love.</p>
      </div>
    </footer>
  );
};

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleConsent = (choice: 'accepted' | 'rejected') => {
    localStorage.setItem('cookie-consent', choice);
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 150, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 150, opacity: 0 }}
          transition={{ duration: 0.5, type: 'spring', bounce: 0 }}
          className="fixed bottom-0 sm:bottom-6 sm:left-6 z-[100] w-full sm:max-w-sm p-6 bg-white dark:bg-gray-900 border-t sm:border border-gray-200 dark:border-gray-800 shadow-2xl sm:rounded-2xl"
        >
          <div className="flex items-start gap-4 mb-5">
            <div className="p-2.5 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full shrink-0">
              <Cookie size={24} />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-1.5">We value your privacy</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 w-full">
            <button
              onClick={() => handleConsent('rejected')}
              className="flex-1 py-2.5 px-4 rounded-xl text-sm font-semibold border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            >
              Reject All
            </button>
            <button
              onClick={() => handleConsent('accepted')}
              className="flex-1 py-2.5 px-4 rounded-xl text-sm font-semibold bg-indigo-600 dark:bg-indigo-500 text-white hover:bg-indigo-700 dark:hover:bg-indigo-600 shadow-md shadow-indigo-600/20 transition-all"
            >
              Accept All
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const SplashScreen = ({ onComplete }: { onComplete: () => void }) => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.8, delay: 2.2, ease: "easeInOut" }}
      onAnimationComplete={onComplete}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white dark:bg-gray-950"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col items-center gap-8"
      >
        <div className="w-32 h-32 md:w-48 md:h-48 relative flex items-center justify-center text-indigo-600 dark:text-indigo-400">
          <img src="/logo.png" alt="Web-Nethra Logo" className="w-full h-full object-contain drop-shadow-2xl" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="flex flex-col items-center gap-3"
        >
           <h1 className="font-display font-bold text-3xl md:text-5xl tracking-[0.15em] uppercase text-gray-900 dark:text-white" style={{ letterSpacing: '0.15em' }}>Web-Nethra</h1>
           <div className="h-[1px] w-12 bg-indigo-600 dark:bg-indigo-400 my-1"></div>
           <p className="text-xs md:text-sm tracking-[0.3em] text-indigo-600 dark:text-indigo-400 font-medium uppercase text-center mt-1">We Build Digital Worlds</p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default function App() {
  const [isDark, setIsDark] = useState(false);
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const isDarkMode = savedTheme === 'light' ? false : true;
    
    setIsDark(isDarkMode);
    if (isDarkMode) document.documentElement.classList.add('dark');
  }, []);

  const toggleDark = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);
    localStorage.setItem('theme', nextDark ? 'dark' : 'light');
    if (nextDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <>
      <AnimatePresence>
        {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}
      </AnimatePresence>
      <div className={`min-h-screen selection:bg-indigo-200 selection:text-indigo-900 transition-colors duration-300 ${showSplash ? 'h-screen overflow-hidden' : ''}`}>
        <NavBar isDark={isDark} toggleDark={toggleDark} />
      <main>
        <Hero />
        <Services />
        <Pricing />
        <Testimonials />
      </main>
      <Footer />
      <CookieBanner />
      </div>
    </>
  );
}
