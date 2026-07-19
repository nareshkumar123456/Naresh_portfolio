import { motion } from 'framer-motion';

const timeline = [
  {
    year: 'Present',
    title: 'Masters of computer application (M.C.A)',
    organization: 'RV institute of technology and management',
    description: 'Pursuing Master of Computer Applications, focusing on advanced software engineering, database design, and modern web development.',
  },
  {
    year: 'Completed',
    title: 'Bachelors of computer application (B.C.A)',
    organization: 'AMES SCIENCE DEGREE COLLEGE',
    description: 'Graduated with a strong foundation in computer applications and software development.',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative z-10 bg-black/20">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Experience & <span className="text-brand">Education</span></h2>
          <div className="w-20 h-1 bg-brand mx-auto rounded-full" />
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-0.5 bg-white/10 md:-translate-x-1/2" />

          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative flex items-center justify-between mb-12 md:mb-8 w-full ${
                index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-[15px] md:left-1/2 w-4 h-4 rounded-full bg-brand md:-translate-x-1/2 z-10 box-glow" />

              {/* Content Box */}
              <div className="w-full pl-12 md:pl-0 md:w-[calc(50%-2rem)]">
                <div className={`glass-card p-6 border-white/10 hover:border-brand/30 transition-colors group ${
                  index % 2 === 0 ? 'md:text-left' : 'md:text-right'
                }`}>
                  <span className="text-brand text-sm font-bold tracking-wider mb-2 block">{item.year}</span>
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-brand transition-colors">{item.title}</h3>
                  <h4 className="text-gray-400 font-medium mb-4">{item.organization}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
