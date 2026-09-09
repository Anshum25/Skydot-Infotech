import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { buttonVariants } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ErpMockup } from "@/components/animations/erp-mockup";

export function ErpSection() {
  const features = [
    {
      title: "Financial Management",
      description: "Unified accounting and financial reporting. Eliminate data silos with a comprehensive ERP solution designed for modern enterprises.",
    },
    {
      title: "Inventory & Supply Chain",
      description: "Real-time visibility into stock and procurement. Make decisions faster with intelligent dashboards that track your most important KPIs in real-time.",
    },
    {
      title: "HR & Payroll",
      description: "Streamlined workforce management. Reduce manual data entry and automate approvals.",
    },
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.95, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  const [activeIndex, setActiveIndex] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // Map scroll progress roughly to the 3 features
    if (latest < 0.4) setActiveIndex(0);
    else if (latest < 0.6) setActiveIndex(1);
    else setActiveIndex(2);
  });

  return (
    <section className="bg-background border-b border-border relative">
      <div className="container mx-auto px-4 md:px-6">

        {/* Mobile Layout (Stacked) */}
        <div className="md:hidden py-20 flex flex-col gap-12">
          <div className="text-center">
            <div className="inline-flex items-center rounded-full border border-border bg-muted/50 px-3 py-1 text-xs font-medium text-muted-foreground mb-6">
              Skydot ERP
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">
              Enterprise Resource Planning
            </h2>
            <p className="text-muted-foreground mb-8">
              Centralize your business operations with our comprehensive, modular ERP systems.
            </p>
            <Link to="/solutions/erp-solutions" className={buttonVariants({ variant: "outline" })}>
              Explore ERP
            </Link>
          </div>
          <ErpMockup />
        </div>

        {/* Desktop Layout (Sticky Scroll) */}
        <div ref={containerRef} className="hidden md:flex gap-16 relative items-start py-32">

          {/* Left Column - Scrolling Text */}
          <div className="w-1/2 flex flex-col gap-[30vh] pb-[30vh]">
            <div className="pt-[10vh]">
              <div className="inline-flex items-center rounded-full border border-border bg-muted/50 px-3 py-1 text-xs font-medium text-muted-foreground mb-6">
                Skydot ERP
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-6">
                Enterprise Resource Planning
              </h2>
            </div>

            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0.3 }}
                whileInView={{ opacity: 1 }}
                viewport={{ margin: "-50% 0px -50% 0px" }}
                transition={{ duration: 0.5 }}
                className="max-w-md"
              >
                <h3 className="text-2xl font-bold text-foreground mb-4">{feature.title}</h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  {feature.description}
                </p>
              </motion.div>
            ))}

            <div>
              <Link to="/solutions/erp-solutions" className={buttonVariants({ size: "lg", className: "h-14 px-8 text-base rounded-full shadow-lg bg-primary hover:bg-primary/90 text-white" })}>
                Explore ERP Capabilities
              </Link>
            </div>
          </div>

          {/* Right Column - Sticky Visual */}
          <div className="w-1/2 sticky top-32 h-[calc(100vh-16rem)] flex items-center justify-center">
            {/* Deep glowing shadow under the mockup */}
            <div className="absolute inset-10 bg-[var(--skydot-orange)]/10 blur-[100px] -z-10 rounded-[3rem]" />
            <motion.div
              style={{ scale, opacity }}
              className="w-full origin-bottom"
            >
              <ErpMockup activeIndex={activeIndex} />
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
