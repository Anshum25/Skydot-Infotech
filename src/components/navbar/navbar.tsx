import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { MainNav } from "./main-nav";
import { MobileNav } from "./mobile-nav";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { Logo } from "@/components/ui/logo";
import { motion } from "framer-motion";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 40);

      if (currentScrollY > lastScrollY && currentScrollY > 120) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <motion.header
      initial={{ y: -80, x: "-50%", opacity: 0 }}
      animate={{
        y: isVisible ? 0 : -80,
        x: "-50%",
        opacity: isVisible ? 1 : 0,
      }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "fixed top-5 left-1/2 z-50 flex items-center",
        "w-[95%] max-w-[1200px] rounded-full px-4 py-2",
        "transition-all duration-500",
        isScrolled
          ? "bg-background/80 backdrop-blur-2xl border border-border shadow-xl shadow-black/5"
          : "bg-background/40 backdrop-blur-xl border border-border/50 shadow-lg"
      )}
    >
      {/* Logo */}
      <Link to="/" className="flex items-center shrink-0 hover:opacity-80 transition-opacity mr-4">
        <Logo className="h-9 w-36 lg:h-10 lg:w-40" />
      </Link>

      {/* Divider */}
      <div className="hidden lg:block h-5 w-px bg-border mx-2 shrink-0" />

      {/* Nav Links — center */}
      <div className="hidden lg:flex flex-1 items-center justify-center">
        <MainNav isTransparent={false} />
      </div>

      {/* Right actions */}
      <div className="ml-auto flex items-center gap-2 shrink-0">
        <div className="hidden lg:flex items-center gap-2">
          <AnimatedThemeToggler />
          <Link
            to="/contact"
            className={cn(
              "inline-flex items-center justify-center h-9 px-5 rounded-full text-sm font-medium transition-all duration-200",
              "bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 active:scale-95"
            )}
          >
            Get in touch
          </Link>
        </div>
        <div className="lg:hidden flex items-center gap-2">
          <AnimatedThemeToggler />
          <MobileNav />
        </div>
      </div>
    </motion.header>
  );
}
