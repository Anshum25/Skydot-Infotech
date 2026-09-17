import { useParams } from "react-router-dom";
import { PageHeader } from "@/components/layout/page-header";
import { HomeFinalCtaSection } from "@/components/home/final-cta";
import { getIndustryData } from "@/data/industries-detailed";
import { ShieldAlert, Cpu, Network, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function IndustryDetail() {
  const params = useParams();
  const slug = params.slug || "";

  const industry = getIndustryData(slug);

  return (
    <>
      <PageHeader 
        eyebrow="Industry Expertise"
        title={industry.title}
        description={industry.description}
      />

      <section className="home-section relative py-24 md:py-32 bg-background border-t border-border">
        <div className="container mx-auto px-6 md:px-12 max-w-6xl">
          <div className="grid lg:grid-cols-3 gap-16 md:gap-24">
            
            {/* Main Content Area */}
            <div className="lg:col-span-2 space-y-24">
              
              {/* How We Help */}
              <div>
                <p className="home-label mb-5 text-[var(--skydot-blue)]">Overview</p>
                <h2 className="home-headline text-3xl md:text-5xl font-light text-balance mb-8">How Skydot Helps</h2>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-normal">
                  {industry.howWeHelp}
                </p>
              </div>

              {/* Industry Challenges */}
              <div>
                <p className="home-label mb-5 text-destructive">Pain Points</p>
                <h2 className="home-headline text-3xl md:text-5xl font-light text-balance mb-8">
                  Core Challenges
                </h2>
                <div className="grid sm:grid-cols-2 gap-px bg-border">
                  {industry.challenges.map((challenge, i) => (
                    <div key={i} className="bg-background p-7 md:p-9 hover:bg-secondary/40 transition-colors duration-300">
                      <ShieldAlert className="w-6 h-6 text-destructive mb-4" />
                      <h3 className="text-lg font-semibold tracking-tight text-foreground mb-3">{challenge.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{challenge.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Workflows */}
              <div>
                <p className="home-label mb-5 text-[var(--skydot-orange)]">Process</p>
                <h2 className="home-headline text-3xl md:text-5xl font-light text-balance mb-8">
                  Digitized Workflows
                </h2>
                <div className="grid grid-cols-1 gap-px bg-border">
                  {industry.workflows.map((flow, i) => (
                    <div key={i} className="flex gap-6 p-7 md:p-9 bg-background hover:bg-secondary/40 transition-colors duration-300">
                      <div className="w-10 h-10 flex items-center justify-center shrink-0 text-[var(--skydot-orange)] font-bold text-lg">
                        0{i + 1}
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold tracking-tight mb-2">{flow.step}</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">{flow.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-32 space-y-8">
                
                {/* Relevant Solutions */}
                <div className="bg-background border border-border/50 p-8 shadow-sm">
                  <h3 className="home-label text-primary mb-6 flex items-center gap-2">
                     Relevant Solutions
                  </h3>
                  <div className="space-y-4">
                    {industry.relevantSolutions.map((sol, i) => (
                      <Link key={i} to={`/solutions/${sol.slug}`} className="flex items-center justify-between pb-3 border-b border-border/50 group last:border-0 last:pb-0">
                        <span className="text-sm font-semibold text-muted-foreground group-hover:text-foreground transition-colors">{sol.title}</span>
                        <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-transform group-hover:translate-x-1" />
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Relevant Products */}
                {industry.relevantProducts.length > 0 && (
                  <div className="bg-background border border-border/50 p-8 shadow-sm">
                    <h3 className="home-label text-[var(--skydot-orange)] mb-6 flex items-center gap-2">
                       Related Products
                    </h3>
                    <div className="space-y-4">
                      {industry.relevantProducts.map((prod, i) => (
                        <Link key={i} to={`/products/${prod.slug}`} className="flex items-center justify-between pb-3 border-b border-border/50 group last:border-0 last:pb-0">
                          <span className="text-sm font-semibold text-muted-foreground group-hover:text-foreground transition-colors">{prod.title}</span>
                          <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-[var(--skydot-orange)] transition-transform group-hover:translate-x-1" />
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* Sidebar CTA */}
                <div className="bg-[var(--skydot-blue)] text-white p-8">
                  <h3 className="text-2xl font-light tracking-tight mb-4 text-balance">Talk to an Expert</h3>
                  <p className="text-white/80 mb-8 text-sm leading-relaxed font-medium">
                    Discuss your {industry.title} operations with our engineering specialists.
                  </p>
                  <Link to="/contact" className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-widest text-white group">
                    Schedule Call
                    <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                  </Link>
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
