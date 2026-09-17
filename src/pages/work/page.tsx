import { PageHeader } from "@/components/layout/page-header";
import { HomeFinalCtaSection } from "@/components/home/final-cta";
import { getAllCaseStudies } from "@/data/work";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function WorkPage() {
  const cases = getAllCaseStudies();

  return (
    <>
      <PageHeader 
        eyebrow="Our Work"
        title="Engineering Success Stories"
        description="Discover how we partner with enterprises, government bodies, and institutions to solve complex operational challenges through robust software engineering."
      />

      <section className="home-section relative py-24 md:py-32 bg-background border-t border-border">
        <div className="container mx-auto px-6 md:px-12 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-px bg-border">
            {cases.map((cs) => (
              <Link key={cs.slug} to={`/work/${cs.slug}`} className="group flex flex-col bg-background p-7 md:p-9 hover:bg-secondary/40 transition-colors duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <span className="home-label text-[var(--skydot-blue)]">
                    {cs.industry}
                  </span>
                </div>
                <h3 className="text-xl font-semibold tracking-tight text-foreground mb-4 group-hover:text-primary transition-colors">{cs.title}</h3>
                <p className="text-sm text-muted-foreground mb-8 line-clamp-2 leading-relaxed flex-1">
                  {cs.summary}
                </p>
                <div className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-primary uppercase tracking-widest mt-auto pt-4 border-t border-border/50">
                  Read Case Study
                  <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <HomeFinalCtaSection />
    </>
  );
}
