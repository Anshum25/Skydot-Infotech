import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { AiMockup } from "@/components/animations/ai-mockup";

export function AiSection() {
  const aiFeatures = [
    "AI Chatbots & Virtual Assistants",
    "RAG Systems (Retrieval-Augmented Generation)",
    "Document Intelligence & OCR",
    "Workflow & Process Automation",
    "AI Analytics & Predictive Insights",
    "Custom AI Integration (OpenAI, Anthropic)",
  ];

  return (
    <section className="py-20 md:py-32 border-b border-border bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          <div className="order-2 lg:order-1 relative">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <AiMockup />
            </motion.div>
          </div>

          <div className="order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary mb-6"
            >
              <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
              AI & Automation
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold text-foreground mb-6 tracking-tight"
            >
              Practical AI for real business workflows.
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-muted-foreground mb-8 leading-relaxed"
            >
              We don't just build technology for technology's sake. Our AI integrations are designed to directly impact your bottom line—automating repetitive tasks, extracting intelligence from documents, and providing your team with instant access to critical data.
            </motion.p>

            <div className="space-y-4 mb-10">
              {aiFeatures.map((feature, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.3 + (i * 0.05) }}
                  className="flex items-start"
                >
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mr-3 mt-0.5" />
                  <span className="text-foreground">{feature}</span>
                </motion.div>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Link to="/solutions/ai-automation" className={buttonVariants({ size: "lg", className: "h-12 px-8 font-semibold" })}>
                Explore AI Solutions
              </Link>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
