import { PageHeader } from "@/components/layout/page-header";
import { ContactCtaSection } from "@/components/sections/contact-cta-section";
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

      <article className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          
          {/* Metadata */}
          <div className="flex flex-wrap items-center gap-6 pb-8 border-b border-border mb-12 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4 text-primary" />
              <span className="font-medium text-foreground">{article.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-primary" />
              <span>{article.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Tag className="w-4 h-4 text-primary" />
              <span>{article.category}</span>
            </div>
          </div>

          {/* Content Body */}
          <div className="prose prose-lg dark:prose-invert max-w-none mb-24 text-muted-foreground leading-loose">
            <p className="text-xl text-foreground leading-relaxed font-medium mb-8">
              {article.summary}
            </p>
            <p>
              {article.content}
            </p>
          </div>

          {/* Related Articles */}
          {article.relatedSlugs.length > 0 && (
            <div className="border-t border-border pt-12">
              <h3 className="text-2xl font-bold mb-8">Related Insights</h3>
              <div className="grid sm:grid-cols-2 gap-6">
                {article.relatedSlugs.map((slug) => {
                  const related = getInsight(slug);
                  if (!related) return null;
                  return (
                    <Link key={slug} to={`/insights/${slug}`} className="group p-6 bg-secondary/20 border border-border rounded-2xl hover:border-primary/50 transition-colors">
                      <div className="text-xs font-bold text-primary mb-3 uppercase tracking-wider">{related.category}</div>
                      <h4 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors">{related.title}</h4>
                      <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{related.summary}</p>
                      <div className="flex items-center text-primary text-sm font-medium">
                        Read Article
                        <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          )}

        </div>
      </article>

      <ContactCtaSection />
    </>
  );
}
