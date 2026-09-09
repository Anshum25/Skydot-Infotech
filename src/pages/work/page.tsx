import { PageHeader } from "@/components/layout/page-header";
import { ContactCtaSection } from "@/components/sections/contact-cta-section";
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

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8">
            {cases.map((cs) => (
              <Link key={cs.slug} to={`/work/${cs.slug}`} className="group block bg-card border border-border rounded-3xl overflow-hidden hover:border-primary/50 transition-all">
                <div className="aspect-video bg-secondary relative overflow-hidden">
                  <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors" />
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-secondary text-secondary-foreground text-xs font-medium rounded-full">
                      {cs.industry}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{cs.title}</h3>
                  <p className="text-muted-foreground mb-6 line-clamp-2">
                    {cs.summary}
                  </p>
                  <div className="flex items-center text-primary font-medium text-sm">
                    Read Case Study
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ContactCtaSection />
    </>
  );
}
