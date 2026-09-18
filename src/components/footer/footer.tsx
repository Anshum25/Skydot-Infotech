import { Link } from "react-router-dom";
import { ArrowUp, ArrowUpRight } from "lucide-react";
import { companyData } from "@/data/company";
import { services } from "@/data/services";
import { products } from "@/data/products";
import { industries } from "@/data/industries";
import { Logo } from "@/components/ui/logo";
import { useRef } from "react";
import { LocationMap } from "./location-map";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const footerRef = useRef<HTMLElement>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      ref={footerRef}
      className="w-full bg-background text-foreground border-t border-border pt-28 pb-10 font-sans"
    >
        <div className="w-full flex flex-col justify-between h-full">
          {/* Massive Call to Action */}
          <div className="container mx-auto px-6 md:px-12 mb-16 flex flex-col items-center text-center">
            <h2 
              className="text-5xl md:text-7xl lg:text-9xl font-bold tracking-tighter mb-6"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Experience <span className="text-[#1677FF]">Sky</span><span className="text-[#FF6B2C]">dot.</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl font-light mb-8">
              Join the forward-thinking teams engineering the future of enterprise software, AI, and digital solutions.
            </p>
          </div>

          <div className="container mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-10 mb-16 pt-14 border-t border-border">
              <div className="lg:col-span-3">
                <Link to="/" className="inline-block hover:opacity-80 transition-opacity mb-6">
                  <Logo />
                </Link>
                <p className="text-sm font-semibold mb-2">
                  {companyData.tagline}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  {companyData.description}
                </p>
              </div>

              <div className="lg:col-span-2 lg:col-start-5">
                <p className="home-label mb-6 text-foreground">Products</p>
                <ul className="space-y-4">
                  {products.slice(0, 5).map((product) => (
                    <li key={product.slug}>
                      <Link
                        to={`/products/${product.slug}`}
                        className="text-[13px] font-medium text-muted-foreground hover:text-[var(--skydot-blue)] transition-colors"
                      >
                        {product.title}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Link
                      to="/products"
                      className="text-[13px] font-medium text-muted-foreground hover:text-[var(--skydot-blue)] transition-colors"
                    >
                      All Products
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="lg:col-span-2">
                <p className="home-label mb-6 text-foreground">Resources</p>
                <ul className="space-y-4">
                  {["Documentation", "Case Studies", "Insights", "API Reference"].map((page) => (
                    <li key={page}>
                      <Link
                        to={`/${page.toLowerCase().replace(' ', '-')}`}
                        className="text-[13px] font-medium text-muted-foreground hover:text-[var(--skydot-blue)] transition-colors"
                      >
                        {page}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="lg:col-span-2">
                <p className="home-label mb-6 text-foreground">Company</p>
                <ul className="space-y-4">
                  {["About", "Work", "Careers", "Contact"].map((page) => (
                    <li key={page}>
                      <Link
                        to={`/${page.toLowerCase()}`}
                        className="text-[13px] font-medium text-muted-foreground hover:text-[var(--skydot-blue)] transition-colors"
                      >
                        {page}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="lg:col-span-3">
                <p className="home-label mb-6 text-foreground">Contact</p>
                <div className="mb-4">
                  <LocationMap />
                </div>
                
                <div className="flex flex-col gap-3 mt-4">
                  <a
                    href={`mailto:${companyData.email}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground hover:text-[var(--skydot-blue)] transition-colors"
                  >
                    <ArrowUpRight className="h-3 w-3" /> {companyData.email}
                  </a>
                  <div className="flex gap-4 mt-2">
                    <a
                      href={companyData.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground hover:text-[var(--skydot-blue)] transition-colors"
                    >
                      LinkedIn <ArrowUpRight className="h-3 w-3" />
                    </a>
                    <a
                      href={companyData.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground hover:text-[var(--skydot-blue)] transition-colors"
                    >
                      X <ArrowUpRight className="h-3 w-3" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-6 border-t border-border text-[11px] font-medium uppercase tracking-widest text-muted-foreground relative">
              <div className="flex flex-col gap-2 items-center md:items-start text-center md:text-left">
                <p>
                  © {currentYear} {companyData.name}.
                </p>
                <p className="text-[10px] opacity-70 normal-case tracking-normal">
                  Skydot is a technology brand of <a href="https://www.nivasync.in" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors underline decoration-border underline-offset-2">NivaSync Infotech Pvt. Ltd.</a>
                </p>
              </div>

              <button
                type="button"
                onClick={scrollToTop}
                className="md:absolute md:left-1/2 md:-translate-x-1/2 flex items-center gap-1.5 hover:text-foreground transition-colors cursor-pointer group"
                aria-label="Back to top"
              >
                Back to top
                <ArrowUp className="h-3 w-3 transition-transform group-hover:-translate-y-0.5" />
              </button>

              <div className="flex items-center gap-6">
                <Link to="/privacy" className="hover:text-foreground transition-colors">Privacy</Link>
                <Link to="/terms" className="hover:text-foreground transition-colors">Terms</Link>
              </div>
            </div>
          </div>
        </div>
    </footer>
  );
}
