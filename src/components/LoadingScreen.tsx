import { motion } from 'framer-motion';

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  return (
    <motion.div
      className="fixed inset-0 z-[200] bg-background flex flex-col items-center justify-center"
      initial={{ y: 0 }}
      exit={{ y: '-100%' }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
    >
      <motion.div
        className="text-4xl md:text-6xl font-bold text-white flex gap-2"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-brand">N</span>aresh<span className="text-brand">.</span>
      </motion.div>
      <motion.div 
        className="w-48 h-1 bg-white/10 mt-8 rounded-full overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <motion.div 
          className="h-full bg-brand"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
          onAnimationComplete={onComplete}
        />
      </motion.div>
    </motion.div>
  );
}
