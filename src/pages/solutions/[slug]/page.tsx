import { PageHeader } from "@/components/layout/page-header";
import { HomeFinalCtaSection } from "@/components/home/final-cta";
import { getSolutionData } from "@/data/solutions-detailed";
import { CheckCircle2, ChevronRight, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

import { useParams } from "react-router-dom";
export default function SolutionDetail() {
  const params = useParams();
  const slug = params.slug || "";

  const solution = getSolutionData(slug);

  useEffect(() => {
    if (solution) {
      document.title = `${solution.title} | Skydot Infotech`;
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute("content", solution.description);
      } else {
        const meta = document.createElement('meta');
        meta.name = "description";
        meta.content = solution.description;
        document.head.appendChild(meta);
      }
    }
  }, [solution]);

  return (
    <>
      <PageHeader 
        eyebrow="Technology Service"
        title={solution.title}
        description={solution.description}
      />

      <section className="home-section relative py-24 md:py-32 bg-background border-t border-border">
        <div className="container mx-auto px-6 md:px-12 max-w-6xl">
          <div className="grid lg:grid-cols-3 gap-16 md:gap-24">
            
            {/* Main Content Area */}
            <div className="lg:col-span-2 space-y-24">
              
              {/* Overview */}
              <div>
                <p className="home-label mb-5 text-[var(--skydot-blue)]">Overview</p>
                <h2 className="home-headline text-3xl md:text-5xl font-light text-balance mb-8">Service Overview</h2>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-normal">
                  {solution.overview}
                </p>
              </div>

              {/* Capabilities */}
              <div>
                <p className="home-label mb-5 text-green-500">Features</p>
                <h2 className="home-headline text-3xl md:text-5xl font-light text-balance mb-8">Core Capabilities</h2>
                <div className="grid sm:grid-cols-2 gap-px bg-border">
                  {solution.capabilities.map((cap, i) => (
                    <div key={i} className="bg-background p-7 md:p-9 hover:bg-secondary/40 transition-colors duration-300">
                      <h3 className="text-lg font-semibold tracking-tight text-foreground mb-3">{cap.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{cap.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Business Benefits */}
              <div>
                <p className="home-label mb-5 text-[var(--skydot-orange)]">Value</p>
                <h2 className="home-headline text-3xl md:text-5xl font-light text-balance mb-8">Business Benefits</h2>
                <div className="grid grid-cols-1 gap-px bg-border">
                  {solution.benefits.map((benefit, i) => (
                    <div key={i} className="flex gap-6 bg-background p-7 md:p-9 hover:bg-secondary/40 transition-colors duration-300">
                      <CheckCircle2 className="w-6 h-6 text-[var(--skydot-orange)] shrink-0" />
                      <div>
                        <h4 className="text-lg font-semibold tracking-tight text-foreground mb-2">{benefit.title}</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Process */}
              <div>
                <p className="home-label mb-5 text-[var(--skydot-blue)]">Execution</p>
                <h2 className="home-headline text-3xl md:text-5xl font-light text-balance mb-8">Our Process</h2>
                <div className="grid grid-cols-1 gap-px bg-border">
                  {solution.process.map((step, i) => (
                    <div key={i} className="flex gap-6 bg-background p-7 md:p-9 hover:bg-secondary/40 transition-colors duration-300">
                      <div className="w-10 h-10 flex items-center justify-center shrink-0 text-[var(--skydot-blue)] font-bold text-lg">
                        0{i + 1}
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold tracking-tight text-foreground mb-2">{step.step}</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQ */}
              <div>
                <p className="home-label mb-5 text-muted-foreground">Support</p>
                <h2 className="home-headline text-3xl md:text-5xl font-light text-balance mb-8">Frequently Asked Questions</h2>
                <div className="grid grid-cols-1 gap-px bg-border">
                  {solution.faqs.map((faq, i) => (
                    <div key={i} className="bg-background p-7 md:p-9 hover:bg-secondary/40 transition-colors duration-300">
                      <h4 className="text-lg font-semibold tracking-tight text-foreground mb-4">{faq.question}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-32 space-y-8">
                
                {/* Tech Stack */}
                {solution.technologies.length > 0 && (
                  <div className="bg-background border border-border/50 p-8 shadow-sm">
                    <h3 className="home-label text-foreground mb-6">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {solution.technologies.map((tech, i) => (
                        <span key={i} className="px-3 py-1.5 bg-secondary/30 text-muted-foreground text-[11px] uppercase tracking-widest font-semibold border border-border/50">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Sidebar CTA */}
                <div className="bg-[var(--skydot-blue)] text-white p-8">
                  <h3 className="text-2xl font-light tracking-tight mb-4 text-balance">Ready to modernize?</h3>
                  <p className="text-white/80 mb-8 text-sm leading-relaxed font-medium">
                    Discuss your {solution.title.toLowerCase()} requirements directly with our engineering team.
                  </p>
                  <Link to="/contact" className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-widest text-white group">
                    Schedule Consultation
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
