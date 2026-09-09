import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";

export function InsightsPreviewSection() {
  const insights = [
    {
      category: "AI & Automation",
      title: "How RAG Systems are Transforming Enterprise Knowledge Management",
      date: "October 12, 2023",
      href: "/insights/rag-systems-enterprise-knowledge",
    },
    {
      category: "Software Engineering",
      title: "Microservices vs Monolith: Choosing the Right Architecture for Scale",
      date: "September 28, 2023",
      href: "/insights/microservices-vs-monolith",
    },
    {
      category: "Digital Transformation",
      title: "The Hidden Costs of Legacy ERP Systems in Manufacturing",
      date: "September 15, 2023",
      href: "/insights/legacy-erp-costs-manufacturing",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-muted/30 border-b border-border">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4"
            >
              Latest Insights
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-lg text-muted-foreground"
            >
              Perspectives on technology, business strategy, and digital transformation.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <Link to="/insights" className={buttonVariants({ variant: "outline" })}>
              View All Articles
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {insights.map((insight, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link to={insight.href} className="group flex flex-col h-full bg-card border border-border p-8 hover:border-primary/50 transition-colors">
                <div className="text-xs font-semibold text-primary uppercase tracking-wider mb-4">
                  {insight.category}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-6 leading-snug group-hover:text-primary transition-colors">
                  {insight.title}
                </h3>
                <div className="mt-auto flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">{insight.date}</span>
                  <span className="text-foreground group-hover:text-primary transition-colors">
                    <ArrowUpRight className="w-5 h-5" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
