import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CareersPreviewSection() {
  return (
    <section className="py-20 md:py-32 bg-background border-b border-border">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-6">
              Build meaningful technology with us.
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-lg">
              Join a team of passionate engineers, designers, and problem solvers. At Skydot Infotech, we foster a culture of continuous learning, deep technical excellence, and zero bureaucracy.
            </p>
            
            <Link to="/careers" className={buttonVariants({ size: "lg", className: "group" })}>
              View Open Positions
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="space-y-4">
              <div className="bg-muted border border-border p-6 aspect-square flex flex-col justify-end">
                <div className="font-bold text-foreground text-xl">Culture</div>
                <div className="text-sm text-muted-foreground mt-2">Zero ego, high impact.</div>
              </div>
              <div className="bg-muted/50 border border-border p-6 aspect-video flex flex-col justify-end">
                <div className="font-bold text-foreground text-xl">Learning</div>
                <div className="text-sm text-muted-foreground mt-2">Continuous upskilling.</div>
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="bg-primary/5 border border-primary/20 p-6 aspect-video flex flex-col justify-end">
                <div className="font-bold text-primary text-xl">Open Roles</div>
                <div className="text-sm text-primary mt-2">5+ Positions available</div>
              </div>
              <div className="bg-card border border-border p-6 aspect-square flex flex-col justify-end">
                <div className="font-bold text-foreground text-xl">Career Growth</div>
                <div className="text-sm text-muted-foreground mt-2">Defined promotion paths.</div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
