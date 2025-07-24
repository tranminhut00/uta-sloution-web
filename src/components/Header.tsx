"use client";

import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Trang chủ", href: "#home" },
    { name: "Dịch vụ", href: "#services" },
    { name: "Về chúng tôi", href: "#about" },
    { name: "Dự án", href: "#portfolio" },
    { name: "Liên hệ", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <style>
            {`
              @keyframes color-blink {
                0% { color: #fb923c; }
                20% { color: #facc15; }
                40% { color: #22d3ee; }
                60% { color: #22c55e; }
                80% { color: #a78bfa; }
                100% { color: #fb923c; }
              }
              .blinking-text {
                animation: color-blink 1.5s linear infinite;
              }
            `}
          </style>
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="blinking-text font-bold text-sm">U</span>
            </div>
            <span className="text-xl font-bold blinking-text text-foreground">UTA Solution</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="#contact">
              <button
                className="px-6 py-2 rounded-lg font-bold text-white text-sm"
                style={{
                  background: "linear-gradient(90deg, #3494E6 0%, #45E994 100%)",
                  boxShadow: "0 2px 8px 0 rgba(52,148,230,0.15)",
                  transition: "opacity 0.2s",
                  opacity: 1,
                }}
              >
                Liên hệ ngay
              </button>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border">
            <nav className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-foreground hover:text-primary transition-colors duration-200 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4">
                <Button variant="hero" size="lg" className="w-full">
                  Liên hệ ngay
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;