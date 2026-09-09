import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, LayoutDashboard, Database, Smartphone } from "lucide-react";
import { Link } from "react-router-dom";
import ReactLenis from "lenis/react";

const caseStudies = [
  {
    id: "cs-01",
    project: "Global Logistics Tracking",
    industry: "Logistics & Supply Chain",
    problem: "Legacy on-premise systems caused 24+ hour delays in shipment visibility and high infrastructure maintenance costs.",
    solution: "Architected a cloud-native real-time tracking engine handling 5M+ daily events with 99.99% uptime.",
    icon: Database,
    color: "#1677FF"
  },
  {
    id: "cs-02",
    project: "Enterprise Financial Dashboard",
    industry: "FinTech",
    problem: "Disconnected data silos prevented executives from getting a unified view of global financial health in real-time.",
    solution: "Engineered a unified data pipeline and high-performance React dashboard aggregating 12 disparate data sources.",
    icon: LayoutDashboard,
    color: "#FF6B2C"
  },
  {
    id: "cs-03",
    project: "Automated Field Operations",
    industry: "Field Services",
    problem: "Paper-based processes and manual scheduling led to inefficient routing and delayed customer service.",
    solution: "Developed an offline-first mobile application integrated with AI-driven route optimization algorithms.",
    icon: Smartphone,
    color: "#1677FF"
  }
];

const CaseStudyCard = ({
  i,
  cs,
  progress,
  range,
  targetScale,
}: {
  i: number;
  cs: typeof caseStudies[0];
  progress: any;
  range: [number, number];
  targetScale: number;
}) => {
  const container = useRef<HTMLDivElement>(null);
  const scale = useTransform(progress, range, [1, targetScale]);
  const Icon = cs.icon;

  return (
    <div
      ref={container}
      className="sticky top-0 flex items-center justify-center h-screen w-full"
    >
      <motion.div
        style={{
          scale,
          top: `calc(10vh + ${i * 40}px)`, 
        }}
        className="relative w-full max-w-5xl bg-card rounded-2xl border border-border shadow-xl overflow-hidden flex flex-col lg:flex-row origin-top"
      >
        {/* Content Side */}
        <div className="lg:w-1/2 p-8 md:p-12 flex flex-col justify-center">
          <div className="text-[10px] font-mono text-muted-foreground tracking-widest uppercase mb-6 border border-border inline-block px-3 py-1 rounded bg-muted w-fit">
            {cs.industry}
          </div>
          
          <h3 className="text-3xl md:text-4xl font-bold mb-8">
            {cs.project}
          </h3>
          
          <div className="space-y-6">
            <div>
              <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-2">Problem</h4>
              <p className="text-foreground/80 font-medium leading-relaxed">{cs.problem}</p>
            </div>
            <div>
              <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-2">Solution</h4>
              <p className="text-foreground/80 font-medium leading-relaxed">{cs.solution}</p>
            </div>
          </div>
          
          <div className="mt-10">
            <Link 
              to={`/work`}
              className="inline-flex items-center gap-2 font-bold text-sm tracking-widest uppercase hover:text-[#1677FF] transition-colors"
            >
              Read Technical Spec <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Visual Side (Mockup) */}
        <div className="lg:w-1/2 bg-muted/20 p-8 md:p-12 flex items-center justify-center relative overflow-hidden border-t lg:border-t-0 lg:border-l border-border">
           <div className="absolute inset-0 opacity-5" />
           
           {/* Tasteful System Diagram / Mockup */}
           <div className="w-full aspect-square bg-card border border-border rounded-xl relative flex flex-col items-center justify-center p-8 shadow-sm">
              <Icon className="w-16 h-16 mb-6 opacity-80" style={{ color: cs.color }} />
              <div className="w-full h-32 border border-border bg-muted/50 rounded-lg flex flex-col gap-2 p-3">
                 <div className="w-full h-4 bg-foreground/10 rounded" />
                 <div className="w-3/4 h-4 bg-foreground/10 rounded" />
                 <div className="w-5/6 h-4 bg-foreground/10 rounded" />
              </div>
              
              {/* Simulated data flowing */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-xl">
                <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-foreground/20 to-transparent animate-[slide_4s_linear_infinite]" />
              </div>
           </div>
        </div>
      </motion.div>
    </div>
  );
};

export function WorkSection() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <ReactLenis root>
      <section 
        ref={container} 
        className="relative w-full bg-background text-foreground pb-[50vh] pt-24"
      >
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          
          {/* Header */}
          <div className="text-center flex flex-col items-center mb-10">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-6 h-[1px] bg-[#1677FF]" />
              <span className="text-xs font-bold tracking-[0.2em] text-[#1677FF] uppercase">
                CASE STUDIES
              </span>
              <div className="w-6 h-[1px] bg-[#1677FF]" />
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-extrabold uppercase tracking-tight">
              PROVEN <span className="text-muted-foreground">EXECUTION.</span>
            </h2>
          </div>

          {/* Case Studies Stack */}
          <div className="relative w-full max-w-5xl mx-auto flex flex-col items-center">
            {caseStudies.map((cs, i) => {
              // Adjust targetScale so older cards shrink as new ones appear
              const targetScale = Math.max(0.85, 1 - (caseStudies.length - i - 1) * 0.05);
              return (
                <CaseStudyCard
                  key={cs.id}
                  i={i}
                  cs={cs}
                  progress={scrollYProgress}
                  range={[i * 0.25, 1]}
                  targetScale={targetScale}
                />
              );
            })}
          </div>
          
        </div>
      </section>
    </ReactLenis>
  );
}
