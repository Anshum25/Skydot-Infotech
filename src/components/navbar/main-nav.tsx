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
              <div className="grid w-[400px] gap-2 p-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                {products.slice(0, 6).map((product) => (
                  <MotionNavigationMenuLink
                    as={Link}
                    key={product.title}
                    to={`/products/${product.slug}`}
                  >
                    <span className="text-[10px] uppercase font-bold tracking-wider text-primary mb-1 block">
                      {product.category}
                    </span>
                    <span className="block text-sm font-medium mb-1">{product.title}</span>
                    <span className="text-muted-foreground block text-xs line-clamp-2">
                      {product.description}
                    </span>
                  </MotionNavigationMenuLink>
                ))}
                <div className="col-span-full mt-2 pt-2 border-t border-border/50">
                  <MotionNavigationMenuLink as={Link} to="/products" className="flex items-center gap-2 w-full text-xs font-bold text-primary hover:text-primary/80 transition-colors uppercase tracking-widest p-2">
                    Explore all products <ArrowRight className="size-3" />
                  </MotionNavigationMenuLink>
                </div>
              </div>
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
