import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Box } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { products } from "@/data/products";
import { AnimatedText } from "@/components/animations/animated-text";

export function ProductsSection() {
  const featuredProducts = products.slice(0, 3); // Get top 3 products

  return (
    <section className="py-24 md:py-32 bg-muted/30 relative border-b border-border">
      <div className="container mx-auto px-4 md:px-6">

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center rounded-full border border-border bg-background shadow-sm px-3 py-1 text-xs font-medium text-muted-foreground mb-4">
              Proprietary Platforms
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4 font-heading">
              <AnimatedText text="Ready-to-deploy enterprise products." />
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <Link to="/products" className={buttonVariants({ variant: "outline", className: "rounded-full" })}>
              View All Products
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {featuredProducts.map((prod, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8, scale: 1.01 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="border border-border/60 rounded-2xl p-8 bg-card/50 backdrop-blur-sm hover:bg-card hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10 transition-colors duration-500 group flex flex-col h-full"
            >
              <div className="w-12 h-12 rounded-xl bg-[var(--skydot-orange)]/10 flex items-center justify-center text-[var(--skydot-orange)] mb-6 transition-colors group-hover:bg-primary/10 group-hover:text-primary">
                <Box className="w-6 h-6" />
              </div>
              <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">{prod.category}</div>
              <h3 className="text-2xl font-bold mb-3">{prod.title}</h3>
              <p className="text-muted-foreground mb-8 flex-1">{prod.description}</p>

              <Link to={`/products/${prod.slug}`} className="inline-flex items-center text-sm font-semibold text-[var(--skydot-orange)] mt-auto group-hover:text-primary transition-colors duration-300">
                Explore Platform
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
