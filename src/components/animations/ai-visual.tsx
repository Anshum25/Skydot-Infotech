import { motion } from "framer-motion";
import { User, Bot, Database, Server, Building2, Target } from "lucide-react";

const steps = [
  { id: 1, label: "User", icon: User },
  { id: 2, label: "AI Assistant", icon: Bot },
  { id: 3, label: "Knowledge / Data", icon: Database },
  { id: 4, label: "Business Systems", icon: Server },
  { id: 5, label: "ERP / CRM", icon: Building2 },
  { id: 6, label: "Business Outcome", icon: Target },
];

export function AiVisual() {
  return (
    <div className="relative w-full max-w-4xl mx-auto py-12 px-4 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4 overflow-hidden">
      
      {/* Connecting Line */}
      <div className="absolute left-1/2 md:left-4 md:right-4 top-8 md:top-1/2 h-[calc(100%-4rem)] md:h-0.5 w-0.5 md:w-auto -translate-x-1/2 md:-translate-x-0 md:-translate-y-1/2 bg-border z-0">
        <motion.div
          initial={{ height: 0, width: "100%" }}
          whileInView={{ height: "100%", width: "100%" }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute top-0 left-0 w-full h-full bg-primary origin-top md:origin-left md:w-0 md:h-full md:data-[in-view]:w-full"
        />
        {/* Animated pulse moving along the line */}
        <motion.div
          animate={{
            top: ["0%", "100%"],
            left: ["0%", "100%"],
          }}
          transition={{
            repeat: Infinity,
            duration: 3,
            ease: "linear",
          }}
          className="absolute w-2 h-2 rounded-full bg-accent shadow-[0_0_10px_2px_rgba(239,127,27,0.5)] -translate-x-[3px] md:-translate-y-[3px] md:-translate-x-0"
        />
      </div>

      {steps.map((step, index) => (
        <motion.div
          key={step.id}
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: index * 0.2 }}
          className="relative z-10 flex flex-col items-center group"
        >
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-card border border-border shadow-sm flex items-center justify-center mb-3 group-hover:border-primary group-hover:shadow-md transition-all duration-300 relative overflow-hidden">
            {/* Hover background effect */}
            <div className="absolute inset-0 bg-primary/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            <step.icon className="h-6 w-6 md:h-8 md:w-8 text-foreground group-hover:text-primary transition-colors relative z-10" />
          </div>
          <span className="text-xs md:text-sm font-semibold text-center text-muted-foreground group-hover:text-foreground transition-colors max-w-[80px] md:max-w-[100px]">
            {step.label}
          </span>
        </motion.div>
      ))}

    </div>
  );
}
