import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import { homepageIndustries } from "@/data/homepage";

gsap.registerPlugin(ScrollTrigger);

export function HomeIndustriesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.from(headlineRef.current, {
        y: 28, opacity: 0, duration: 0.9, ease: "power3.out",
        scrollTrigger: { trigger: headlineRef.current, start: "top 80%" },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const active = homepageIndustries[activeIndex];

  return (
    <section
      ref={sectionRef}
      className="home-section relative py-24 md:py-32 bg-background border-t border-border"
      aria-label="Industries"
    >
      <div className="container mx-auto px-6 md:px-12">
        <div ref={headlineRef} className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 md:mb-20">
          <div>
            <p className="home-label mb-5">Industries</p>
            <h2 className="home-headline text-3xl md:text-5xl font-light text-balance">
              Built for how your industry works.
            </h2>
          </div>
        </div>

        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-16 items-start">
          {/* Industry list */}
          <div className="flex flex-col">
            {homepageIndustries.map((industry, i) => (
              <button
                key={industry.slug}
                onClick={() => setActiveIndex(i)}
                className={`group flex items-center justify-between py-5 border-b border-border text-left transition-all duration-200 ${
                  activeIndex === i
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <div className="flex items-center gap-4">
                  <span
                    className={`text-[11px] font-semibold tabular-nums transition-colors duration-200 ${
                      activeIndex === i ? "text-[var(--skydot-blue)]" : "text-border"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={`text-2xl md:text-3xl font-light tracking-tight transition-all duration-300 ${
                      activeIndex === i ? "text-foreground" : ""
                    }`}
                  >
                    {industry.name}
                  </span>
                </div>
                <ArrowUpRight
                  className={`h-5 w-5 transition-all duration-200 ${
                    activeIndex === i
                      ? "opacity-100 text-[var(--skydot-blue)]"
                      : "opacity-0 group-hover:opacity-50"
                  }`}
                />
              </button>
            ))}
          </div>

          {/* Detail card */}
          <div className="lg:sticky lg:top-28">
            <div className="rounded-[3px] border border-border bg-card p-8 md:p-10 transition-all duration-300">
              <p className="home-label text-[var(--skydot-blue)] mb-5">{active.name}</p>
              <p className="text-base text-muted-foreground leading-relaxed mb-8">
                {active.description}
              </p>

              {active.products.length > 0 && (
                <div className="mb-8">
                  <p className="home-label mb-3">Products</p>
                  <div className="flex flex-wrap gap-2">
                    {active.products.map((p) => (
                      <span
                        key={p}
                        className="text-xs font-medium px-3 py-1.5 rounded-[3px] border border-border bg-secondary/40"
                      >
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {active.solutions.length > 0 && (
                <div className="mb-8">
                  <p className="home-label mb-3">Capabilities</p>
                  <div className="flex flex-col gap-2">
                    {active.solutions.map((s) => (
                      <div key={s} className="flex items-center gap-2 text-sm text-foreground">
                        <span className="h-px w-3 bg-[var(--skydot-blue)]" />
                        {s}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <Link
                to={`/industries/${active.slug}`}
                className="inline-flex items-center gap-2 text-[13px] font-semibold text-[var(--skydot-blue)] hover:opacity-75 transition-opacity"
              >
                Explore {active.name} solutions <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
