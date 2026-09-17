import { PageHeader } from "@/components/layout/page-header";
import { HomeFinalCtaSection } from "@/components/home/final-cta";
import { getCaseStudy } from "@/data/work";
import { useParams, Navigate } from "react-router-dom";

export default function CaseStudyPage() {
  const params = useParams();
  const { slug } = params;
  const cs = getCaseStudy(slug || "");
  if (!cs) {
    return <Navigate to="/404" replace />;
  } return (
    <>
      <PageHeader 
        eyebrow="Case Study"
        title={cs.title}
        description={cs.summary}
      />

      <section className="home-section relative py-24 md:py-32 bg-background border-t border-border">
        <div className="container mx-auto px-6 md:px-12 max-w-6xl">
          <div className="grid lg:grid-cols-3 gap-16 md:gap-24">
            
            {/* Main Content Area */}
            <div className="lg:col-span-2 space-y-24">
              
              <div>
                <p className="home-label mb-5 text-destructive">The Challenge</p>
                <h2 className="home-headline text-3xl md:text-5xl font-light text-balance mb-8">What We Faced</h2>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-normal">
                  {cs.challenge}
                </p>
              </div>

              <div>
                <p className="home-label mb-5 text-[var(--skydot-blue)]">The Solution</p>
                <h2 className="home-headline text-3xl md:text-5xl font-light text-balance mb-8">How We Solved It</h2>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-normal">
                  {cs.solution}
                </p>
              </div>

              <div>
                <p className="home-label mb-5 text-[var(--skydot-orange)]">The Impact</p>
                <h2 className="home-headline text-3xl md:text-5xl font-light text-balance mb-8">The Results</h2>
                <div className="grid sm:grid-cols-2 gap-px bg-border">
                  {cs.results.map((result, i) => (
                    <div key={i} className="bg-background p-7 md:p-9 hover:bg-secondary/40 transition-colors duration-300 flex flex-col justify-center">
                      <div className="text-4xl md:text-5xl font-light tracking-tight text-primary mb-4">{result.metric}</div>
                      <p className="text-muted-foreground text-sm font-medium leading-relaxed">{result.description}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-32 space-y-8">
                
                <div className="bg-background border border-border/50 p-8 shadow-sm">
                  <h3 className="home-label text-foreground mb-6">Client Overview</h3>
                  <div className="space-y-6">
                    <div>
                      <span className="block text-[11px] font-semibold uppercase tracking-widest text-muted-foreground mb-1.5">Client</span>
                      <span className="font-semibold text-foreground">{cs.client}</span>
                    </div>
                    <div>
                      <span className="block text-[11px] font-semibold uppercase tracking-widest text-muted-foreground mb-1.5">Industry</span>
                      <span className="font-semibold text-foreground">{cs.industry}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-background border border-border/50 p-8 shadow-sm">
                  <h3 className="home-label text-foreground mb-6">Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {cs.technologies.map((tech, i) => (
                      <span key={i} className="px-3 py-1.5 bg-secondary/30 text-muted-foreground text-[11px] uppercase tracking-widest font-semibold border border-border/50">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
              </div>
            </div>

          </div>
        </div>
      </section>

      <HomeFinalCtaSection />
    </>
  );
}
