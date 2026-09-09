import { PageHeader } from "@/components/layout/page-header";
import { ContactCtaSection } from "@/components/sections/contact-cta-section";
import { getAllInsights } from "@/data/insights";
import { Link } from "react-router-dom";
import { Calendar, ArrowRight } from "lucide-react";




export default function InsightsPage() {
  const articles = getAllInsights();

  return (
    <>
      <PageHeader 
        eyebrow="Tech Blog"
        title="Engineering Insights"
        description="Perspectives on software architecture, artificial intelligence, and enterprise digital transformation from the Skydot engineering team."
      />

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <Link key={article.slug} to={`/insights/${article.slug}`} className="group flex flex-col bg-card border border-border rounded-3xl overflow-hidden hover:border-primary/50 transition-all">
                <div className="aspect-[4/3] bg-secondary relative overflow-hidden shrink-0">
                  <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors" />
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-primary text-xs font-bold uppercase tracking-wider">
                      {article.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">{article.title}</h3>
                  <p className="text-muted-foreground mb-6 line-clamp-3 text-sm flex-1">
                    {article.summary}
                  </p>
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-border/50 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {article.date}
                    </div>
                    <ArrowRight className="w-4 h-4 text-primary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
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
