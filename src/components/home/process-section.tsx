import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { processSteps } from "@/data/homepage";

gsap.registerPlugin(ScrollTrigger);

export function HomeProcessSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Headline animation
      gsap.from(headlineRef.current, {
        y: 24, opacity: 0, duration: 0.9, ease: "power3.out",
        scrollTrigger: { trigger: headlineRef.current, start: "top 80%" },
      });

      // Cards staggered animation
      const cards = gridRef.current?.children;
      if (cards) {
        gsap.from(Array.from(cards), {
          y: 32, opacity: 0, duration: 0.8, ease: "power3.out", stagger: 0.1,
          scrollTrigger: { trigger: gridRef.current, start: "top 75%" },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="home-section relative py-24 md:py-32 bg-background border-t border-border"
      aria-label="Process"
    >
      <div className="container mx-auto px-6 md:px-12">
        <div ref={headlineRef} className="mb-12 lg:mb-16 lg:max-w-xl">
          <p className="home-label mb-5">Process</p>
          <h2 className="home-headline text-3xl md:text-5xl font-light">
            Disciplined delivery, every time.
          </h2>
        </div>

        {/* 
          Using a CSS grid for normal vertical scrolling instead of the previous 
          GSAP horizontal pin which hijacked the scroll wheel.
        */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-px bg-border"
        >
          {processSteps.map((step, i) => (
            <div
              key={step.number}
              className="bg-background p-8 hover:bg-secondary/30 dark:hover:bg-card/40 transition-colors duration-300 group"
            >
              <div className="flex items-start justify-between mb-8">
                <span className="home-label text-[var(--skydot-blue)]">{step.number}</span>
                {/* Connector line (only visible on large screens for visual flow) */}
                {i < processSteps.length - 1 && (
                  <span className="hidden lg:block h-px w-6 bg-border mt-1.5 -mr-12" aria-hidden />
                )}
              </div>
              <h3 className="text-xl font-bold tracking-tight mb-3">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
