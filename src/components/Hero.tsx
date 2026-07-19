import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';

export default function Hero() {
  const floatingIcons = [
    { name: 'React', color: '#61DAFB' },
    { name: 'Node.js', color: '#339933' },
    { name: 'Tailwind', color: '#38B2AC' },
    { name: 'MongoDB', color: '#47A248' },
    { name: 'JS', color: '#F7DF1E' },
    { name: 'TS', color: '#3178C6' },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden z-10">
      <div className="container mx-auto px-6 relative">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block px-4 py-2 rounded-full glassmorphism text-brand font-medium text-sm mb-6 border-brand/20"
            >
              Available for new opportunities
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-tight"
            >
              Hi, I'm <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-light to-brand-dark">Naresh Kumar</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-400 mb-8 max-w-2xl mx-auto lg:mx-0 font-light"
            >
              Full Stack Developer | MCA Student
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="text-base text-gray-500 mb-10 max-w-xl mx-auto lg:mx-0"
            >
              I build premium, futuristic web experiences with clean code and smooth animations. Passionate about bringing creative ideas to life on the browser.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <a href="#contact" className="group relative px-8 py-4 bg-brand text-white font-medium rounded-full overflow-hidden w-full sm:w-auto text-center box-glow transition-transform hover:scale-105 active:scale-95">
                <div className="absolute inset-0 w-full h-full bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                <span className="relative flex items-center justify-center gap-2">
                  Hire Me <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
              <a href="/Naresh_Resume.pdf" download="Naresh_Kumar_Resume.pdf" className="group px-8 py-4 glassmorphism text-white font-medium rounded-full hover:bg-white/10 transition-all w-full sm:w-auto text-center hover:scale-105 active:scale-95 border border-white/20 flex items-center justify-center gap-2">
                Download Resume <Download size={18} className="group-hover:-translate-y-1 transition-transform" />
              </a>
            </motion.div>
          </div>

          {/* Right Image/3D Element */}
          <div className="flex-1 relative w-full max-w-lg lg:max-w-none aspect-square">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative w-full h-full flex items-center justify-center"
            >
              {/* Orbiting Icons */}
              <motion.div 
                className="absolute inset-0 z-20 pointer-events-none"
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              >
                {floatingIcons.map((icon, index) => {
                  const angle = (index / floatingIcons.length) * 360;
                  return (
                    <div
                      key={index}
                      className="absolute top-1/2 left-1/2 w-16 h-16 -ml-8 -mt-8 flex items-center justify-center font-bold glassmorphism rounded-xl shadow-lg border-white/10"
                      style={{ 
                        transform: `rotate(${angle}deg) translateX(min(35vw, 220px)) rotate(-${angle}deg)`, 
                        color: icon.color 
                      }}
                    >
                      <motion.div
                        animate={{ rotate: -360 }}
                        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                        className="text-sm font-semibold tracking-wider"
                      >
                         {icon.name.substring(0, 4)}
                      </motion.div>
                    </div>
                  );
                })}
              </motion.div>

              {/* Main 3D Illustration */}
              <motion.div 
                className="w-full h-full rounded-full relative z-10 flex items-center justify-center"
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="absolute inset-0 bg-brand/20 blur-[100px] rounded-full scale-75" />
                <img 
                  src="/developer.png" 
                  alt="3D Developer" 
                  className="w-3/4 h-3/4 object-contain relative z-10 drop-shadow-[0_0_50px_rgba(255,107,0,0.3)]"
                />
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
