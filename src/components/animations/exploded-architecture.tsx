import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Database, Network, LayoutDashboard, Code, Bot } from "lucide-react";

export function ExplodedArchitecture() {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="w-full h-[500px] md:h-[600px] flex items-center justify-center relative [perspective:2000px] group"
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative w-full max-w-md md:max-w-lg aspect-square flex items-center justify-center transition-transform duration-700 ease-custom group-hover:scale-105"
      >
        {/* Layer 1: Data / Infrastructure */}
        <motion.div
          style={{ transform: "translateZ(-80px)" }}
          className="absolute inset-0 w-full h-full bg-card/40 border border-border rounded-2xl backdrop-blur-md p-8 flex flex-col justify-end shadow-[0_0_50px_rgba(30,136,229,0.1)] transition-transform duration-700 ease-custom group-hover:[transform:translateZ(-120px)]"
        >
          <div className="flex gap-4 items-center opacity-50 mb-4">
            <Database className="text-primary w-6 h-6" />
            <div className="h-2 w-32 bg-primary/20 rounded-full" />
            <div className="h-2 w-16 bg-primary/20 rounded-full" />
          </div>
          <div className="flex gap-4 items-center opacity-30 mb-4">
            <Code className="text-[var(--skydot-orange)] w-6 h-6" />
            <div className="h-2 w-48 bg-[var(--skydot-orange)]/20 rounded-full" />
          </div>
          <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent mt-8" />
        </motion.div>

        {/* Layer 2: Processing / AI / Logic */}
        <motion.div
          style={{ transform: "translateZ(0px)" }}
          className="absolute inset-4 w-[calc(100%-2rem)] h-[calc(100%-2rem)] bg-primary/5 border border-primary/20 rounded-2xl backdrop-blur-sm flex items-center justify-center shadow-2xl transition-transform duration-700 ease-custom"
        >
          <div className="relative w-full h-full flex items-center justify-center">
             <div className="absolute top-1/4 left-1/4 w-12 h-12 bg-primary/20 rounded-full blur-xl animate-pulse" />
             <div className="absolute bottom-1/4 right-1/4 w-16 h-16 bg-[var(--skydot-orange)]/20 rounded-full blur-xl animate-pulse delay-700" />
             <Network className="w-16 h-16 text-primary drop-shadow-[0_0_15px_rgba(30,136,229,0.3)]" />
             <Bot className="absolute bottom-12 right-12 w-10 h-10 text-[var(--skydot-orange)] drop-shadow-[0_0_15px_rgba(245,130,32,0.3)]" />
          </div>
        </motion.div>

        {/* Layer 3: Presentation / UI Dashboard */}
        <motion.div
          style={{ transform: "translateZ(80px)" }}
          className="absolute inset-8 w-[calc(100%-4rem)] h-[calc(100%-4rem)] bg-card/90 border border-border rounded-2xl backdrop-blur-xl shadow-2xl p-6 flex flex-col gap-4 overflow-hidden transition-transform duration-700 ease-custom group-hover:[transform:translateZ(120px)]"
        >
          {/* Header */}
          <div className="flex justify-between items-center border-b border-border pb-4">
            <div className="flex items-center gap-3">
              <LayoutDashboard className="w-5 h-5 text-foreground" />
              <span className="font-bold text-sm tracking-widest uppercase text-foreground">System Core</span>
            </div>
            <div className="flex gap-1.5">
               <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
               <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
               <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
            </div>
          </div>
          
          {/* Body */}
          <div className="flex-1 grid grid-cols-2 gap-4">
            <div className="bg-muted rounded-lg p-4 flex flex-col justify-between">
              <div className="w-8 h-8 rounded-full bg-primary/20 mb-4" />
              <div className="space-y-2">
                <div className="h-2 w-full bg-border rounded-full" />
                <div className="h-2 w-2/3 bg-border rounded-full" />
              </div>
            </div>
            <div className="bg-muted rounded-lg p-4 flex flex-col justify-between">
              <div className="text-2xl font-bold text-foreground">99.9%</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider">Uptime</div>
              <div className="mt-4 h-1 w-full bg-border rounded-full overflow-hidden relative">
                 <div className="absolute top-0 left-0 h-full w-[99%] bg-primary" />
              </div>
            </div>
          </div>
          
          <div className="w-full h-24 bg-muted rounded-lg relative overflow-hidden flex-shrink-0">
             {/* Fake chart */}
             <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
               <path d="M0,100 L0,50 Q25,20 50,60 T100,30 L100,100 Z" fill="var(--color-primary)" opacity="0.1" />
               <path d="M0,50 Q25,20 50,60 T100,30" fill="none" stroke="var(--color-primary)" strokeWidth="2" />
             </svg>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
