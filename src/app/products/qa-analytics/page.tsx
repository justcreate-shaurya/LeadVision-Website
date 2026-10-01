"use client";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { BarChart3, CheckCircle2, ArrowRight, Activity, Star, ClipboardList, TrendingUp, Zap, AlertCircle } from "lucide-react";

const fadeUp: Variants = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } } };
const stagger: Variants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } };

function QADashMockup() {
  const calls = [
    { id: "1024", agent: "Priya S.", score: 94, empathy: 9, resolution: "Yes", escalation: "No", status: "PASS" },
    { id: "1025", agent: "Rahul K.", score: 72, empathy: 6, resolution: "No", escalation: "Yes", status: "FAIL" },
    { id: "1026", agent: "Ananya M.", score: 89, empathy: 8, resolution: "Yes", escalation: "No", status: "PASS" },
    { id: "1027", agent: "Vikram J.", score: 81, empathy: 7, resolution: "Yes", escalation: "No", status: "PASS" },
  ];
  return (
    <div className="rounded-2xl overflow-hidden border border-slate-line bg-[#0f0e0d] shadow-2xl">
      <div className="flex items-center justify-between px-5 py-3 bg-[#161412] border-b border-[#2a2018]">
        <div className="flex gap-2"><div className="w-3 h-3 rounded-full bg-[#ff5f57]"/><div className="w-3 h-3 rounded-full bg-[#ffbd2e]"/><div className="w-3 h-3 rounded-full bg-[#28c840]"/></div>
        <span className="font-mono text-[11px] text-[#5a4e42]">QA Scorecard Dashboard</span>
        <span className="font-mono text-[11px] text-[#5a4e42]">Today</span>
      </div>
      <div className="grid grid-cols-3 gap-px bg-[#2a2018] border-b border-[#2a2018]">
        {[{ l: "Avg QA Score", v: "84.2%", c: "#f0c060" }, { l: "Pass Rate", v: "78%", c: "#4ade80" }, { l: "Calls Reviewed", v: "1,284 / 1,284", c: "#60a5fa" }].map(s => (
          <div key={s.l} className="bg-[#141210] px-4 py-4">
            <div className="text-[10px] text-[#6b5a48] mb-1">{s.l}</div>
            <div className="text-lg font-bold font-display" style={{ color: s.c }}>{s.v}</div>
          </div>
        ))}
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-[11px]">
          <thead>
            <tr className="border-b border-[#2a2018]">
              {["Call ID", "Agent", "QA Score", "Empathy", "Resolution", "Status"].map(h => (
                <th key={h} className="px-4 py-2 text-left font-bold text-[#5a4e42] uppercase tracking-wider">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {calls.map((c, i) => (
              <tr key={c.id} className={`border-b border-[#2a2018] ${i % 2 === 0 ? "bg-[#141210]" : "bg-[#0f0e0d]"}`}>
                <td className="px-4 py-3 text-[#d4b896] font-mono">#{c.id}</td>
                <td className="px-4 py-3 text-[#9ca3af]">{c.agent}</td>
                <td className="px-4 py-3 font-bold" style={{ color: c.score >= 85 ? "#4ade80" : c.score >= 75 ? "#f0c060" : "#f87171" }}>{c.score}%</td>
                <td className="px-4 py-3 text-[#9ca3af]">{c.empathy}/10</td>
                <td className="px-4 py-3 text-[#9ca3af]">{c.resolution}</td>
                <td className="px-4 py-3">
                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${c.status === "PASS" ? "bg-[#22c55e]/20 text-[#22c55e]" : "bg-[#ef4444]/20 text-[#ef4444]"}`}>{c.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default function QAAnalytics() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden bg-background">
      {/* HERO */}
      <section className="relative py-24 md:py-40 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-[radial-gradient(ellipse_at_top,_rgba(189,37,37,0.07)_0%,_transparent_65%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-red/30 bg-red-light text-red text-xs font-bold tracking-wider uppercase mb-8">
              <BarChart3 size={12} /> QA & Analytics
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-display font-bold leading-[1.05] tracking-tight mb-6 text-ink">
              QA for <span className="text-red">every single call.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-xl text-ink-soft leading-relaxed mb-10 max-w-xl">
              Stop sampling 5% of calls and guessing the rest. Leadvision scores 100% of calls against your custom scorecard — automatically, instantly, at scale.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
              <Link href="/book-a-demo" className="bg-ink text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-red transition-all shadow-lg group">
                Book a demo <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9, delay: 0.2 }}>
            <QADashMockup />
          </motion.div>
        </div>
      </section>

      {/* COMPARE */}
      <section className="py-20 bg-white border-y border-slate-line">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-display font-bold text-center mb-12 text-ink">Manual QA vs. Leadvision QA</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-background border border-slate-line rounded-2xl p-8">
              <h3 className="font-bold text-lg mb-6 text-ink-faint">Manual QA</h3>
              <ul className="space-y-4">
                {["Samples 3–5% of calls", "Takes days to review", "Inconsistent between reviewers", "Expensive & doesn't scale", "Agents wait weeks for feedback"].map(item => (
                  <li key={item} className="flex items-center gap-3 text-sm text-ink-soft">
                    <span className="text-red/60">✕</span> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-ink rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-red/20 rounded-full blur-2xl" />
              <h3 className="font-bold text-lg mb-6 text-red">Leadvision QA</h3>
              <ul className="space-y-4 relative z-10">
                {["Scores 100% of calls", "Results in under 60 seconds", "Consistent, bias-free scoring", "Zero marginal cost per call", "Instant agent feedback loops"].map(item => (
                  <li key={item} className="flex items-center gap-3 text-sm text-white">
                    <CheckCircle2 size={16} className="text-red flex-shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-20">
            <h2 className="text-4xl font-display font-bold mb-4 text-ink">Everything QA needs</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: ClipboardList, title: "Custom Scorecards", desc: "Define your own scoring rubric — empathy, resolution, compliance, upsell attempt. Leadvision scores against it automatically." },
              { icon: Star, title: "Agent Feedback Loops", desc: "Agents receive instant, structured feedback after every call with specific improvement suggestions — not just a number." },
              { icon: TrendingUp, title: "Trend Analytics", desc: "Track score trends over time, by agent, by campaign, or by product. Spot coaching opportunities before they become problems." },
              { icon: AlertCircle, title: "Compliance Flags", desc: "Auto-flag calls where compliance language was missed, incorrect promises were made, or scripts deviated from approved flows." },
              { icon: Activity, title: "Call Comparison", desc: "Side-by-side transcripts of your best vs. worst calls. See exactly what your top agents do differently." },
              { icon: Zap, title: "Real-time Scoring", desc: "Live QA scores appear as the call progresses — supervisors can intervene before a call fails rather than after." },
            ].map(({ icon: Icon, title, desc }) => (
              <motion.div key={title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white border border-slate-line p-8 rounded-3xl hover:shadow-xl hover:-translate-y-1 transition-all group">
                <div className="w-12 h-12 rounded-2xl bg-red-light text-red flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon size={22} strokeWidth={1.8} />
                </div>
                <h3 className="text-lg font-display font-bold mb-3 text-ink">{title}</h3>
                <p className="text-ink-soft text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 text-center bg-white border-t border-slate-line">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-4xl font-display font-bold mb-6 text-ink">Stop sampling. Start knowing.</h2>
          <p className="text-xl text-ink-soft mb-10">See what 100% call coverage looks like for your team.</p>
          <Link href="/book-a-demo" className="inline-flex items-center gap-3 bg-red hover:bg-red-hover text-white px-12 py-5 rounded-full font-bold text-lg shadow-xl hover:-translate-y-1 transition-all">
            Book a demo <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
