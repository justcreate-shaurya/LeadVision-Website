"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const products = [
  { name: "Voice AI Agent", href: "/products/voice-ai-agent", desc: "AI agents that call in Hinglish" },
  { name: "Speech-to-Text", href: "/products/speech-to-text", desc: "95%+ accurate transcription" },
  { name: "Text-to-Speech", href: "/products/text-to-speech", desc: "Cloned Indian voices" },
  { name: "QA & Analytics", href: "/products/qa-analytics", desc: "Score 100% of calls" },
  { name: "Consumer Insights", href: "/products/consumer-insights", desc: "Real-time alert feed" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setProductsOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-white/90 backdrop-blur-md border-b border-slate-line shadow-sm py-3" : "bg-transparent border-b border-transparent py-5"}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group" onClick={() => setMobileOpen(false)}>
          <div className="w-3 h-3 rounded-full bg-red group-hover:bg-red-hover transition-colors" />
          <span className="font-display font-bold text-xl tracking-tight text-ink">Leadvision AI</span>
        </Link>

        {/* Desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {/* Products dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setProductsOpen(!productsOpen)}
              className="flex items-center gap-1 text-sm font-semibold text-ink-soft hover:text-ink transition-colors"
            >
              Product <ChevronDown size={14} className={`transition-transform ${productsOpen ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence>
              {productsOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-64 bg-white border border-slate-line rounded-2xl shadow-xl p-2 overflow-hidden"
                >
                  {products.map(p => (
                    <Link
                      key={p.href}
                      href={p.href}
                      onClick={() => setProductsOpen(false)}
                      className="flex flex-col gap-0.5 px-4 py-3 rounded-xl hover:bg-background transition-colors group"
                    >
                      <span className="text-sm font-bold text-ink group-hover:text-red transition-colors">{p.name}</span>
                      <span className="text-xs text-ink-faint">{p.desc}</span>
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <Link href="/company" className="text-sm font-semibold text-ink-soft hover:text-ink transition-colors">Company</Link>
          <Link href="/book-a-demo" className="bg-red hover:bg-red-hover text-white text-sm font-bold px-6 py-2.5 rounded-full transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5">
            Book a demo
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button className="md:hidden p-2 text-ink" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 w-full bg-white border-b border-slate-line shadow-xl py-6 px-6 flex flex-col gap-1 md:hidden"
          >
            <div className="text-xs font-bold text-ink-faint uppercase tracking-wider px-3 py-2">Products</div>
            {products.map(p => (
              <Link key={p.href} href={p.href} onClick={() => setMobileOpen(false)} className="px-3 py-3 rounded-xl hover:bg-background text-base font-semibold text-ink hover:text-red transition-colors">
                {p.name}
              </Link>
            ))}
            <div className="border-t border-slate-line my-3" />
            <Link href="/company" onClick={() => setMobileOpen(false)} className="px-3 py-3 rounded-xl hover:bg-background text-base font-semibold text-ink hover:text-red transition-colors">Company</Link>
            <Link href="/book-a-demo" onClick={() => setMobileOpen(false)} className="mt-2 bg-red text-white text-center font-bold py-3.5 rounded-full shadow-sm text-base">
              Book a demo
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
