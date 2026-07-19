import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Product Manager',
    company: 'TechCorp',
    content: 'Naresh is an exceptional developer. He delivered our project ahead of schedule and the code quality was outstanding. His attention to detail and design sense is rare for a full-stack developer.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
  },
  {
    name: 'Michael Chen',
    role: 'CTO',
    company: 'StartupX',
    content: 'Working with Naresh was a great experience. He quickly understood our complex requirements and built a scalable solution. His expertise in React and Node.js is truly impressive.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
  },
  {
    name: 'Emily Davis',
    role: 'Lead Designer',
    company: 'Creative Agency',
    content: 'I rarely find developers who can implement my designs with such pixel-perfect accuracy. Naresh brought our concepts to life with beautiful animations and a flawless user experience.',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-24 relative z-10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Client <span className="text-brand">Testimonials</span></h2>
          <div className="w-20 h-1 bg-brand mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          <div className="absolute top-1/2 -left-4 md:-left-12 -translate-y-1/2 z-20 hidden md:block">
            <button onClick={prev} className="w-12 h-12 rounded-full glassmorphism flex items-center justify-center text-white hover:bg-brand/20 transition-colors border border-white/10 hover:border-brand/50">
              <ChevronLeft size={24} />
            </button>
          </div>
          <div className="absolute top-1/2 -right-4 md:-right-12 -translate-y-1/2 z-20 hidden md:block">
            <button onClick={next} className="w-12 h-12 rounded-full glassmorphism flex items-center justify-center text-white hover:bg-brand/20 transition-colors border border-white/10 hover:border-brand/50">
              <ChevronRight size={24} />
            </button>
          </div>

          <div className="glass-card overflow-hidden relative min-h-[350px] md:min-h-[300px]">
            <Quote className="absolute top-8 left-8 text-white/5" size={120} />
            
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 p-8 md:p-12 flex flex-col items-center justify-center text-center z-10"
              >
                <p className="text-lg md:text-xl text-gray-300 italic mb-8 leading-relaxed max-w-2xl">
                  "{testimonials[currentIndex].content}"
                </p>
                <div className="flex items-center gap-4">
                  <img 
                    src={testimonials[currentIndex].avatar} 
                    alt={testimonials[currentIndex].name} 
                    className="w-14 h-14 rounded-full border-2 border-brand"
                  />
                  <div className="text-left">
                    <h4 className="text-white font-bold">{testimonials[currentIndex].name}</h4>
                    <p className="text-brand text-sm">{testimonials[currentIndex].role} at {testimonials[currentIndex].company}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  idx === currentIndex ? 'w-8 bg-brand' : 'bg-white/20 hover:bg-white/40'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
