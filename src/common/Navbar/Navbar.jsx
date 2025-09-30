import React, { useEffect, useMemo, useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  // Map labels to section IDs present in the page
  const navItems = useMemo(
    () => [
      { label: "Home", id: "home" },
      { label: "About Me", id: "about" },
      { label: "Portfolio", id: "works" },
      { label: "Services", id: "services" },
      { label: "Contact", id: "contact" },
    ],
    []
  );

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [active, setActive] = useState("Home");
  const [scrolled, setScrolled] = useState(false);

  const headerOffset = 80; // adjust for fixed header height

  const handleNavigate = (item) => {
    const el = document.getElementById(item.id);
    // Scroll to top for Home or when the target element is not found
    if (item.id === "home" || !el) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setActive(item.label);
      setIsMobileMenuOpen(false);
      return;
    }
    const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - headerOffset;
    window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    setActive(item.label);
    setIsMobileMenuOpen(false);
  };

  // Observe sections to update active nav link on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const hit = navItems.find((n) => n.id === entry.target.id);
            if (hit) setActive(hit.label);
          }
        });
      },
      {
        root: null,
        rootMargin: `-${headerOffset + 10}px 0px -60% 0px`,
        threshold: 0.1,
      }
    );

    navItems.forEach((n) => {
      const el = document.getElementById(n.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [navItems]);

  // Toggle blurred background on scroll
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    onScroll(); // initialize on mount
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[9999] transition-colors duration-300 ${
        scrolled || isMobileMenuOpen
          ? "backdrop-blur-md bg-black/40 border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            className="flex items-center select-none"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Go to top"
          >
            <img src="/logo.png" alt="logo" />
          </button>

          {/* Desktop Nav */}
          <nav
            className="hidden md:flex items-center gap-5"
            role="navigation"
            aria-label="Primary"
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigate(item)}
                className={`text-sm font-bold transition-colors ${
                  active === item.label
                    ? "text-orange-400 underline underline-offset-4"
                    : "text-white hover:text-orange-300"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded hover:bg-white/10 text-gray-200"
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-top border-white/10 bg-black">
            <div className="px-4 py-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavigate(item)}
                  className={`w-full text-left px-2 py-3 rounded text-sm font-medium transition-colors ${
                    active === item.label
                      ? "text-orange-400"
                      : "text-gray-200 hover:text-orange-300"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
