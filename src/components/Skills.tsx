import { motion } from 'framer-motion';

const skills = [
  { name: 'HTML', level: 95 },
  { name: 'CSS', level: 90 },
  { name: 'JavaScript', level: 85 },
  { name: 'React.js', level: 85 },
  { name: 'Node.js', level: 80 },
  { name: 'PHP', level: 75 },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative z-10 bg-black/20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">My <span className="text-brand">Skills</span></h2>
          <div className="w-20 h-1 bg-brand mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="glass-card p-6 border-brand/10 hover:border-brand/30 transition-all duration-300 group"
            >
              <div className="flex justify-between items-center mb-4">
                <h4 className="text-lg font-bold text-white group-hover:text-brand transition-colors">{skill.name}</h4>
                <span className="text-brand font-mono">{skill.level}%</span>
              </div>
              <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-gradient-to-r from-brand-dark to-brand-light rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2 + (index * 0.05) }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
