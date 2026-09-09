import { PageHeader } from "@/components/layout/page-header";
import { ContactCtaSection } from "@/components/sections/contact-cta-section";
import { getCaseStudy } from "@/data/work";
import { useParams, Navigate } from "react-router-dom";export default function CaseStudyPage() {
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

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <div className="grid lg:grid-cols-3 gap-16">
            
            {/* Main Content Area */}
            <div className="lg:col-span-2 space-y-16">
              
              <div>
                <h2 className="text-3xl font-bold mb-6">The Challenge</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {cs.challenge}
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-6">The Solution</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {cs.solution}
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-8">The Results</h2>
                <div className="grid sm:grid-cols-2 gap-6">
                  {cs.results.map((result, i) => (
                    <div key={i} className="bg-card border border-border rounded-2xl p-6">
                      <div className="text-4xl font-bold text-primary mb-2">{result.metric}</div>
                      <p className="text-muted-foreground text-sm font-medium">{result.description}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-32 space-y-8">
                
                <div className="bg-secondary/30 border border-border rounded-3xl p-8">
                  <h3 className="font-bold text-lg mb-6 text-foreground border-b border-border pb-4">Client Overview</h3>
                  <div className="space-y-4">
                    <div>
                      <span className="block text-sm text-muted-foreground mb-1">Client</span>
                      <span className="font-medium text-foreground">{cs.client}</span>
                    </div>
                    <div>
                      <span className="block text-sm text-muted-foreground mb-1">Industry</span>
                      <span className="font-medium text-foreground">{cs.industry}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-secondary/30 border border-border rounded-3xl p-8">
                  <h3 className="font-bold text-lg mb-6 text-foreground border-b border-border pb-4">Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {cs.technologies.map((tech, i) => (
                      <span key={i} className="px-3 py-1.5 bg-background text-foreground text-xs font-medium rounded-full border border-border">
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

      <ContactCtaSection />
    </>
  );
}
