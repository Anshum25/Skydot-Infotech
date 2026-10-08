import * as React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button, buttonVariants } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";
import { services } from "@/data/services";
import { products } from "@/data/products";
import { industries } from "@/data/industries";

export function MobileNav() {
  const [open, setOpen] = React.useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger render={<Button variant="ghost" size="icon" className="lg:hidden text-foreground" />}>
        <Menu className="h-6 w-6" />
        <span className="sr-only">Toggle menu</span>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] sm:w-[400px] pr-0">
        <SheetHeader className="px-1 text-left">
          <SheetTitle className="flex items-center gap-2 pt-2 pb-4 border-b">
            <Logo />
          </SheetTitle>
        </SheetHeader>
        <div className="my-6 h-[calc(100vh-8rem)] pb-10 pl-1 pr-6 overflow-y-auto">
          <motion.div 
            initial="hidden" 
            animate="show" 
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: { staggerChildren: 0.05, delayChildren: 0.1 }
              }
            }}
            className="w-full"
          >
            <Accordion className="w-full">
              
              <AccordionItem value="solutions">
                <AccordionTrigger className="text-base font-medium">Solutions</AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-col space-y-2">
                    {services.map((service) => (
                      <Link
                        key={service.slug}
                        to={`/solutions/${service.slug}`}
                        className="text-muted-foreground hover:text-primary py-1"
                        onClick={() => setOpen(false)}
                      >
                        {service.title}
                      </Link>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="products">
                <AccordionTrigger className="text-base font-medium">Products</AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-col space-y-2">
                    {products.slice(0, 6).map((product) => (
                      product.externalUrl ? (
                        <a
                          key={product.slug}
                          href={product.externalUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary py-1"
                          onClick={() => setOpen(false)}
                        >
                          {product.title}
                        </a>
                      ) : (
                        <Link
                          key={product.slug}
                          to={`/products/${product.slug}`}
                          className="text-muted-foreground hover:text-primary py-1"
                          onClick={() => setOpen(false)}
                        >
                          {product.title}
                        </Link>
                      )
                    ))}
                    <Link
                      to="/products"
                      className="text-primary font-medium mt-2"
                      onClick={() => setOpen(false)}
                    >
                      View all products &rarr;
                    </Link>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="industries">
                <AccordionTrigger className="text-base font-medium">Industries</AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-col space-y-2">
                    {industries.map((industry) => (
                      <Link
                        key={industry.slug}
                        to={`/industries/${industry.slug}`}
                        className="text-muted-foreground hover:text-primary py-1"
                        onClick={() => setOpen(false)}
                      >
                        {industry.name}
                      </Link>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>



            </Accordion>

            <motion.div variants={{ hidden: { opacity: 0, x: -10 }, show: { opacity: 1, x: 0 } }} className="mt-4 flex flex-col space-y-4 pt-4 border-t">
              <Link
                to="/about"
                className="text-base font-medium hover:text-primary"
                onClick={() => setOpen(false)}
              >
                About
              </Link>
              <Link
                to="/work"
                className="text-base font-medium hover:text-primary"
                onClick={() => setOpen(false)}
              >
                Work
              </Link>
              <Link
                to="/insights"
                className="text-base font-medium hover:text-primary"
                onClick={() => setOpen(false)}
              >
                Insights
              </Link>
            </motion.div>

            <motion.div variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }} className="mt-8">
              <Link to="/contact" onClick={() => setOpen(false)} className={buttonVariants({ className: "w-full" })}>
                Let's Talk
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
