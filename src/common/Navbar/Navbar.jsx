import React, { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const navItems = ["Home", "About Me", "Portfolio", "Services", "Contact"];
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [active, setActive] = useState("Home");

  return (
    <header className="fixed top-0 left-0 right-0 z-[9999] bg-black/95 backdrop-blur border-b border-black/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center select-none">
            <img src="/logo.png" alt="logo" />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => setActive(item)}
                className={`text-sm font-medium transition-colors ${
                  active === item
                    ? "text-orange-400 underline underline-offset-4"
                    : "text-white/90 hover:text-orange-300"
                }`}
              >
                {item}
              </button>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded hover:bg-white/10 text-gray-200"
            aria-label="Toggle menu"
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
          <div className="md:hidden border-t border-white/10 bg-black">
            <div className="px-4 py-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    setActive(item);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`w-full text-left px-2 py-3 rounded text-sm font-medium transition-colors ${
                    active === item
                      ? "text-orange-400"
                      : "text-gray-200 hover:text-orange-300"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
