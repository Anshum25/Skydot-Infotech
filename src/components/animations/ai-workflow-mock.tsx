import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useRef, useState } from "react";
import { Bot, User, CheckCircle2, Loader2, Database } from "lucide-react";

export function AiWorkflowMock() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const [step, setStep] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest < 0.2) setStep(0);
    else if (latest < 0.4) setStep(1);
    else if (latest < 0.6) setStep(2);
    else if (latest < 0.8) setStep(3);
    else setStep(4);
  });

  const steps = [
    { type: "user", text: "Analyze Q3 pipeline data and identify bottleneck patterns." },
    { type: "ai-think", text: "Connecting to CRM database..." },
    { type: "ai-think", text: "Running anomaly detection model..." },
    { type: "ai-think", text: "Synthesizing cross-regional reports..." },
    { type: "ai-response", text: "I found 3 major bottlenecks in the EMEA region slowing down the sales cycle by 14 days on average. Here is the automated workflow suggestion to resolve this." }
  ];

  return (
    <div ref={containerRef} className="w-full bg-card rounded-2xl border border-border shadow-xl overflow-hidden flex flex-col font-sans h-[500px]">
      <div className="h-14 border-b border-border bg-muted/30 flex items-center px-4 gap-3">
        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
          <Bot className="w-4 h-4 text-primary" />
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-semibold text-foreground">Skydot Enterprise Agent</span>
          <span className="text-[10px] text-green-500 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            Online & Connected
          </span>
        </div>
      </div>

      <div className="flex-1 p-6 flex flex-col gap-6 overflow-hidden relative bg-slate-50/50 dark:bg-transparent">
        
        {step >= 0 && (
          <motion.div 
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            className="flex gap-4 self-end max-w-[85%]"
          >
            <div className="bg-primary text-primary-foreground p-4 rounded-2xl rounded-tr-sm shadow-sm text-sm leading-relaxed">
              {steps[0].text}
            </div>
            <div className="w-8 h-8 rounded-full bg-secondary border border-border shrink-0 flex items-center justify-center mt-1">
              <User className="w-4 h-4 text-muted-foreground" />
            </div>
          </motion.div>
        )}

        <div className="flex flex-col gap-3">
          {step >= 1 && (
            <motion.div 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 text-xs text-muted-foreground ml-12"
            >
              {step === 1 ? <Loader2 className="w-3.5 h-3.5 animate-spin text-primary" /> : <CheckCircle2 className="w-3.5 h-3.5 text-green-500" />}
              {steps[1].text}
            </motion.div>
          )}
          {step >= 2 && (
            <motion.div 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 text-xs text-muted-foreground ml-12"
            >
              {step === 2 ? <Loader2 className="w-3.5 h-3.5 animate-spin text-primary" /> : <CheckCircle2 className="w-3.5 h-3.5 text-green-500" />}
              {steps[2].text}
            </motion.div>
          )}
          {step >= 3 && (
            <motion.div 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 text-xs text-muted-foreground ml-12"
            >
              {step === 3 ? <Loader2 className="w-3.5 h-3.5 animate-spin text-primary" /> : <CheckCircle2 className="w-3.5 h-3.5 text-green-500" />}
              {steps[3].text}
            </motion.div>
          )}
        </div>

        {step >= 4 && (
          <motion.div 
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            className="flex gap-4 max-w-[90%]"
          >
            <div className="w-8 h-8 rounded-full bg-primary/10 border border-primary/20 shrink-0 flex items-center justify-center mt-1">
              <Bot className="w-4 h-4 text-primary" />
            </div>
            <div className="bg-background border border-border p-4 rounded-2xl rounded-tl-sm shadow-sm text-sm leading-relaxed text-foreground">
              {steps[4].text}
              <div className="mt-4 flex gap-2">
                <div className="px-3 py-1.5 bg-secondary rounded-md text-xs border border-border flex items-center gap-2 cursor-pointer hover:bg-muted transition-colors">
                  <Database className="w-3 h-3 text-primary" />
                  View CRM Data
                </div>
                <div className="px-3 py-1.5 bg-primary text-primary-foreground rounded-md text-xs flex items-center gap-2 cursor-pointer hover:bg-primary/90 transition-colors">
                  Deploy Workflow
                </div>
              </div>
            </div>
          </motion.div>
        )}

      </div>
      
      {/* Scroll indicator overlay */}
      {step < 4 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-background/80 backdrop-blur border border-border px-4 py-1.5 rounded-full text-xs text-muted-foreground animate-bounce shadow-sm pointer-events-none">
          Scroll to generate
        </div>
      )}
    </div>
  );
}
