import { motion } from "framer-motion";
import { Building2, Hexagon, Layers, Cpu, Globe, Boxes } from "lucide-react";
import { Counter } from "@/components/animations/counter";

export function TrustSection() {
  const logos = [
    { icon: Building2, name: "Enterprise Corp" },
    { icon: Hexagon, name: "TechGlobal" },
    { icon: Layers, name: "DataSystems" },
    { icon: Cpu, name: "CloudWorks" },
    { icon: Globe, name: "GlobalTrade" },
    { icon: Boxes, name: "LogisticsPlus" },
  ];

  const metrics = [
    { label: "Years of Experience", value: 10, suffix: "+" },
    { label: "Projects Delivered", value: 500, suffix: "+" },
    { label: "Clients Worldwide", value: 250, suffix: "+" },
    { label: "Technology Solutions", value: 30, suffix: "+" },
  ];

  return (
    <section className="py-24 bg-background text-foreground border-y border-border relative overflow-hidden">
      {/* Subtle primary glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* Client Logos */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center mb-16"
        >
          <p className="text-sm font-medium text-muted-foreground mb-10 uppercase tracking-widest text-center">
            Trusted by Industry-Leading Organizations
            <br />
            <span className="text-xs normal-case tracking-normal mt-2 block text-muted-foreground/80">Delivering mission-critical technology solutions across enterprise, manufacturing, and tech sectors.</span>
          </p>
          {/* Marquee Container */}
          <div className="w-full overflow-hidden relative mt-4 group">
            {/* Gradient Fades for edges */}
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
            
            <div className="flex w-max animate-[marquee_30s_linear_infinite] group-hover:[animation-play-state:paused]">
              {/* Double the logos to create the infinite scroll effect */}
              {[...logos, ...logos, ...logos, ...logos].map((logo, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 mx-8 md:mx-12 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-default"
                >
                  <logo.icon className="w-8 h-8 text-muted-foreground hover:text-primary transition-colors" />
                  <span className="font-bold text-foreground text-lg tracking-tight whitespace-nowrap">
                    {logo.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent mb-24" />

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
          {metrics.map((metric, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="flex flex-col items-center justify-center text-center relative group"
            >
              <div className="absolute inset-0 bg-primary/5 blur-xl rounded-full scale-0 group-hover:scale-150 transition-transform duration-500" />
              <div className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-3 tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-primary via-[var(--skydot-orange)] to-primary bg-[length:200%_auto] animate-gradient-x relative z-10 drop-shadow-sm">
                <Counter value={metric.value} suffix={metric.suffix} />
              </div>
              <span className="text-sm font-medium text-muted-foreground uppercase tracking-widest relative z-10">{metric.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
