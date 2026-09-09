import { Link } from "react-router-dom";
import { ArrowUp, ArrowUpRight } from "lucide-react";
import { companyData } from "@/data/company";
import { services } from "@/data/services";
import { products } from "@/data/products";
import { industries } from "@/data/industries";
import { Logo } from "@/components/ui/logo";

export function HomeFooter() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-background text-foreground border-t border-border pt-24 pb-12 font-sans">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 mb-20">
          <div className="lg:col-span-4 flex flex-col items-start">
            <Link to="/" className="inline-block hover:opacity-80 transition-opacity mb-8">
              <Logo />
            </Link>
            <p className="text-sm font-semibold mb-2">
              {companyData.tagline}
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm mb-8">
              {companyData.description}
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a
                href={`mailto:${companyData.email}`}
                className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground hover:text-[var(--skydot-blue)] transition-colors"
              >
                Email <ArrowUpRight className="h-3 w-3" />
              </a>
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
                X (Twitter) <ArrowUpRight className="h-3 w-3" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-2">
            <p className="home-label mb-6 text-foreground">Solutions</p>
            <ul className="space-y-4">
              {services.slice(0, 5).map((service) => (
                <li key={service.slug}>
                  <Link
                    to={`/solutions/${service.slug}`}
                    className="text-[13px] font-medium text-muted-foreground hover:text-[var(--skydot-blue)] transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
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
            </ul>
          </div>

          <div className="lg:col-span-2">
            <p className="home-label mb-6 text-foreground">Industries</p>
            <ul className="space-y-4">
              {industries.map((industry) => (
                <li key={industry.slug}>
                  <Link
                    to={`/industries/${industry.slug}`}
                    className="text-[13px] font-medium text-muted-foreground hover:text-[var(--skydot-blue)] transition-colors"
                  >
                    {industry.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <p className="home-label mb-6 text-foreground">Company</p>
            <ul className="space-y-4">
              {["About", "Work", "Insights", "Contact"].map((page) => (
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
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-border text-[11px] font-medium uppercase tracking-widest text-muted-foreground relative">
          <p>
            © {currentYear} {companyData.name}.
          </p>

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
    </footer>
  );
}
