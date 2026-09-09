import { PageHeader } from "@/components/layout/page-header";
import { ContactCtaSection } from "@/components/sections/contact-cta-section";
import { getSolutionData } from "@/data/solutions-detailed";
import { CheckCircle2, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { buttonVariants } from "@/components/ui/button";

import { useParams } from "react-router-dom";
export default function SolutionDetail() {
  const params = useParams();
  const slug = params.slug || "";

  const solution = getSolutionData(slug);

  return (
    <>
      <PageHeader 
        eyebrow="Technology Service"
        title={solution.title}
        description={solution.description}
      />

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <div className="grid lg:grid-cols-3 gap-16">
            
            {/* Main Content Area */}
            <div className="lg:col-span-2 space-y-16">
              
              {/* Overview */}
              <div>
                <h2 className="text-3xl font-bold mb-6">Service Overview</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {solution.overview}
                </p>
              </div>

              {/* Capabilities */}
              <div>
                <h2 className="text-3xl font-bold mb-8">Core Capabilities</h2>
                <div className="grid sm:grid-cols-2 gap-6">
                  {solution.capabilities.map((cap, i) => (
                    <div key={i} className="bg-secondary/20 border border-border rounded-2xl p-6">
                      <h3 className="text-xl font-bold mb-3">{cap.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{cap.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Business Benefits */}
              <div>
                <h2 className="text-3xl font-bold mb-6">Business Benefits</h2>
                <ul className="space-y-4">
                  {solution.benefits.map((benefit, i) => (
                    <li key={i} className="flex gap-4 p-4 border border-border rounded-xl bg-card">
                      <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                      <div>
                        <h4 className="font-bold text-foreground mb-1">{benefit.title}</h4>
                        <p className="text-sm text-muted-foreground">{benefit.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Process */}
              <div>
                <h2 className="text-3xl font-bold mb-8">Our Process</h2>
                <div className="space-y-6">
                  {solution.process.map((step, i) => (
                    <div key={i} className="flex gap-6">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-primary font-bold">
                        {i + 1}
                      </div>
                      <div className="pt-3 border-b border-border pb-6 flex-1">
                        <h4 className="text-xl font-bold mb-2">{step.step}</h4>
                        <p className="text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQ */}
              <div>
                <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  {solution.faqs.map((faq, i) => (
                    <div key={i} className="border border-border rounded-xl p-6">
                      <h4 className="font-bold text-foreground mb-3">{faq.question}</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">{faq.answer}</p>
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
                  <div className="bg-card border border-border rounded-3xl p-8">
                    <h3 className="font-bold text-lg mb-6">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {solution.technologies.map((tech, i) => (
                        <span key={i} className="px-3 py-1.5 bg-secondary/50 text-secondary-foreground text-xs font-medium rounded-full border border-border/50">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Sidebar CTA */}
                <div className="bg-primary text-primary-foreground rounded-3xl p-8 shadow-xl">
                  <h3 className="font-bold text-2xl mb-4">Ready to modernize?</h3>
                  <p className="text-primary-foreground/80 mb-8 text-sm leading-relaxed">
                    Discuss your {solution.title.toLowerCase()} requirements directly with our engineering team.
                  </p>
                  <Link to="/contact" className={buttonVariants({ variant: "secondary", className: "w-full rounded-xl" })}>
                    Schedule Consultation
                    <ChevronRight className="w-4 h-4 ml-2" />
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
