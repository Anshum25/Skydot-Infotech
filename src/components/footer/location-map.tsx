import React from "react";
import { motion } from "framer-motion";

export function LocationMap() {
  return (
    <div className="relative w-full max-w-[600px] mt-4 mb-5 bg-transparent lg:scale-110 lg:origin-left">
      {/* Map image */}
      <img
        src="/world.svg"
        alt="World Map"
        className="w-full h-auto object-contain opacity-50 dark:opacity-30 pointer-events-none select-none filter invert dark:invert-0"
      />

      {/* Pin point for India */}
      {/* Adjusted positions: approx 70% left, 45% top for India in typical world maps */}
      <div className="absolute top-[48%] left-[71.5%] -translate-x-1/2 -translate-y-1/2">
        {/* Glow effect */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 0.4, scale: 1 }}
          transition={{ 
            duration: 2, 
            repeat: Infinity, 
            repeatType: "reverse" 
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-2 bg-[#1677FF] rounded-full blur-[4px]" 
        />

        {/* The dot */}
        <div className="relative w-1.5 h-1.5 bg-[#1677FF] rounded-full shadow-[0_0_8px_#1677FF]" />

        {/* The vertical line */}
        <motion.div 
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "48px", opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute bottom-[2px] left-1/2 -translate-x-1/2 w-[1px] bg-gradient-to-t from-[#1677FF] to-transparent origin-bottom" 
        />

        {/* The tooltip */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.5 }}
          className="absolute bottom-[52px] left-1/2 -translate-x-1/2 bg-zinc-800/90 backdrop-blur-sm border border-white/10 text-white text-[10px] font-medium px-3 py-1 rounded-full whitespace-nowrap shadow-xl"
        >
          We are here
        </motion.div>
      </div>
    </div>
  );
}
