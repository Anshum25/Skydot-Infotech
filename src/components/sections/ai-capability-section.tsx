
import { motion, useMotionValue, useMotionTemplate } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Bot, Database, Network } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { AiWorkflowMock } from "@/components/animations/ai-workflow-mock";

function SpotlightCard({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      className={`group relative rounded-2xl border border-black/5 dark:border-white/10 bg-white dark:bg-white/5 overflow-hidden shadow-xl shadow-black/5 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 ${className}`}
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              350px circle at ${mouseX}px ${mouseY}px,
              var(--primary) 0%,
              transparent 80%
            )
          `,
          opacity: 0.1,
        }}
      />
      <div className="relative z-10 h-full">
        {children}
      </div>
    </div>
  );
}

export function AiCapabilitySection() {
  const capabilities = [
    {
      title: "Intelligent Workflows",
      desc: "Automate complex business processes and reduce manual intervention with smart routing.",
      icon: Network
    },
    {
      title: "RAG Systems",
      desc: "Securely leverage Large Language Models against your proprietary business data.",
      icon: Database
    },
    {
      title: "AI Assistants",
      desc: "Deploy context-aware conversational agents for customer support and internal queries.",
      icon: Bot
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-slate-50 dark:bg-background border-y border-border relative overflow-hidden">
      {/* Subtle deep blue glow */}
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none translate-x-1/3 -translate-y-1/2" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div className="flex flex-col">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-12"
            >
              <div className="inline-flex items-center rounded-full border border-border bg-white dark:bg-white/5 shadow-sm px-3 py-1 text-xs font-medium text-muted-foreground dark:text-white/70 mb-6">
                AI & Automation
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
                Applied AI for the <br /> modern enterprise.
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-xl">
                We integrate practical artificial intelligence into your business operations. From intelligent document processing to secure RAG implementations, we build AI tools that solve real problems, not just proofs of concept.
              </p>
              <Link to="/solutions/ai-automation" className={buttonVariants({ variant: "outline", className: "rounded-full shadow-sm" })}>
                Explore AI Capabilities
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-6">
              {capabilities.map((cap, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <SpotlightCard className="flex flex-col gap-4 p-6">
                    <div className="w-12 h-12 shrink-0 rounded-2xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary mb-2 shadow-inner">
                      <cap.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{cap.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{cap.desc}</p>
                    </div>
                  </SpotlightCard>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative w-full">
            <div className="absolute inset-0 bg-primary/5 blur-[80px] -z-10 rounded-full" />
            <AiWorkflowMock />
          </div>

        </div>
      </div>
    </section>
  );
}
