import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-24 relative z-10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">About <span className="text-brand">Me</span></h2>
          <div className="w-20 h-1 bg-brand mx-auto rounded-full" />
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <motion.div 
            className="flex-1 relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-card p-2 relative overflow-hidden group rounded-3xl">
              <div className="absolute inset-0 bg-brand/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
              <img 
                src="/naresh.jpeg" 
                alt="Naresh Kumar" 
                className="w-full h-auto rounded-2xl grayscale group-hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </motion.div>

          <motion.div 
            className="flex-1"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-card p-8 md:p-10 text-gray-300 space-y-6">
              <h3 className="text-2xl font-bold text-white">MCA Student & Full Stack Developer</h3>
              <p className="leading-relaxed">
                Enthusiastic and detail-oriented MCA student with strong full-stack development skills. Proficient in building responsive and dynamic web applications using HTML, CSS, JavaScript, React.js, Node.js, and PHP. Experienced in both frontend and backend development, with a good understanding of database management and web technologies.
              </p>
              <p className="leading-relaxed">
                Passionate about creating efficient, scalable solutions and eager to contribute to real-world projects while growing as a full-stack developer.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-white/10">
                <div>
                  <p className="text-brand text-sm mb-1">Name</p>
                  <p className="font-medium text-white">Naresh Kumar</p>
                </div>
                <div>
                  <p className="text-brand text-sm mb-1">Education</p>
                  <p className="font-medium text-white">MCA</p>
                </div>
                <div>
                  <p className="text-brand text-sm mb-1">Location</p>
                  <p className="font-medium text-white">Bengaluru</p>
                </div>
                <div>
                  <p className="text-brand text-sm mb-1">Email</p>
                  <p className="font-medium text-white break-all">nk912463@gmail.com</p>
                </div>
                <div>
                  <p className="text-brand text-sm mb-1">Phone</p>
                  <p className="font-medium text-white">8431163840</p>
                </div>
                <div>
                  <p className="text-brand text-sm mb-1">Languages</p>
                  <p className="font-medium text-white">English, Kannada, Telugu, Hindi</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
