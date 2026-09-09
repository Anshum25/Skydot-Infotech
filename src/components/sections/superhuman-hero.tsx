import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function SuperhumanHero() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Text fades up and out as user scrolls
  const textOpacity = useTransform(scrollYProgress, [0, 0.22], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.22], ["0%", "-12%"]);
  const textScale = useTransform(scrollYProgress, [0, 0.22], [1, 0.94]);

  // Dashboard rises and fully reveals
  const imageScale = useTransform(scrollYProgress, [0.05, 0.55], [0.82, 1]);
  const imageOpacity = useTransform(scrollYProgress, [0.05, 0.35], [0, 1]);
  const imageY = useTransform(scrollYProgress, [0.05, 0.55], ["8%", "0%"]);

  // Glow fades out slowly
  const glowOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-[280vh] bg-background"
      style={{ isolation: "isolate" }}
    >
      {/* Sticky viewport-height canvas */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col items-center justify-start">

        {/* Ambient glow */}
        <motion.div
          style={{ opacity: glowOpacity }}
          className="absolute inset-0 pointer-events-none"
        >
          <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[70vw] h-[60vh] rounded-full bg-primary/20 blur-[100px]" />
          <div className="absolute top-[30%] left-[20%] w-[30vw] h-[30vh] rounded-full bg-primary/10 blur-[80px]" />
          <div className="absolute top-[30%] right-[20%] w-[30vw] h-[30vh] rounded-full bg-blue-400/10 blur-[80px]" />
        </motion.div>

        {/* Hero Text */}
        <motion.div
          style={{
            opacity: textOpacity,
            y: textY,
            scale: textScale,
          }}
          className="relative z-20 flex flex-col items-center text-center px-6 max-w-5xl mx-auto pt-28 md:pt-32"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-[11px] font-semibold tracking-widest text-primary uppercase">
              Introducing Skydot 2.0
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl lg:text-[96px] font-bold tracking-tighter leading-[0.92] mb-6"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Blazingly fast{" "}
            <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary via-blue-400 to-primary/60">
              digital solutions
            </span>
          </motion.h1>

          {/* Sub-text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-xl text-muted-foreground max-w-xl mb-10 font-normal leading-relaxed"
          >
            We engineer premium software experiences for teams who demand
            uncompromising performance.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-3"
          >
            <button className="group bg-primary hover:bg-primary/90 text-primary-foreground px-7 py-3.5 rounded-full text-sm font-semibold transition-all hover:scale-105 active:scale-95 flex items-center gap-2 shadow-lg shadow-primary/25">
              Start your journey
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-7 py-3.5 rounded-full text-sm font-semibold border border-border hover:bg-muted transition-all text-foreground">
              View our work
            </button>
          </motion.div>
        </motion.div>

        {/* Dashboard Mockup */}
        <motion.div
          style={{
            scale: imageScale,
            opacity: imageOpacity,
            y: imageY,
          }}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[88vw] max-w-5xl z-10"
        >
          <div className="w-full rounded-t-2xl border border-border bg-card shadow-2xl overflow-hidden">
            {/* Browser Chrome */}
            <div className="h-10 border-b border-border flex items-center px-4 gap-2 bg-muted/50">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-400/60" />
                <div className="w-3 h-3 rounded-full bg-green-400/60" />
              </div>
              <div className="flex-1 flex justify-center">
                <div className="bg-background/60 border border-border rounded-md px-4 py-1 text-xs text-muted-foreground w-48 text-center">
                  skydot.enterprise.app
                </div>
              </div>
              <div className="text-[10px] font-semibold text-primary flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />
                LIVE OPERATIONS
              </div>
            </div>

            {/* App body */}
            <div className="flex h-64 md:h-80">
              {/* Sidebar */}
              <div className="hidden md:flex w-48 border-r border-border flex-col p-3 gap-1 bg-muted/20">
                {["Overview", "AI Insights", "ERP Modules", "Automation", "Analytics", "Operations"].map((item, i) => (
                  <div
                    key={item}
                    className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                      i === 0
                        ? "bg-primary/10 text-primary"
                        : "text-muted-foreground hover:bg-muted"
                    }`}
                  >
                    <div className={`w-3.5 h-3.5 rounded-sm ${i === 0 ? "bg-primary/30" : "bg-foreground/10"}`} />
                    {item}
                  </div>
                ))}
              </div>

              {/* Main content */}
              <div className="flex-1 p-5 flex flex-col gap-4 bg-background/50">
                {/* Stat cards */}
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: "WORKFLOWS", value: "Active", sub: "Automation queue" },
                    { label: "ERP STATUS", value: "Synced", sub: "Finance · HR · Inventory" },
                    { label: "AI LAYER", value: "Ready", sub: "Document intelligence" },
                  ].map((card) => (
                    <div key={card.label} className="bg-card border border-border rounded-xl p-3">
                      <div className="text-[9px] font-semibold tracking-widest text-muted-foreground mb-1">{card.label}</div>
                      <div className="text-base font-bold text-foreground">{card.value}</div>
                      <div className="text-[10px] text-muted-foreground mt-0.5">{card.sub}</div>
                    </div>
                  ))}
                </div>

                {/* Chart area */}
                <div className="flex gap-3 flex-1">
                  <div className="flex-1 bg-card border border-border rounded-xl p-3 flex flex-col gap-2">
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-semibold text-foreground">Business Performance</span>
                      <span className="text-[9px] text-muted-foreground tracking-widest">ANALYTICS</span>
                    </div>
                    <div className="flex items-end gap-1 flex-1 pt-2">
                      {[40, 55, 45, 60, 50, 72, 65, 80, 70, 88, 78, 95].map((h, i) => (
                        <div key={i} className="flex-1 flex flex-col gap-0.5 items-center">
                          <div
                            className="w-full rounded-t-sm bg-primary/20"
                            style={{ height: `${h * 0.6}%` }}
                          />
                          <div
                            className="w-full rounded-t-sm bg-primary"
                            style={{ height: `${h * 0.4}%` }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="w-44 bg-card border border-border rounded-xl p-3 flex flex-col gap-2">
                    <span className="text-xs font-semibold text-foreground">Intelligence Feed</span>
                    <div className="flex flex-col gap-1.5">
                      {[
                        "Procurement variance detected",
                        "Classification model ready",
                        "HR workflow awaiting step",
                      ].map((item) => (
                        <div key={item} className="text-[10px] text-muted-foreground bg-muted/50 rounded-lg p-2 leading-relaxed">
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
