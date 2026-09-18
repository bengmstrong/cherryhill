import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/history", label: "History" },
  { to: "/about", label: "About the Owners" },
  { to: "/contact", label: "Contact" },
];

interface SiteHeaderProps {
  /** When true, the header starts transparent over a hero and turns solid on scroll. */
  transparentOverHero?: boolean;
}

const SiteHeader = ({ transparentOverHero = false }: SiteHeaderProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const solid = !transparentOverHero || scrolled || mobileOpen;

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-[background-color,backdrop-filter,border-color,box-shadow] duration-500",
        solid
          ? "bg-ivory/95 backdrop-blur-sm border-b border-border/60 shadow-soft"
          : "bg-transparent border-b border-transparent"
      )}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex h-20 items-center justify-between">
          <Link
            to="/"
            className={cn(
              "font-serif text-2xl md:text-3xl tracking-wide transition-colors duration-500",
              solid ? "text-forest" : "text-ivory"
            )}
            aria-label="Cherry Hill — Home"
          >
            <span className="font-light">Cherry</span>{" "}
            <span className="font-medium">Hill</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-10">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  cn(
                    "text-eyebrow link-underline transition-colors duration-500",
                    solid ? "text-charcoal hover:text-forest" : "text-ivory/90 hover:text-ivory",
                    isActive && "active text-gold"
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <button
            className={cn(
              "lg:hidden p-2 -mr-2 transition-colors",
              solid ? "text-charcoal" : "text-ivory"
            )}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {mobileOpen && (
          <nav className="lg:hidden pb-8 pt-2 flex flex-col gap-5 animate-fade-in">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  cn(
                    "text-eyebrow text-charcoal py-1",
                    isActive && "text-gold"
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default SiteHeader;
