import { Code, Briefcase, MessageSquare, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-10 border-t border-white/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-brand/5 blur-[100px] pointer-events-none" />
      <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-2xl font-bold text-white tracking-tighter">
          N<span className="text-brand">.</span>
        </div>
        
        <p className="text-gray-400 text-sm text-center md:text-left">
          © {new Date().getFullYear()} Naresh Kumar. All rights reserved.
        </p>

        <div className="flex gap-4">
          {[
            { icon: <Code size={20} />, href: 'https://github.com' },
            { icon: <Briefcase size={20} />, href: 'https://www.linkedin.com/in/naresh-kumar-b72947329?' },
            { icon: <MessageSquare size={20} />, href: 'https://twitter.com' },
            { icon: <Mail size={20} />, href: 'mailto:nk912463@gmail.com' },
          ].map((social, i) => (
            <a
              key={i}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-brand/20 hover:border-brand/50 transition-all duration-300"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
