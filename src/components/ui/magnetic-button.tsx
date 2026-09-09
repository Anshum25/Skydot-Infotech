import { useRef, useState } from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface MagneticButtonProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
}

export function MagneticButton({
  children,
  className,
  intensity = 0.2, // Default intensity (20% of mouse position)
  ...props
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const { clientX, clientY } = e;
    const { width, height, left, top } = ref.current.getBoundingClientRect();
    
    // Calculate distance from center of the button
    const x = (clientX - (left + width / 2)) * intensity;
    const y = (clientY - (top + height / 2)) * intensity;

    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    // Reset position smoothly when mouse leaves
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{
        type: "spring",
        stiffness: 150,
        damping: 15,
        mass: 0.1,
      }}
      className={cn("relative inline-flex items-center justify-center cursor-pointer", className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}
