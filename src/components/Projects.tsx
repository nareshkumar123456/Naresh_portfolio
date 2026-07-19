import { motion } from 'framer-motion';
import { ExternalLink, Code } from 'lucide-react';

const projects = [
  {
    title: 'Hotel Management System',
    description: 'Developed a web-based hotel management system to streamline booking and administrative operations. Implemented features such as room booking, customer management, and availability tracking.',
    image: '/hotel_management.png',
    tags: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Node.js'],
    demo: '#',
    github: '#',
  },
  {
    title: 'AI Deepfake Detection System',
    description: 'Built an AI-based system to detect and analyze deepfake content. Focused on identifying manipulated images/videos using intelligent processing techniques. Developed an interactive interface.',
    image: '/ai_deepfake.png',
    tags: ['AI', 'Python', 'Image Processing'],
    demo: '#',
    github: '#',
  },
  {
    title: 'Store Website Application',
    description: 'Created an online store website with product listing and navigation features. Focused on responsive design and smooth user experience.',
    image: '/store_website.png',
    tags: ['React.js', 'Responsive Design'],
    demo: '#',
    github: 'https://github.com/nareshkumar123456/Gadgetgalaxy-store',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Featured <span className="text-brand">Projects</span></h2>
          <div className="w-20 h-1 bg-brand mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card overflow-hidden group hover:-translate-y-2 transition-transform duration-500"
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-brand/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-brand transition-colors">{project.title}</h3>
                <p className="text-gray-400 mb-6 text-sm line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs font-medium px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a href={project.demo} className="flex-1 flex items-center justify-center gap-2 py-2 rounded-full bg-brand/10 text-brand hover:bg-brand hover:text-white transition-colors border border-brand/20">
                    <ExternalLink size={16} /> Live Demo
                  </a>
                  <a href={project.github} className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 text-gray-300 hover:text-white hover:bg-white/20 transition-colors border border-white/10">
                    <Code size={18} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
