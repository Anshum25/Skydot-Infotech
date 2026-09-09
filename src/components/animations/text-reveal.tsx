import { motion, useReducedMotion, Variants } from "framer-motion";
import { cn } from "@/lib/utils";

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  once?: boolean;
}

export function TextReveal({
  text,
  className = "",
  delay = 0,
  once = true,
}: TextRevealProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <p className={className}>{text}</p>;
  }

  // Split text by lines (e.g. keeping line breaks if specified)
  const lines = text.split("\n");

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: delay,
      },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      className={cn("overflow-hidden", className)}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once, margin: "-10%" }}
    >
      {lines.map((line, index) => (
        <div key={index} className="overflow-hidden">
          <motion.div variants={item}>
            {line}
            {/* Add a space after each line except the last to keep spacing if they wrap naturally */}
            {index !== lines.length - 1 && "\n"}
          </motion.div>
        </div>
      ))}
    </motion.div>
  );
}
