import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { homepageWork } from "@/data/homepage";

type Project = typeof homepageWork[0];

const StickyProjectCard = ({
  i,
  project,
  progress,
  range,
  targetScale,
}: {
  i: number;
  project: Project;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}) => {
  const container = useRef<HTMLDivElement>(null);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="sticky top-0 flex h-screen w-full items-start justify-center px-4 md:px-6 pt-[10vh]"
    >
      <motion.article
        style={{
          scale,
          top: `calc(${i * 12}vh + ${i * 15}px)`,
        }}
        className="relative origin-top w-full max-w-5xl bg-white dark:bg-[#0A1628] border border-border shadow-2xl rounded-3xl overflow-hidden flex flex-col will-change-transform"
      >
        <Link 
          to={`/work/${project.slug}`} 
          className="flex flex-col h-full group px-8 py-6 md:px-12 md:py-8 lg:px-16 lg:py-10 hover:bg-secondary/20 transition-colors duration-500"
        >
          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 items-start h-full">
            <div className="flex flex-col h-full">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="home-label text-[var(--skydot-blue)]">{project.industry}</span>
                <span className="h-px w-4 bg-border" />
                <span className="home-label">{project.technologies.slice(0, 3).join(" · ")}</span>
              </div>
              
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight mb-4 group-hover:text-[var(--skydot-blue)] transition-colors duration-300 text-balance line-clamp-2">
                {project.title}
              </h3>
              
              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl mb-12">
                {project.summary}
              </p>

              <div className="mt-auto flex items-center gap-2 text-sm font-semibold text-[var(--skydot-blue)] group-hover:gap-3 transition-all duration-300">
                Read full case study <ArrowUpRight className="h-4 w-4" />
              </div>
            </div>

            {project.results.length > 0 && (
              <div className="flex flex-col justify-center h-full gap-8 lg:border-l lg:border-border lg:pl-12">
                {project.results.map((r) => (
                  <div key={r.metric}>
                    <p className="text-4xl md:text-5xl font-light tracking-tight text-foreground mb-3">{r.metric}</p>
                    <p className="text-sm font-medium text-muted-foreground leading-relaxed">{r.description}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </Link>
      </motion.article>
    </div>
  );
};

export function HomeWorkSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section
      className="home-section relative bg-secondary/10 dark:bg-background border-t border-border"
      aria-label="Work"
    >
      <div className="container mx-auto px-6 md:px-12 pt-24 md:pt-32 pb-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p className="home-label mb-5">Work</p>
            <h2 className="home-headline text-3xl md:text-5xl font-light text-balance">
              Built for real-world complexity.
            </h2>
          </div>
          <Link
            to="/work"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--skydot-blue)] shrink-0 hover:opacity-75 transition-opacity"
          >
            All case studies <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      <main
        ref={containerRef}
        className="relative flex w-full flex-col items-center justify-center"
      >
        {homepageWork.map((project, i) => {
          const targetScale = Math.max(
            0.85,
            1 - (homepageWork.length - i - 1) * 0.05
          );
          
          return (
            <StickyProjectCard
              key={project.slug}
              i={i}
              project={project}
              progress={scrollYProgress}
              // The range defines when this card should start scaling down.
              // It starts scaling down when it hits the top (progress = i * segment)
              // and scales down as the rest of the section scrolls.
              range={[i * (1 / homepageWork.length), 1]}
              targetScale={targetScale}
            />
          );
        })}
      </main>
    </section>
  );
}
