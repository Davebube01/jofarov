"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Logo = () => (
  <div className="flex items-center gap-2 group">
    <svg width="32" height="32" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary transform group-hover:rotate-90 transition-transform duration-700 ease-in-out">
      {/* Central Node */}
      <circle cx="50" cy="50" r="12" fill="currentColor" />
      {/* Orbits */}
      <ellipse cx="50" cy="50" rx="40" ry="15" transform="rotate(0 50 50)" stroke="currentColor" strokeWidth="4" fill="none" />
      <ellipse cx="50" cy="50" rx="40" ry="15" transform="rotate(60 50 50)" stroke="currentColor" strokeWidth="4" fill="none" />
      <ellipse cx="50" cy="50" rx="40" ry="15" transform="rotate(120 50 50)" stroke="currentColor" strokeWidth="4" fill="none" />
    </svg>
    <span className="font-heading font-bold text-xl md:text-2xl tracking-tight text-foreground transition-colors group-hover:text-primary">
      Jofarov Synergy Ltd
    </span>
  </div>
);

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/95 backdrop-blur-md shadow-sm py-3" 
          : pathname === '/' 
            ? "bg-transparent py-5" 
            : "bg-white shadow-sm py-3"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="z-50 relative">
            <Logo />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link 
                    href={link.path}
                    className={`font-medium text-sm tracking-wide uppercase transition-colors duration-200 ${
                      pathname === link.path
                        ? "text-primary font-semibold"
                        : (isScrolled || pathname !== '/') ? "text-slate-700 hover:text-primary" : "text-white hover:text-primary-foreground"
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <Link 
              href="/contact" 
              className={`font-medium px-6 py-2.5 rounded-sm transition-all duration-300 shadow-sm hover:shadow-md ${
                (isScrolled || pathname !== '/') 
                  ? "bg-primary text-primary-foreground hover:bg-secondary" 
                  : "bg-primary text-white hover:bg-white hover:text-primary"
              }`}
            >
              Get Quote
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden z-50 relative p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className={`w-6 h-6 ${(!isScrolled && pathname === '/') ? 'text-white' : 'text-foreground'}`} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white shadow-lg border-t md:hidden"
          >
            <div className="flex flex-col py-4 px-4 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`block py-3 px-4 rounded-md font-medium text-lg ${
                    pathname === link.path ? "bg-green-50 text-primary" : "text-slate-800 hover:bg-slate-50"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link 
                href="/contact"
                className="mt-4 bg-primary text-center text-white py-3 px-4 rounded-md font-medium text-lg hover:bg-secondary transition-colors"
              >
                Get Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
