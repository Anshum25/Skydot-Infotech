import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { buttonVariants } from "@/components/ui/button";

export function ContactCtaSection() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Moves right to left
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  return (
    <section ref={containerRef} className="relative py-32 md:py-48 overflow-hidden bg-[#020617] border-t border-white/10">

      {/* Parallax Background Text */}
      <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full overflow-hidden pointer-events-none select-none z-0">
        <motion.div
          style={{ x }}
          className="whitespace-nowrap text-[15vw] font-black text-white/[0.03] tracking-tighter"
        >
          LET'S BUILD SOMETHING GREAT
        </motion.div>
      </div>

      {/* Ambient Glow */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-[var(--skydot-orange)]/10 blur-[150px] rounded-full mix-blend-screen pointer-events-none" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 backdrop-blur-md px-4 py-1.5 text-sm font-medium text-white mb-8">
            <span className="flex h-2 w-2 rounded-full bg-[var(--skydot-orange)] mr-2 animate-pulse"></span>
            Start a Conversation
          </div>

          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-8 leading-tight">
            Ready to Discuss <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-white/50">Your Next Project?</span>
          </h2>

          <p className="text-xl text-white/60 mb-12 leading-relaxed max-w-2xl mx-auto font-light">
            Connect with our technical team to evaluate your requirements, map out solutions, and accelerate your digital transformation.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              to="/contact"
              className={buttonVariants({
                size: "lg",
                className: "h-14 px-10 text-base rounded-full shadow-[0_0_30px_rgba(249,115,22,0.3)] bg-[var(--skydot-orange)] hover:bg-[#EA580C] text-white transition-all hover:scale-105"
              })}
            >
              Contact Us Today
            </Link>
            <Link
              to="/solutions"
              className={buttonVariants({
                size: "lg",
                variant: "outline",
                className: "h-14 px-10 text-base rounded-full border-white/20 bg-white/5 backdrop-blur text-white hover:bg-white/10 transition-colors"
              })}
            >
              Explore Solutions
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
