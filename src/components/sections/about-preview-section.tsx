import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { companyData } from "@/data/company";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function AboutPreviewSection() {
  return (
    <section className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-background rounded-l-3xl -z-10 hidden lg:block border-y border-l border-border/40 shadow-sm" />
      
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col space-y-6"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
              Technology is what we build. <br/>
              <span className="text-primary">Partnerships are what we grow.</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {companyData.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="h-5 w-5 text-accent" />
                <span className="font-medium text-sm">Decade of Excellence</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="h-5 w-5 text-accent" />
                <span className="font-medium text-sm">Global Reach</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="h-5 w-5 text-accent" />
                <span className="font-medium text-sm">Trusted by Enterprises</span>
              </div>
            </div>
            <div className="pt-6">
              <Link to="/about" className={buttonVariants({ size: "lg", className: "group" })}>
                Learn about our journey
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-[400px] md:h-[500px] rounded-2xl bg-card border border-border/50 shadow-sm overflow-hidden flex items-center justify-center group"
          >
            <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors duration-500" />
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
            
            {/* Visual placeholder for an office/team image */}
            <div className="w-32 h-32 rounded-full border border-primary/20 flex items-center justify-center relative">
               <div className="absolute inset-0 rounded-full bg-primary/10 animate-ping opacity-50" />
               <span className="text-4xl font-bold text-primary">S</span>
            </div>
            <div className="absolute bottom-6 left-6 right-6 bg-background/80 backdrop-blur-md border border-border p-4 rounded-xl text-center">
              <p className="text-sm font-semibold text-foreground">Established in Rajkot, India</p>
              <p className="text-xs text-muted-foreground mt-1">Building solutions for the world.</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
