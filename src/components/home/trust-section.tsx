import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { trustContent } from "@/data/homepage";

gsap.registerPlugin(ScrollTrigger);

export function HomeTrustSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const pillarsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.from(headlineRef.current, {
        y: 28, opacity: 0, duration: 0.9, ease: "power3.out",
        scrollTrigger: { trigger: headlineRef.current, start: "top 80%" },
      });

      const cols = pillarsRef.current?.children;
      if (cols) {
        gsap.from(Array.from(cols), {
          y: 20, opacity: 0, duration: 0.6, ease: "power3.out", stagger: 0.1,
          scrollTrigger: { trigger: pillarsRef.current, start: "top 78%" },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="home-section relative py-24 md:py-32 bg-secondary/30 dark:bg-card/10 border-t border-border"
      aria-label="Trust"
    >
      <div className="container mx-auto px-6 md:px-12">
        <div ref={headlineRef} className="max-w-3xl mb-16 md:mb-20">
          <p className="home-label mb-5">Built for reality</p>
          <h2 className="home-headline text-3xl md:text-5xl font-light text-balance leading-tight">
            {trustContent.headline}
          </h2>
        </div>

        <div ref={pillarsRef} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {trustContent.pillars.map((pillar) => (
            <div key={pillar.label} className="bg-background dark:bg-background p-7 md:p-8">
              <p className="home-label mb-5 text-[var(--skydot-blue)]">{pillar.label}</p>
              <ul className="space-y-2.5">
                {pillar.items.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className="text-sm text-foreground font-medium hover:text-[var(--skydot-blue)] transition-colors duration-200 flex items-center gap-2 group"
                    >
                      <span className="h-px w-3 bg-border group-hover:bg-[var(--skydot-blue)] transition-colors duration-200 shrink-0" />
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
