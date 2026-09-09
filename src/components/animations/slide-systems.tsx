import { motion } from "framer-motion";

export function SlideSystems() {
  const grid = Array.from({ length: 25 }, (_, i) => i);
  
  return (
    <div className="w-full h-full flex items-center justify-center relative perspective-[1000px]">
      <motion.div 
        className="grid grid-cols-5 gap-4"
        style={{ transform: "rotateX(60deg) rotateZ(-45deg)" }}
      >
        {grid.map((i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0.1, z: 0 }}
            animate={{ 
              opacity: [0.1, 0.8, 0.1],
              z: [0, 30, 0]
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              delay: (i % 5) * 0.15 + Math.floor(i / 5) * 0.15,
              ease: "easeInOut"
            }}
            className="w-10 h-10 md:w-16 md:h-16 bg-primary/20 border border-primary/50 rounded-sm shadow-[0_0_15px_rgba(30,136,229,0.2)]"
          />
        ))}
      </motion.div>
    </div>
  );
}
