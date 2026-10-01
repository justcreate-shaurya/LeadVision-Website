"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
        scrolled
          ? "bg-white/80 backdrop-blur-md border-slate-line py-3 shadow-sm"
          : "bg-transparent border-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-3 h-3 rounded-full bg-red group-hover:bg-red-hover transition-colors" />
          <span className="font-display font-bold text-xl tracking-tight text-ink">
            Leadvision AI
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/#products"
            className="text-sm font-semibold text-ink-soft hover:text-ink transition-colors"
          >
            Product
          </Link>
          <Link
            href="/company"
            className="text-sm font-semibold text-ink-soft hover:text-ink transition-colors"
          >
            Company
          </Link>
          <Link
            href="/book-a-demo"
            className="bg-red hover:bg-red-hover text-white text-sm font-bold px-6 py-2.5 rounded-full shadow-sm hover:shadow-md transition-all transform hover:-translate-y-0.5"
          >
            Book a demo
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-ink"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white border-b border-slate-line shadow-lg py-6 px-6 flex flex-col gap-6 md:hidden"
          >
            <Link
              href="/#products"
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-display font-bold text-ink"
            >
              Product
            </Link>
            <Link
              href="/company"
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-display font-bold text-ink"
            >
              Company
            </Link>
            <Link
              href="/book-a-demo"
              onClick={() => setMobileMenuOpen(false)}
              className="bg-red text-white text-center font-bold py-3 rounded-full shadow-sm"
            >
              Book a demo
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
