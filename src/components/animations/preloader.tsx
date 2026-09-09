import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = "";
    }, 2000); 
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background overflow-hidden"
        >
          <div className="relative flex flex-col items-center justify-center">
            
            {/* Logo fading in */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative z-10 mb-8"
            >
              <img
                src="/logo.png"
                alt="Skydot Infotech"
                className="w-48 md:w-64 h-auto object-contain dark:brightness-110"
              />
            </motion.div>

            {/* Simple minimalist 3 pulsing dots */}
            <div className="flex items-center gap-1.5 mt-2">
              <motion.div
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 1.4, repeat: Infinity, delay: 0 }}
                className="w-2 h-2 rounded-full bg-primary"
              />
              <motion.div
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 1.4, repeat: Infinity, delay: 0.2 }}
                className="w-2 h-2 rounded-full bg-primary/80"
              />
              <motion.div
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 1.4, repeat: Infinity, delay: 0.4 }}
                className="w-2 h-2 rounded-full bg-primary/60"
              />
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
