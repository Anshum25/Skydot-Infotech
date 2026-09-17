import { PageHeader } from "@/components/layout/page-header";
import { HomeFinalCtaSection } from "@/components/home/final-cta";
import { getInsight } from "@/data/insights";

import { Calendar, User, Tag, ArrowRight } from "lucide-react";
import { Link, useParams, Navigate } from "react-router-dom";

export default function InsightDetail() {
  const params = useParams();
  const slug = params.slug || "";

  const article = getInsight(slug);
  if (!article) return <Navigate to="/404" replace />;

  return (
    <>
      <PageHeader 
        eyebrow="Technical Insight"
        title={article.title}
        description={article.summary}
      />

      <article className="home-section relative py-24 md:py-32 bg-background border-t border-border">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          
          {/* Metadata */}
          <div className="flex flex-wrap items-center gap-6 pb-8 border-b border-border mb-16 text-sm text-muted-foreground uppercase tracking-widest font-semibold">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4 text-[var(--skydot-blue)]" />
              <span className="text-foreground">{article.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[var(--skydot-orange)]" />
              <span>{article.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Tag className="w-4 h-4 text-green-500" />
              <span>{article.category}</span>
            </div>
          </div>

          {/* Content Body */}
          <div className="prose prose-lg dark:prose-invert max-w-none mb-24 text-muted-foreground leading-loose">
            <p className="text-xl text-foreground leading-relaxed font-light mb-8">
              {article.summary}
            </p>
            <p>
              {article.content}
            </p>
          </div>

          {/* Related Articles */}
          {article.relatedSlugs.length > 0 && (
            <div className="border-t border-border pt-16">
              <p className="home-label mb-5 text-[var(--skydot-orange)]">Keep Reading</p>
              <h3 className="home-headline text-3xl font-light mb-8">Related Insights</h3>
              <div className="grid sm:grid-cols-2 gap-px bg-border">
                {article.relatedSlugs.map((slug) => {
                  const related = getInsight(slug);
                  if (!related) return null;
                  return (
                    <Link key={slug} to={`/insights/${slug}`} className="group flex flex-col p-7 md:p-9 bg-background hover:bg-secondary/40 transition-colors duration-300">
                      <div className="text-[11px] font-bold text-[var(--skydot-blue)] mb-4 uppercase tracking-widest">{related.category}</div>
                      <h4 className="text-lg font-semibold text-foreground mb-4 group-hover:text-[var(--skydot-orange)] transition-colors line-clamp-2">{related.title}</h4>
                      <p className="text-sm text-muted-foreground line-clamp-3 mb-6 flex-1 leading-relaxed">{related.summary}</p>
                      <div className="flex items-center text-[11px] font-semibold uppercase tracking-widest text-primary mt-auto pt-4 border-t border-border/50">
                        Read Article
                        <ArrowRight className="w-3 h-3 ml-1.5 transition-transform group-hover:translate-x-1" />
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          )}

        </div>
      </article>

      <HomeFinalCtaSection />
    </>
  );
}
