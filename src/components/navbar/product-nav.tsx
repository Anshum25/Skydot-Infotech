import * as React from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  MotionNavigationMenu,
  MotionNavigationMenuContent,
  MotionNavigationMenuItem,
  MotionNavigationMenuLink,
  MotionNavigationMenuList,
  MotionNavigationMenuTrigger,
} from "@/components/ui/motion-navigation-menu";
import { ProductDetailData } from "@/data/products-detailed";
import { ArrowRight, CheckCircle2, LayoutGrid, Layers, PlayCircle, FileText } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";

export function ProductNav({ product }: { product: ProductDetailData }) {
  const highlightClassName = "dark:bg-accent bg-foreground/[0.06] rounded-lg";
  
  return (
    <div className="sticky top-[80px] lg:top-[90px] z-40 w-full mb-8 lg:mb-12">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="bg-background/80 backdrop-blur-2xl border border-border shadow-sm rounded-2xl h-16 px-4 md:px-6 flex items-center justify-between">
          
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="font-bold text-lg md:text-xl">{product.title}</span>
              <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider hidden md:inline-block">
                {product.category}
              </span>
            </div>

            <div className="hidden md:flex">
              <MotionNavigationMenu>
                <MotionNavigationMenuList>
                  
                  {/* Overview Link */}
                  <MotionNavigationMenuItem>
                    <MotionNavigationMenuLink as="button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex h-9 items-center px-4 py-2 text-sm font-semibold hover:text-primary transition-colors cursor-pointer text-foreground/80 hover:text-foreground">
                      Overview
                    </MotionNavigationMenuLink>
                  </MotionNavigationMenuItem>

                  {/* Features Dropdown */}
                  <MotionNavigationMenuItem value="features">
                    <MotionNavigationMenuTrigger className="bg-transparent hover:bg-transparent text-foreground/80 hover:text-foreground font-semibold rounded-sm">
                      Features
                    </MotionNavigationMenuTrigger>
                    <MotionNavigationMenuContent highlightClassName={highlightClassName}>
                      <div className="w-[450px] p-4 flex flex-col gap-3">
                        <div className="mb-2 px-2">
                          <h4 className="text-xs font-semibold uppercase tracking-wider text-primary mb-1">Capabilities</h4>
                          <p className="text-sm text-muted-foreground leading-snug">Everything you need to succeed with {product.title}.</p>
                        </div>
                        <div className="grid grid-cols-2 gap-1">
                          {product.features.map((feature, idx) => (
                            <div key={idx} className="flex items-start gap-2.5 p-2 rounded-md hover:bg-accent transition-colors cursor-default">
                              <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                              <span className="text-sm font-medium leading-tight">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </MotionNavigationMenuContent>
                  </MotionNavigationMenuItem>

                  {/* Resources / Benefits Dropdown */}
                  <MotionNavigationMenuItem value="benefits">
                    <MotionNavigationMenuTrigger className="bg-transparent hover:bg-transparent text-foreground/80 hover:text-foreground font-semibold rounded-sm">
                      Resources
                    </MotionNavigationMenuTrigger>
                    <MotionNavigationMenuContent highlightClassName={highlightClassName}>
                      <div className="w-[300px] p-2">
                        <div className="flex flex-col">
                          <MotionNavigationMenuLink as={Link} to="#docs" className="flex items-start gap-3 p-3 rounded-md hover:bg-accent transition-colors">
                            <FileText className="w-5 h-5 text-primary shrink-0" />
                            <div>
                              <h5 className="text-sm font-semibold mb-0.5">Documentation</h5>
                              <p className="text-xs text-muted-foreground">Read the docs for {product.title}</p>
                            </div>
                          </MotionNavigationMenuLink>
                          <MotionNavigationMenuLink as={Link} to="#tutorials" className="flex items-start gap-3 p-3 rounded-md hover:bg-accent transition-colors">
                            <PlayCircle className="w-5 h-5 text-primary shrink-0" />
                            <div>
                              <h5 className="text-sm font-semibold mb-0.5">Tutorials</h5>
                              <p className="text-xs text-muted-foreground">Video guides and walkthroughs</p>
                            </div>
                          </MotionNavigationMenuLink>
                          <MotionNavigationMenuLink as={Link} to="#integrations" className="flex items-start gap-3 p-3 rounded-md hover:bg-accent transition-colors">
                            <Layers className="w-5 h-5 text-primary shrink-0" />
                            <div>
                              <h5 className="text-sm font-semibold mb-0.5">Integrations</h5>
                              <p className="text-xs text-muted-foreground">Connect with other tools</p>
                            </div>
                          </MotionNavigationMenuLink>
                        </div>
                      </div>
                    </MotionNavigationMenuContent>
                  </MotionNavigationMenuItem>

                  {/* Use Cases Dropdown */}
                  <MotionNavigationMenuItem value="use-cases">
                    <MotionNavigationMenuTrigger className="bg-transparent hover:bg-transparent text-foreground/80 hover:text-foreground font-semibold rounded-sm">
                      Use Cases
                    </MotionNavigationMenuTrigger>
                    <MotionNavigationMenuContent highlightClassName={highlightClassName}>
                      <div className="w-[400px] p-4">
                        <div className="mb-3 px-2">
                          <h4 className="text-xs font-semibold uppercase tracking-wider text-primary mb-1">Built For</h4>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {product.targetUsers.map((user, idx) => (
                            <span key={idx} className="bg-secondary text-secondary-foreground text-xs font-medium px-3 py-1.5 rounded-full border border-border/50">
                              {user}
                            </span>
                          ))}
                        </div>
                        <div className="mt-6 pt-4 border-t border-border/50 px-2 space-y-3">
                          {product.benefits.slice(0, 2).map((benefit, idx) => (
                            <div key={idx}>
                              <h5 className="font-semibold text-sm text-foreground">{benefit.title}</h5>
                              <p className="text-xs text-muted-foreground">{benefit.description}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </MotionNavigationMenuContent>
                  </MotionNavigationMenuItem>

                </MotionNavigationMenuList>
              </MotionNavigationMenu>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden sm:block text-sm font-medium text-muted-foreground mr-2">
              Ready to start?
            </div>
            <Link to="/contact" className={cn(buttonVariants({ size: "sm" }), "rounded-full h-9 px-4 font-semibold shadow-sm")}>
              Get a Demo
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}
