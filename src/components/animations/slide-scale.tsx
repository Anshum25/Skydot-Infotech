import { motion } from "framer-motion";

export function SlideScale() {
  const layers = [1, 2, 3, 4];
  
  return (
    <div className="w-full h-full flex items-center justify-center relative perspective-[1000px]">
      <motion.div 
        className="relative w-64 h-64 md:w-80 md:h-80"
        style={{ transformStyle: "preserve-3d" }}
      >
        {layers.map((layer, i) => (
          <motion.div
            key={layer}
            className="absolute inset-0 border-2 border-primary/20 rounded-[40px] flex flex-col items-center justify-center bg-background/50 backdrop-blur-sm"
            style={{ transform: `translateZ(${i * -80}px) rotateX(60deg) rotateZ(45deg)` }}
            animate={{ 
              z: [i * -80, i * -80 + 40, i * -80],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}
          >
             {/* Abstract data lines inside the platform */}
             <div className="w-1/2 h-1 bg-primary/40 rounded-full mb-4" />
             <div className="w-3/4 h-1 bg-[var(--skydot-orange)]/40 rounded-full" />
             
             {/* Glow effect */}
             <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent rounded-[40px]" />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
