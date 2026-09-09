import { motion } from "framer-motion";
import { ShieldCheck, Zap, Users, CodeSquare } from "lucide-react";

export function WhySkydotSection() {
  const reasons = [
    {
      title: "Engineering Rigor",
      description: "We don't cut corners. Our code is clean, our architectures are scalable, and our deployments are secure by design.",
      icon: CodeSquare,
    },
    {
      title: "Domain Expertise",
      description: "We understand the nuanced operational challenges of highly regulated industries like government and railways.",
      icon: Users,
    },
    {
      title: "Reliable Execution",
      description: "Predictable delivery timelines with transparent project management and agile communication.",
      icon: Zap,
    },
    {
      title: "Enterprise Security",
      description: "Robust data protection, role-based access controls, and strict compliance with industry security standards.",
      icon: ShieldCheck,
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-muted/30 border-b border-border relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center rounded-full border border-border bg-white dark:bg-white/5 shadow-sm px-3 py-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground dark:text-white/70 mb-6">
              Why Skydot
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter text-foreground mb-6 leading-tight">
              A technology partner <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[var(--skydot-orange)]">
                you can rely on.
              </span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-xl font-medium">
              We act as an extension of your team. Our focus is on long-term partnerships, delivering technology that scales seamlessly as your business grows. We prioritize practical innovation over fleeting tech trends.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            {reasons.map((reason, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative p-[1px] rounded-3xl overflow-hidden group shadow-lg shadow-black/5 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500"
              >
                {/* Animated Rotating Borders */}
                <div className="absolute inset-0 bg-[conic-gradient(from_0deg,transparent_0_340deg,var(--skydot-orange)_360deg)] opacity-0 group-hover:opacity-100 group-hover:animate-spin transition-opacity duration-500" style={{ animationDuration: '3s' }} />
                <div className="absolute inset-0 bg-[conic-gradient(from_180deg,transparent_0_340deg,var(--primary)_360deg)] opacity-0 group-hover:opacity-100 group-hover:animate-spin transition-opacity duration-500" style={{ animationDuration: '3s' }} />
                
                {/* Inner Card Content */}
                <div className="relative h-full p-8 rounded-[23px] bg-background border border-black/5 dark:border-white/10 z-10 flex flex-col">
                  <div className="w-14 h-14 rounded-2xl bg-[var(--skydot-orange)]/10 flex items-center justify-center text-[var(--skydot-orange)] mb-6 shadow-inner group-hover:scale-110 transition-transform duration-500">
                    <reason.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">{reason.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-base flex-1">{reason.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
