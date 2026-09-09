import { motion } from "framer-motion";
import { Counter } from "@/components/animations/counter";

export function MetricsSection() {
  const metrics = [
    { label: "Years of Experience", value: 10, suffix: "+" },
    { label: "Projects Delivered", value: 500, suffix: "+" },
    { label: "Clients Worldwide", value: 250, suffix: "+" },
    { label: "Technology Solutions", value: 30, suffix: "+" },
  ];

  return (
    <section className="py-12 bg-muted/30 border-b border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center text-xs text-muted-foreground/60 mb-6 font-mono">
          <span>[CONTENT TO VERIFY - UPDATE WITH ACTUAL VERIFIED METRICS]</span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-x-0 md:divide-x divide-border">
          {metrics.map((metric, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center justify-center text-center px-4"
            >
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-2 tracking-tight">
                <Counter value={metric.value} suffix={metric.suffix} />
              </div>
              <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">{metric.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
