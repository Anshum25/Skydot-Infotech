import { motion } from "framer-motion";

interface PageHeaderProps {
  title: React.ReactNode;
  description?: string;
  eyebrow?: string;
}

export function PageHeader({ title, description, eyebrow }: PageHeaderProps) {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden bg-background border-b border-border">
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-primary/5 via-primary/5 to-transparent blur-3xl -z-10" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col items-center text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-4xl mx-auto flex flex-col items-center"
        >
          {eyebrow && (
            <div className="inline-flex items-center rounded-full border border-border bg-background shadow-sm px-4 py-1.5 text-sm font-medium text-foreground mb-6">
              <span className="flex h-2 w-2 rounded-full bg-[var(--skydot-orange)] mr-2"></span>
              {eyebrow}
            </div>
          )}
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-foreground mb-6 leading-[1.1]">
            {title}
          </h1>
          
          {description && (
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
              {description}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
