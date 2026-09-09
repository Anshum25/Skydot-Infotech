import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface AnimatedTextProps {
  text: string;
  className?: string;
  once?: boolean;
}

export function AnimatedText({ text, className, once = true }: AnimatedTextProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: "-10% 0px" });

  const wordAnimation = {
    hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as any },
    },
  };

  return (
    <span ref={ref} className={className}>
      <span className="sr-only">{text}</span>
      <motion.span
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ staggerChildren: 0.1 }}
        aria-hidden
        className="inline-flex flex-wrap"
      >
        {text.split(" ").map((word, wordIndex) => (
          <span key={wordIndex} className="inline-block overflow-hidden pr-2 sm:pr-3 pb-1">
            <motion.span
              variants={wordAnimation}
              className="inline-block"
            >
              {word}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </span>
  );
}
