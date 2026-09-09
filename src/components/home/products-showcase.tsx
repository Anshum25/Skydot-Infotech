import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import { featuredProducts } from "@/data/homepage";

gsap.registerPlugin(ScrollTrigger);

export function HomeProductsShowcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!sectionRef.current) return;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      itemRefs.current.forEach((el) => {
        if (!el) return;
        gsap.from(el, {
          y: 32, opacity: 0, duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 82%" },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="home-section relative py-24 md:py-32 bg-secondary/20 dark:bg-card/10 border-t border-border"
      aria-label="Products"
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 md:mb-20">
          <div>
            <p className="home-label mb-5">Products</p>
            <h2 className="home-headline text-3xl md:text-5xl font-light text-balance">
              Software built for specific problems.
            </h2>
          </div>
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--skydot-blue)] shrink-0 hover:opacity-75 transition-opacity"
          >
            All products <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-border">
          {featuredProducts.map((product, i) => (
            <div
              key={product.slug}
              ref={(el) => { itemRefs.current[i] = el; }}
              className="group bg-background dark:bg-background p-8 md:p-10 flex flex-col justify-between min-h-[280px] hover:bg-secondary/30 dark:hover:bg-card/40 transition-colors duration-300"
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div>
                    <span className="home-label text-[var(--skydot-blue)] mb-2 block">{product.category}</span>
                    <h3 className="text-2xl md:text-3xl font-light tracking-tight">{product.title}</h3>
                  </div>
                  <Link
                    to={`/products/${product.slug}`}
                    className="shrink-0 h-9 w-9 rounded-full border border-border flex items-center justify-center text-muted-foreground group-hover:border-[var(--skydot-blue)] group-hover:text-[var(--skydot-blue)] transition-all duration-200"
                    aria-label={`View ${product.title}`}
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{product.description}</p>
              </div>

              <div className="mt-8">
                <div className="flex flex-wrap gap-1.5">
                  {product.technologies.slice(0, 4).map((tech) => (
                    <span key={tech} className="text-[11px] font-medium px-2.5 py-1 rounded-[3px] border border-border bg-background/60">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
