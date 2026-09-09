import { useParams } from "react-router-dom";
import { PageHeader } from "@/components/layout/page-header";
import { ContactCtaSection } from "@/components/sections/contact-cta-section";
import { getIndustryData } from "@/data/industries-detailed";
import { ShieldAlert, Cpu, Network, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { buttonVariants } from "@/components/ui/button";

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

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="grid lg:grid-cols-3 gap-16">
            
            {/* Main Content Area */}
            <div className="lg:col-span-2 space-y-16">
              
              {/* How We Help */}
              <div>
                <h2 className="text-3xl font-bold mb-6">How Skydot Helps</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {industry.howWeHelp}
                </p>
              </div>

              {/* Industry Challenges */}
              <div>
                <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                  <ShieldAlert className="w-8 h-8 text-destructive" /> Core Challenges
                </h2>
                <div className="grid sm:grid-cols-2 gap-6">
                  {industry.challenges.map((challenge, i) => (
                    <div key={i} className="bg-destructive/5 border border-destructive/10 rounded-2xl p-6">
                      <h3 className="text-xl font-bold text-destructive mb-3">{challenge.title}</h3>
                      <p className="text-foreground text-sm leading-relaxed">{challenge.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Workflows */}
              <div>
                <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                  <Network className="w-8 h-8 text-[var(--skydot-orange)]" /> Digitized Workflows
                </h2>
                <div className="space-y-6">
                  {industry.workflows.map((flow, i) => (
                    <div key={i} className="flex gap-6 p-6 bg-card border border-border rounded-2xl">
                      <div className="w-12 h-12 rounded-xl bg-[var(--skydot-orange)]/10 flex items-center justify-center shrink-0 text-[var(--skydot-orange)] font-bold">
                        {i + 1}
                      </div>
                      <div>
                        <h4 className="text-xl font-bold mb-2">{flow.step}</h4>
                        <p className="text-muted-foreground">{flow.description}</p>
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
                <div className="bg-card border border-border rounded-3xl p-8 shadow-sm">
                  <h3 className="font-bold text-lg mb-6 text-foreground flex items-center gap-2">
                    <Cpu className="w-5 h-5 text-primary" /> Relevant Solutions
                  </h3>
                  <div className="space-y-3">
                    {industry.relevantSolutions.map((sol, i) => (
                      <Link key={i} to={`/solutions/${sol.slug}`} className="flex items-center justify-between p-3 rounded-xl hover:bg-secondary/50 transition-colors border border-transparent hover:border-border group">
                        <span className="text-sm font-medium">{sol.title}</span>
                        <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-transform group-hover:translate-x-1" />
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Relevant Products */}
                {industry.relevantProducts.length > 0 && (
                  <div className="bg-card border border-border rounded-3xl p-8 shadow-sm">
                    <h3 className="font-bold text-lg mb-6 text-foreground flex items-center gap-2">
                      <Cpu className="w-5 h-5 text-[var(--skydot-orange)]" /> Related Products
                    </h3>
                    <div className="space-y-3">
                      {industry.relevantProducts.map((prod, i) => (
                        <Link key={i} to={`/products/${prod.slug}`} className="flex items-center justify-between p-3 rounded-xl hover:bg-secondary/50 transition-colors border border-transparent hover:border-border group">
                          <span className="text-sm font-medium">{prod.title}</span>
                          <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-[var(--skydot-orange)] transition-transform group-hover:translate-x-1" />
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* Sidebar CTA */}
                <div className="bg-primary text-primary-foreground rounded-3xl p-8 shadow-xl">
                  <h3 className="font-bold text-2xl mb-4">Talk to an Expert</h3>
                  <p className="text-primary-foreground/80 mb-8 text-sm leading-relaxed">
                    Discuss your {industry.title} operations with our engineering specialists.
                  </p>
                  <Link to="/contact" className={buttonVariants({ variant: "secondary", className: "w-full rounded-xl" })}>
                    Schedule Call
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
                
              </div>
            </div>

          </div>
        </div>
      </section>

      <ContactCtaSection />
    </>
  );
}
