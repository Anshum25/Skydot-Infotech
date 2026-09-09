import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Search, Code, Rocket } from "lucide-react";
import { ScrollReveal } from "@/components/animations/scroll-reveal";

export function ProcessSection() {
  const steps = [
    { num: "01", icon: Search, title: "Discovery & Architecture", desc: "Defining technical requirements and system design." },
    { num: "02", icon: Code, title: "Engineering & Development", desc: "Agile development with rigorous code quality standards." },
    { num: "03", icon: Rocket, title: "Deployment & Integration", desc: "Seamless integration into your existing infrastructure." }
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="py-24 md:py-32 bg-muted/30 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">

        <div className="mb-20 flex flex-col items-center text-center max-w-3xl mx-auto">
          <ScrollReveal>
            <div className="inline-flex items-center rounded-full border border-border bg-background shadow-sm px-3 py-1 text-xs font-medium text-muted-foreground mb-4">
              Our Methodology
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
              How <span className="text-primary">We Work.</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              A structured, predictable methodology for successful project delivery.
            </p>
          </ScrollReveal>
        </div>

        {/* Vertical Process Timeline */}
        <div ref={containerRef} className="relative max-w-3xl mx-auto py-10">

          {/* Background Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

          {/* Scroll Progress Line */}
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-8 md:left-1/2 top-0 w-[2px] bg-primary md:-translate-x-1/2 origin-top"
          />

          <div className="flex flex-col gap-16 md:gap-24 relative z-10">
            {steps.map((step, i) => {
              const isEven = i % 2 === 0;
              return (
                <div
                  key={i}
                  className={`flex flex-col md:flex-row items-start md:items-center gap-8 ${isEven ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Empty space for desktop layout balance */}
                  <div className="hidden md:block w-1/2" />

                  {/* Node */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 flex items-center justify-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.5, type: "spring", bounce: 0.5 }}
                      className="w-16 h-16 rounded-2xl bg-background border border-border shadow-sm flex flex-col items-center justify-center text-primary relative group"
                    >
                      <step.icon className="w-5 h-5 mb-0.5 text-muted-foreground group-hover:text-primary transition-colors" />
                      <span className="text-[10px] font-bold text-muted-foreground group-hover:text-primary transition-colors">{step.num}</span>
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className={`w-full md:w-1/2 pl-24 md:pl-0 ${isEven ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'}`}>
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -20 : 20, y: 20 }}
                      whileInView={{ opacity: 1, x: 0, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.6 }}
                      className="bg-card border border-border p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow group"
                    >
                      <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">{step.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
