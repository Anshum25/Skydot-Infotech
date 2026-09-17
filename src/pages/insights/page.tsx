import { PageHeader } from "@/components/layout/page-header";
import { HomeFinalCtaSection } from "@/components/home/final-cta";
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

      <section className="home-section relative py-24 md:py-32 bg-background border-t border-border">
        <div className="container mx-auto px-6 md:px-12 max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {articles.map((article) => (
              <Link key={article.slug} to={`/insights/${article.slug}`} className="group flex flex-col bg-background p-7 md:p-9 hover:bg-secondary/40 transition-colors duration-300">
                <div className="flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-6">
                    <span className="home-label text-[var(--skydot-blue)]">
                      {article.category}
                    </span>
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold tracking-tight mb-4 group-hover:text-primary transition-colors line-clamp-3 leading-snug">{article.title}</h3>
                  <p className="text-muted-foreground mb-8 line-clamp-3 text-sm flex-1 leading-relaxed">
                    {article.summary}
                  </p>
                  <div className="flex items-center justify-between mt-auto pt-6 border-t border-border/50 text-[11px] font-semibold text-muted-foreground uppercase tracking-widest">
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

      <HomeFinalCtaSection />
    </>
  );
}
