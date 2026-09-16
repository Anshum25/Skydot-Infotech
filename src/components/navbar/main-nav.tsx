import * as React from "react";
import { useState } from "react";
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
import { services } from "@/data/services";
import { products } from "@/data/products";
import { industries } from "@/data/industries";
import { ArrowRight } from "lucide-react";

const components = [
  { title: "About Us", href: "/about", description: "Learn about Skydot Infotech's mission, vision, and our experienced team." },
  { title: "Careers", href: "/careers", description: "Join us in building the future of enterprise software and AI solutions." },
  { title: "Our Process", href: "/about#process", description: "Discover our systematic approach to delivering robust technology solutions." },
];

const highlightClassName = "dark:bg-accent bg-foreground/[0.06] rounded-lg";

export function MainNav({ isTransparent = false }: { isTransparent?: boolean }) {
  const triggerClass = isTransparent 
    ? "bg-transparent text-white hover:bg-transparent relative" 
    : "bg-transparent hover:bg-transparent text-foreground relative";

  return (
    <div className="hidden lg:flex w-full justify-center">
      <MotionNavigationMenu
        viewportClassName="bg-card border-border rounded-xl shadow-xl ring-0"
        className="hidden lg:flex"
      >
        <MotionNavigationMenuList>

          {/* Solutions Dropdown */}
          <MotionNavigationMenuItem value="solutions">
            <MotionNavigationMenuTrigger className={cn("rounded-sm font-semibold", triggerClass)}>
              Solutions
            </MotionNavigationMenuTrigger>
            <MotionNavigationMenuContent highlightClassName={highlightClassName}>
              <div className="grid w-[400px] gap-2 p-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                {services.map((service) => (
                  <MotionNavigationMenuLink
                    as={Link}
                    key={service.title}
                    to={`/solutions/${service.slug}`}
                  >
                    <span className="block text-sm font-medium mb-1">{service.title}</span>
                    <span className="text-muted-foreground block text-xs line-clamp-2">
                      {service.shortDescription}
                    </span>
                  </MotionNavigationMenuLink>
                ))}
              </div>
            </MotionNavigationMenuContent>
          </MotionNavigationMenuItem>

          {/* Products Dropdown */}
          <MotionNavigationMenuItem value="products">
            <MotionNavigationMenuTrigger className={cn("rounded-sm font-semibold", triggerClass)}>
              Products
            </MotionNavigationMenuTrigger>
            <MotionNavigationMenuContent highlightClassName={highlightClassName}>
              <ProductsDropdownContent />
            </MotionNavigationMenuContent>
          </MotionNavigationMenuItem>

          {/* Industries Dropdown */}
          <MotionNavigationMenuItem value="industries">
            <MotionNavigationMenuTrigger className={cn("rounded-sm font-semibold", triggerClass)}>
              Industries
            </MotionNavigationMenuTrigger>
            <MotionNavigationMenuContent highlightClassName={highlightClassName}>
              <div className="grid w-[400px] gap-2 p-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                {industries.map((industry) => (
                  <MotionNavigationMenuLink
                    as={Link}
                    key={industry.name}
                    to={`/industries/${industry.slug}`}
                  >
                    <span className="block text-sm font-medium mb-1">{industry.name}</span>
                    <span className="text-muted-foreground block text-xs line-clamp-2">
                      {industry.description}
                    </span>
                  </MotionNavigationMenuLink>
                ))}
              </div>
            </MotionNavigationMenuContent>
          </MotionNavigationMenuItem>

          {/* Work / Case Studies */}
          <MotionNavigationMenuItem>
            <MotionNavigationMenuLink as={Link} to="/work" className="flex h-9 items-center px-4 py-2 text-sm font-semibold">
              Work
            </MotionNavigationMenuLink>
          </MotionNavigationMenuItem>

          {/* About Dropdown */}
          <MotionNavigationMenuItem value="about">
            <MotionNavigationMenuTrigger className={cn("rounded-sm font-semibold", triggerClass)}>
              About
            </MotionNavigationMenuTrigger>
            <MotionNavigationMenuContent highlightClassName={highlightClassName}>
              <div className="grid w-[400px] gap-2 p-2 md:w-[500px] md:grid-cols-2 lg:w-[500px]">
                {components.map((component) => (
                  <MotionNavigationMenuLink
                    as={Link}
                    key={component.title}
                    to={component.href}
                  >
                    <span className="block text-sm font-medium mb-1">{component.title}</span>
                    <span className="text-muted-foreground block text-xs line-clamp-2">
                      {component.description}
                    </span>
                  </MotionNavigationMenuLink>
                ))}
              </div>
            </MotionNavigationMenuContent>
          </MotionNavigationMenuItem>

          {/* Insights */}
          <MotionNavigationMenuItem>
            <MotionNavigationMenuLink as={Link} to="/insights" className="flex h-9 items-center px-4 py-2 text-sm font-semibold">
              Insights
            </MotionNavigationMenuLink>
          </MotionNavigationMenuItem>

        </MotionNavigationMenuList>
      </MotionNavigationMenu>
    </div>
  );
}

function ProductsDropdownContent() {
  const [activeProduct, setActiveProduct] = useState(products[0]);

  return (
    <div className="flex w-[320px] sm:w-[500px] md:w-[700px] lg:w-[850px] min-h-[380px] p-0 overflow-hidden">
      {/* Left Sidebar - Product List */}
      <div className="w-[220px] md:w-[280px] shrink-0 bg-muted/20 border-r border-border p-3 flex flex-col">
        <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3 px-2">Our Products</h4>
        <ul className="space-y-1 flex-1 overflow-y-auto">
          {products.map(product => (
            <li key={product.slug}>
              <button
                className={cn("w-full text-left px-3 py-2 rounded-md text-sm transition-all duration-200", 
                  activeProduct.slug === product.slug 
                    ? "bg-primary text-primary-foreground font-medium shadow-sm" 
                    : "hover:bg-accent/50 hover:text-accent-foreground text-foreground/80"
                )}
                onMouseEnter={() => setActiveProduct(product)}
                onFocus={() => setActiveProduct(product)}
              >
                {product.title}
              </button>
            </li>
          ))}
        </ul>
        <div className="mt-4 pt-4 border-t border-border/50 px-2">
          <MotionNavigationMenuLink as={Link} to="/products" className="flex items-center gap-2 w-full text-xs font-bold text-primary hover:text-primary/80 transition-colors uppercase tracking-widest p-0">
            All products <ArrowRight className="size-3" />
          </MotionNavigationMenuLink>
        </div>
      </div>
      
      {/* Right Content - Product Details */}
      <div className="flex-1 p-6 md:p-8 flex flex-col bg-card relative overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="relative z-10 flex flex-col h-full">
          <div className="flex items-start justify-between mb-4">
            <div>
              <span className="text-[10px] uppercase font-bold tracking-wider text-primary mb-1 block">
                {activeProduct.category}
              </span>
              <h3 className="text-2xl font-bold tracking-tight text-foreground">{activeProduct.title}</h3>
            </div>
            <MotionNavigationMenuLink as={Link} to={`/products/${activeProduct.slug}`} className="bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground text-xs font-semibold px-4 py-2 rounded-full transition-colors flex items-center gap-1.5 shrink-0">
              Details <ArrowRight className="size-3" />
            </MotionNavigationMenuLink>
          </div>
          
          <p className="text-muted-foreground text-sm mb-8 leading-relaxed line-clamp-3">
            {activeProduct.description}
          </p>
          
          <div className="flex-1">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4 flex items-center gap-2">
              <div className="h-px w-6 bg-border"></div>
              Core Features
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-3">
              {activeProduct.features.slice(0, 6).map((feature, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <div className="mt-1.5 size-1.5 rounded-full bg-primary shrink-0"></div>
                  <span className="text-sm font-medium text-foreground/80 leading-tight">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-8 pt-4 border-t border-border/50">
            <div className="flex flex-wrap gap-2 items-center">
              <span className="text-xs text-muted-foreground mr-2 font-medium">Built for:</span>
              {activeProduct.industries.map(ind => (
                <span key={ind} className="text-[10px] uppercase font-bold tracking-wider bg-accent text-accent-foreground px-2 py-1 rounded-sm">
                  {ind}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

