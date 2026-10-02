"use client";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { GitBranch, AlertTriangle, Search, ArrowRight, BarChart3, CheckCircle2 } from "lucide-react";

const fadeUp: Variants = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } } };
const stagger: Variants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } };

function EdgeMockup() {
  const cases = [
    { tag: "Unhandled", title: "Customer references a previous call agent", freq: "47 calls", severity: "high" },
    { tag: "Unhandled", title: "Call drops and customer calls back mid-script", freq: "31 calls", severity: "high" },
    { tag: "Partial", title: "Customer asks for product variant not in flow", freq: "112 calls", severity: "medium" },
    { tag: "Partial", title: "Third-party verification required mid-call", freq: "28 calls", severity: "medium" },
    { tag: "Handled", title: "Customer requests Hindi-only conversation", freq: "203 calls", severity: "low" },
  ];
  return (
    <div className="rounded-2xl overflow-hidden border border-slate-line bg-[#0f0e0d] shadow-2xl">
      <div className="flex items-center justify-between px-5 py-3 bg-[#161412] border-b border-[#2a2018]">
        <div className="flex gap-2"><div className="w-3 h-3 rounded-full bg-[#ff5f57]"/><div className="w-3 h-3 rounded-full bg-[#ffbd2e]"/><div className="w-3 h-3 rounded-full bg-[#28c840]"/></div>
        <span className="font-mono text-[11px] text-[#5a4e42]">Edge Case Discovery — This week</span>
        <span className="font-mono text-[10px] text-[#f0c060]">4 new</span>
      </div>
      <div className="grid grid-cols-3 gap-px bg-[#2a2018] border-b border-[#2a2018]">
        {[
          { label: "Total cases found", value: "421", color: "#4ade80" },
          { label: "Unhandled", value: "78", color: "#f87171" },
          { label: "Partially handled", value: "140", color: "#f0c060" },
        ].map(c => (
          <div key={c.label} className="bg-[#141210] px-4 py-4">
            <div className="text-[10px] text-[#6b5a48] mb-1">{c.label}</div>
            <div className="text-2xl font-bold" style={{ color: c.color }}>{c.value}</div>
          </div>
        ))}
      </div>
      <div className="p-4 space-y-3">
        {cases.map((c, i) => (
          <div key={i} className="bg-[#161412] rounded-xl p-3 border border-[#2a2018]">
            <div className="flex items-center gap-2 mb-1.5">
              <AlertTriangle size={11} className={c.severity === "high" ? "text-[#f87171]" : c.severity === "medium" ? "text-[#f0c060]" : "text-[#4ade80]"} />
              <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full ${c.severity === "high" ? "bg-[#f87171]/20 text-[#f87171]" : c.severity === "medium" ? "bg-[#f0c060]/20 text-[#f0c060]" : "bg-[#4ade80]/20 text-[#4ade80]"}`}>{c.tag}</span>
              <span className="text-[9px] text-[#4a3e32] ml-auto">{c.freq}</span>
            </div>
            <p className="text-[12px] text-[#c4b49a]">{c.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function EdgeCaseDiscoveryPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* HERO */}
      <section className="relative py-24 md:py-40 bg-background overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[radial-gradient(ellipse_at_top,rgba(189,37,37,0.07)_0%,transparent_65%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" animate="visible" variants={stagger}>
              <motion.div variants={fadeUp} className="font-mono text-[10px] font-bold text-red tracking-widest uppercase mb-5 flex items-center gap-2">
                <GitBranch size={12} /> Product 06
              </motion.div>
              <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl font-display font-bold text-ink mb-6 leading-tight">
                Edge Case Discovery
              </motion.h1>
              <motion.p variants={fadeUp} className="text-lg text-ink-soft leading-relaxed mb-8 max-w-lg">
                Finds the situations your scorecard never planned for, along with transcript lines that show each one. Built to improve automatically from every call.
              </motion.p>
              <motion.div variants={fadeUp}>
                <Link href="/book-a-demo" className="inline-flex items-center gap-2 bg-ink text-white px-8 py-4 rounded-full font-bold hover:bg-red transition-all shadow-lg">
                  Book a demo <ArrowRight size={18} />
                </Link>
              </motion.div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.3 }}>
              <EdgeMockup />
            </motion.div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 md:py-28 bg-white border-t border-slate-line">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-ink mb-4">What it finds that your scorecard misses</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Search, title: "Unseen scenario detection", desc: "Automatically clusters calls that don't fit any existing workflow category. Every cluster comes with representative transcript lines." },
              { icon: AlertTriangle, title: "Severity scoring", desc: "Each discovered case is scored by frequency and escalation risk. High-severity gaps get surfaced first." },
              { icon: BarChart3, title: "Trend tracking", desc: "See whether a new edge case is growing, stable, or shrinking week over week — and whether it's linked to specific agents, regions, or product lines." },
            ].map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-background border border-slate-line rounded-3xl p-8"
              >
                <div className="w-12 h-12 bg-red-light rounded-xl flex items-center justify-center mb-5">
                  <Icon size={22} className="text-red" />
                </div>
                <h3 className="font-display font-bold text-xl text-ink mb-3">{title}</h3>
                <p className="text-ink-soft text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-background text-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-display font-bold text-ink mb-5">See what your current scorecard is missing</motion.h2>
            <motion.div variants={fadeUp}>
              <Link href="/book-a-demo" className="inline-flex items-center gap-2 bg-red hover:bg-red-hover text-white px-10 py-4 rounded-full font-bold shadow-xl hover:-translate-y-1 transition-all">
                Book a demo <ArrowRight size={18} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
