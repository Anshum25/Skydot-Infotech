import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import { serviceGroups } from "@/data/homepage";

gsap.registerPlugin(ScrollTrigger);

export function HomeServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.from(headlineRef.current, {
        y: 28, opacity: 0, duration: 0.9, ease: "power3.out",
        scrollTrigger: { trigger: headlineRef.current, start: "top 80%" },
      });
      const cols = gridRef.current?.children;
      if (cols) {
        gsap.from(Array.from(cols), {
          y: 20, opacity: 0, duration: 0.6, ease: "power3.out", stagger: 0.1,
          scrollTrigger: { trigger: gridRef.current, start: "top 78%" },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="home-section relative py-24 md:py-32 bg-background border-t border-border"
      aria-label="Services"
    >
      <div className="container mx-auto px-6 md:px-12">
        <div ref={headlineRef} className="mb-16 md:mb-20">
          <p className="home-label mb-5">Services</p>
          <h2 className="home-headline text-3xl md:text-5xl font-light text-balance max-w-2xl">
            Everything your business needs to run on software.
          </h2>
        </div>

        <div ref={gridRef} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {serviceGroups.map((group) => (
            <div key={group.title} className="bg-background p-7 md:p-8">
              <h3 className="text-sm font-semibold text-foreground mb-5 tracking-tight">{group.title}</h3>
              <ul className="space-y-3">
                {group.items.map((item) => (
                  <li key={item.label}>
                    <Link
                      to={item.href}
                      className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                    >
                      <ArrowUpRight className="h-3.5 w-3.5 shrink-0 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-200 text-[var(--skydot-blue)]" />
                      {item.label}
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
