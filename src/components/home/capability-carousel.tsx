import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import { capabilities } from "@/data/homepage";

gsap.registerPlugin(ScrollTrigger);

/* ── Inline capability visuals (no external deps) ───────── */
function AiVisual() {
  return (
    <div className="rounded-[3px] border border-border bg-card overflow-hidden">
      <div className="flex items-center justify-between border-b border-border px-4 py-3 bg-secondary/20">
        <span className="text-[11px] font-semibold text-muted-foreground uppercase tracking-widest">AI Intelligence Layer</span>
        <span className="flex items-center gap-1.5 text-[10px] font-semibold text-emerald-600 dark:text-emerald-400">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" /> Processing
        </span>
      </div>
      <div className="p-5 flex flex-col gap-4">
        {/* Input query */}
        <div className="rounded-[3px] border border-[var(--skydot-blue)]/20 bg-[var(--skydot-blue)]/5 p-3">
          <p className="text-[11px] text-muted-foreground mb-1 font-medium">USER QUERY</p>
          <p className="text-[13px] text-foreground">"Summarize procurement anomalies from last quarter."</p>
        </div>
        {/* AI response stream */}
        <div className="flex flex-col gap-2">
          <p className="text-[11px] text-muted-foreground font-medium mb-1">AI RESPONSE</p>
          {["Analyzing 3,240 purchase orders...", "Detected 12 anomalies above threshold.", "Top category: Inventory — 67% variance.", "Recommended action: Flag for CFO review."].map((line, i) => (
            <div key={i} className="flex items-start gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--skydot-blue)] mt-1.5 shrink-0" />
              <p className="text-[12px] text-foreground">{line}</p>
            </div>
          ))}
        </div>
        {/* Mini chart */}
        <div className="flex items-end gap-1 h-16 border-t border-border pt-3 mt-1">
          {[20, 35, 28, 55, 42, 68, 58, 75, 62, 88, 72, 95].map((h, i) => (
            <div key={i} className="flex-1 rounded-t-[1px] bg-[var(--skydot-blue)]" style={{ height: `${h}%`, opacity: 0.3 + (i / 12) * 0.7 }} />
          ))}
        </div>
      </div>
    </div>
  );
}

function ErpVisual() {
  return (
    <div className="rounded-[3px] border border-border bg-card overflow-hidden">
      <div className="flex items-center justify-between border-b border-border px-4 py-3 bg-secondary/20">
        <span className="text-[11px] font-semibold text-muted-foreground uppercase tracking-widest">skyerp.in</span>
        <span className="flex items-center gap-1.5 text-[10px] font-semibold text-emerald-600 dark:text-emerald-400">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" /> Live
        </span>
      </div>
      <div className="flex flex-col relative bg-white dark:bg-white/5">
        <img 
          src="https://skyerpnext.in/images/modules/crm-hero.gif" 
          alt="ERP Dashboard Analytics" 
          className="w-full h-auto"
        />
      </div>
    </div>
  );
}

function SoftwareVisual() {
  return (
    <div className="rounded-[3px] border border-border bg-card overflow-hidden">
      <div className="flex items-center justify-between border-b border-border px-4 py-3 bg-secondary/20">
        <span className="text-[11px] font-semibold text-muted-foreground uppercase tracking-widest">Custom Platform — Build</span>
      </div>
      <div className="p-5 flex flex-col gap-4">
        <div className="grid grid-cols-2 gap-3">
          {[
            { label: "Modules Built", value: "24" },
            { label: "API Endpoints", value: "187" },
            { label: "Test Coverage", value: "94%" },
            { label: "Uptime SLA", value: "99.9%" },
          ].map((stat) => (
            <div key={stat.label} className="rounded-[3px] border border-border bg-secondary/20 p-3">
              <p className="home-label mb-1">{stat.label}</p>
              <p className="text-xl font-bold tracking-tight">{stat.value}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-2">
          {["Architecture review", "Frontend development", "API integration", "QA & testing", "Production deploy"].map((step, i) => (
            <div key={step} className="flex items-center gap-3">
              <div className={`h-1.5 w-1.5 rounded-full shrink-0 ${i < 3 ? "bg-[var(--skydot-blue)]" : "bg-border"}`} />
              <div className="flex-1 h-1.5 rounded-full bg-border overflow-hidden">
                <div className={`h-full rounded-full bg-[var(--skydot-blue)]`} style={{ width: `${[100, 100, 80, 40, 10][i]}%`, opacity: 0.7 }} />
              </div>
              <p className="text-[11px] text-muted-foreground w-28 shrink-0">{step}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function DigitalVisual() {
  return (
    <div className="rounded-[3px] border border-border bg-card overflow-hidden">
      <div className="flex items-center justify-between border-b border-border px-4 py-3 bg-secondary/20">
        <span className="text-[11px] font-semibold text-muted-foreground uppercase tracking-widest">Digital Product — Launch</span>
      </div>
      <div className="p-5 flex flex-col gap-4">
        {/* Simulated mobile + web layout */}
        <div className="flex gap-3">
          {/* Mobile frame */}
          <div className="w-20 shrink-0 rounded-[6px] border border-border bg-secondary/30 p-1.5 flex flex-col gap-1">
            <div className="h-1.5 w-8 rounded-full bg-border mx-auto mb-1" />
            <div className="h-6 rounded-[3px] bg-[var(--skydot-blue)]/20 w-full" />
            <div className="h-3 rounded-[3px] bg-border w-3/4" />
            <div className="h-3 rounded-[3px] bg-border w-1/2" />
            <div className="h-5 rounded-[3px] bg-[var(--skydot-orange)]/20 w-full mt-1" />
            <div className="h-3 rounded-[3px] bg-border w-full" />
            <div className="h-3 rounded-[3px] bg-border w-3/4" />
          </div>
          {/* Web frame */}
          <div className="flex-1 rounded-[3px] border border-border bg-secondary/30 p-2 flex flex-col gap-1.5">
            <div className="flex gap-1 mb-1">
              <div className="h-1.5 w-1.5 rounded-full bg-border" />
              <div className="h-1.5 w-1.5 rounded-full bg-border" />
              <div className="h-1.5 w-1.5 rounded-full bg-border" />
            </div>
            <div className="h-8 rounded-[3px] bg-[var(--skydot-blue)]/15 w-full" />
            <div className="grid grid-cols-3 gap-1 flex-1">
              <div className="rounded-[3px] bg-border/60 h-12" />
              <div className="rounded-[3px] bg-border/60 h-12" />
              <div className="rounded-[3px] bg-border/60 h-12" />
            </div>
          </div>
        </div>
        {/* Delivery stats */}
        <div className="grid grid-cols-3 gap-2 text-center border-t border-border pt-3">
          {[
            { label: "Design", val: "Done" },
            { label: "Build", val: "Done" },
            { label: "Launch", val: "Live" },
          ].map((s) => (
            <div key={s.label}>
              <p className="home-label mb-1">{s.label}</p>
              <p className="text-[12px] font-semibold text-[var(--skydot-blue)]">{s.val}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const VISUALS = [AiVisual, ErpVisual, SoftwareVisual, DigitalVisual];

export function CapabilityCarouselSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);
  const textRefs = useRef<(HTMLDivElement | null)[]>([]);
  const visualRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!sectionRef.current || !pinRef.current) return;

    if (prefersReducedMotion) {
      slideRefs.current.forEach((slide, i) => {
        if (slide) gsap.set(slide, { opacity: i === 0 ? 1 : 0 });
      });
      return;
    }

    const mm = gsap.matchMedia();
    mm.add("(min-width: 768px)", () => {
      const ctx = gsap.context(() => {
        const total = capabilities.length;
        
        // Setup initial states for text and visuals
        gsap.set(textRefs.current, { transformOrigin: "left center" });
        
        capabilities.forEach((_, i) => {
          if (i === 0) {
             gsap.set(textRefs.current[i], { y: 0, opacity: 1, scale: 1, pointerEvents: "auto" });
             gsap.set(visualRefs.current[i], { opacity: 1, scale: 1, clipPath: "inset(0% 0% 0% 0% round 4px)" });
          } else if (i === 1) {
             gsap.set(textRefs.current[i], { y: 360, opacity: 0.25, scale: 0.9, pointerEvents: "none" });
             gsap.set(visualRefs.current[i], { opacity: 0, scale: 1.05, clipPath: "inset(10% 10% 10% 10% round 4px)" });
          } else {
             gsap.set(textRefs.current[i], { y: 440, opacity: 0, scale: 0.9, pointerEvents: "none" });
             gsap.set(visualRefs.current[i], { opacity: 0, scale: 1.05, clipPath: "inset(10% 10% 10% 10% round 4px)" });
          }
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: `+=${total * 60}%`,
            pin: pinRef.current,
            scrub: true,
            anticipatePin: 1,
          },
        });

        capabilities.forEach((_, index) => {
          if (index === 0) return;
          const prev = index - 1;
          const curr = index;
          const next = index + 1;

          const tIndex = index;

          // 1. Move PREV text up and hide its visual
          tl.to(textRefs.current[prev], { y: -360, opacity: 0.25, scale: 0.9, duration: 1, ease: "power2.inOut" }, tIndex);
          tl.set(textRefs.current[prev], { pointerEvents: "none" }, tIndex);
          tl.to(visualRefs.current[prev], { opacity: 0, scale: 0.95, clipPath: "inset(8% 8% 8% 8% round 4px)", duration: 1, ease: "power2.inOut" }, tIndex);
          
          // Hide PREV-PREV text if it exists
          if (prev - 1 >= 0) {
            tl.to(textRefs.current[prev - 1], { opacity: 0, y: -440, duration: 1, ease: "power2.inOut" }, tIndex);
          }

          // 2. Move CURR text to center and show its visual
          tl.to(textRefs.current[curr], { y: 0, opacity: 1, scale: 1, duration: 1, ease: "power2.inOut" }, tIndex);
          tl.set(textRefs.current[curr], { pointerEvents: "auto" }, tIndex);
          tl.to(visualRefs.current[curr], { opacity: 1, scale: 1, clipPath: "inset(0% 0% 0% 0% round 4px)", duration: 1, ease: "power2.inOut" }, tIndex);

          // 3. Move NEXT text into view (if it exists)
          if (next < capabilities.length) {
            tl.fromTo(textRefs.current[next], 
              { opacity: 0, y: 440, scale: 0.9 }, 
              { opacity: 0.25, y: 360, scale: 0.9, duration: 1, ease: "power2.inOut" }, 
              tIndex
            );
          }
        });
      }, sectionRef);
      return () => ctx.revert();
    });

    return () => mm.revert();
  }, []);

  return (
    <section ref={sectionRef} className="home-section relative bg-background border-t border-border" aria-label="Capability showcase">
      <div ref={pinRef} className="min-h-screen flex items-center py-20 md:py-0">
        <div className="container mx-auto px-6 md:px-12 w-full">

          {/* Desktop: scroll-pinned carousel */}
          <div className="hidden md:grid lg:grid-cols-[1fr_1fr] gap-16 items-center relative min-h-[72vh]">
            
            {/* Text Column */}
            <div className="relative h-full w-full flex items-center">
              {capabilities.map((cap, index) => (
                <div 
                  key={`text-${cap.number}`}
                  ref={(el) => { textRefs.current[index] = el; }} 
                  className="absolute inset-0 flex flex-col justify-center max-w-lg will-change-transform"
                >
                  <span className="home-label text-[var(--skydot-blue)] mb-5 block">{cap.number}</span>
                  <h3 className="home-headline text-4xl lg:text-5xl xl:text-[3.25rem] font-light tracking-tight mb-5">
                    {cap.title}
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-sm">
                    {cap.description}
                  </p>
                  <Link
                    to={cap.href}
                    className="inline-flex items-center gap-2 text-[13px] font-semibold text-[var(--skydot-blue)] hover:opacity-75 transition-opacity pointer-events-auto"
                  >
                    Explore this capability <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              ))}
            </div>

            {/* Visual Column */}
            <div className="relative h-full w-full flex items-center justify-center">
              {capabilities.map((cap, index) => {
                const Visual = VISUALS[index];
                return (
                  <div 
                    key={`vis-${cap.number}`}
                    ref={(el) => { visualRefs.current[index] = el; }} 
                    className="absolute inset-0 flex flex-col justify-center will-change-transform"
                  >
                    <Visual />
                  </div>
                );
              })}
            </div>

          </div>

          {/* Mobile: stacked */}
          <div className="md:hidden space-y-24">
            {capabilities.map((cap, index) => {
              const Visual = VISUALS[index];
              return (
                <div key={cap.number} className="space-y-8">
                  <div>
                    <span className="home-label text-[var(--skydot-blue)] mb-4 block">{cap.number}</span>
                    <h3 className="home-headline text-3xl font-light tracking-tight mb-4">{cap.title}</h3>
                    <p className="text-base text-muted-foreground leading-relaxed mb-6">{cap.description}</p>
                    <Link to={cap.href} className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--skydot-blue)]">
                      Explore <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </div>
                  <Visual />
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
