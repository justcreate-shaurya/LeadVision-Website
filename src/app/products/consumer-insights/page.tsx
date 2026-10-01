"use client";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { TrendingUp, AlertCircle, MessageSquare, ArrowRight, Activity, BarChart3, Search, CheckCircle2 } from "lucide-react";

const fadeUp: Variants = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } } };
const stagger: Variants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } };

function InsightsMockup() {
  return (
    <div className="rounded-2xl overflow-hidden border border-slate-line bg-[#0f0e0d] shadow-2xl">
      <div className="flex items-center justify-between px-5 py-3 bg-[#161412] border-b border-[#2a2018]">
        <div className="flex gap-2"><div className="w-3 h-3 rounded-full bg-[#ff5f57]"/><div className="w-3 h-3 rounded-full bg-[#ffbd2e]"/><div className="w-3 h-3 rounded-full bg-[#28c840]"/></div>
        <span className="font-mono text-[11px] text-[#5a4e42]">Consumer Insights — Traya Health</span>
      </div>
      <div className="grid grid-cols-3 gap-px bg-[#2a2018] border-b border-[#2a2018]">
        {[
          { label: "Purchase Driver", value: "Hair Loss Concern", pct: "41%", color: "#4ade80" },
          { label: "Top Objection", value: "Price Sensitivity", pct: "28%", color: "#f87171" },
          { label: "Rising Topic ↑", value: "Natural Ingredients", pct: "+19%", color: "#f0c060" },
        ].map(c => (
          <div key={c.label} className="bg-[#141210] px-4 py-4">
            <div className="text-[10px] text-[#6b5a48] mb-1">{c.label}</div>
            <div className="text-sm font-bold text-white truncate">{c.value}</div>
            <div className="text-xl font-bold mt-1" style={{ color: c.color }}>{c.pct}</div>
          </div>
        ))}
      </div>
      <div className="p-4">
        <div className="text-[11px] font-bold text-[#6b5a48] uppercase tracking-wider mb-3">Live Alert Feed</div>
        <div className="space-y-2">
          {[
            { icon: "🔴", text: "Returns calls spiked +34% — possible delivery issue in Mumbai", time: "2m ago", priority: "HIGH" },
            { icon: "🟡", text: '"ZinCplex" competitor mentions up 12% — 3 agents flagged', time: "18m ago", priority: "MED" },
            { icon: "🟢", text: "New empathy script improving resolution rate by 8%", time: "1h ago", priority: "LOW" },
            { icon: "🟡", text: "\"Refund\" keyword spikes in afternoon batch — investigating", time: "2h ago", priority: "MED" },
          ].map((a, i) => (
            <div key={i} className="flex items-start gap-3 py-2.5 border-b border-[#2a2018] last:border-0">
              <span className="text-sm">{a.icon}</span>
              <div className="flex-1 min-w-0">
                <p className="text-[11px] text-[#b0a090] leading-tight">{a.text}</p>
              </div>
              <div className="text-right flex-shrink-0">
                <div className="text-[9px] text-[#4a3e32]">{a.time}</div>
                <div className={`text-[9px] font-bold ${a.priority === "HIGH" ? "text-[#f87171]" : a.priority === "MED" ? "text-[#f0c060]" : "text-[#4ade80]"}`}>{a.priority}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ConsumerInsights() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden bg-background">
      <section className="relative py-24 md:py-40 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-[radial-gradient(ellipse_at_top,_rgba(189,37,37,0.07)_0%,_transparent_65%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-red/30 bg-red-light text-red text-xs font-bold tracking-wider uppercase mb-8">
              <TrendingUp size={12} /> Consumer Insights
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-display font-bold leading-[1.05] tracking-tight mb-6 text-ink">
              Why customers call.<br /><span className="text-red">In real time.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-xl text-ink-soft leading-relaxed mb-10 max-w-xl">
              Leadvision turns every conversation into a signal. Know what's driving purchases, what objections are rising, and what competitors your customers are mentioning — before the day ends.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Link href="/book-a-demo" className="bg-ink text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-red transition-all shadow-lg group inline-flex">
                Book a demo <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9, delay: 0.2 }}>
            <InsightsMockup />
          </motion.div>
        </div>
      </section>

      {/* WHO BENEFITS */}
      <section className="py-20 bg-white border-y border-slate-line">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-display font-bold text-center mb-12 text-ink">Built for every team that talks to customers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Product Teams", items: ["Real verbatim customer language", "Feature request extraction", "Pain point prioritization", "NPS driver analysis"] },
              { title: "Marketing Teams", items: ["Purchase driver attribution", "Message-market fit signals", "Competitor intelligence", "Campaign feedback loops"] },
              { title: "Operations Teams", items: ["Objection spike alerts", "Script effectiveness tracking", "Agent performance signals", "SLA compliance monitoring"] },
            ].map(({ title, items }) => (
              <div key={title} className="bg-background border border-slate-line p-8 rounded-3xl hover:-translate-y-1 transition-transform">
                <h3 className="text-lg font-display font-bold mb-6 text-ink">{title}</h3>
                <ul className="space-y-3">
                  {items.map(item => (
                    <li key={item} className="flex items-center gap-3 text-sm text-ink-soft">
                      <CheckCircle2 size={15} className="text-red flex-shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: AlertCircle, title: "Spike Alerts", desc: "Get notified within minutes when a new topic, objection, or complaint category spikes — not days later in a weekly report." },
              { icon: MessageSquare, title: "Verbatim Extraction", desc: "Pull exact customer quotes by topic. Give your product team real words, not paraphrases." },
              { icon: Search, title: "Competitor Tracking", desc: "Automatically track when customers mention specific competitors and what they say about them." },
              { icon: TrendingUp, title: "Sentiment Trending", desc: "Track sentiment by topic, agent, campaign, or product over any time period." },
              { icon: BarChart3, title: "Purchase Driver Analysis", desc: "Know exactly why customers buy — and why they don't. Updated hourly across all calls." },
              { icon: Activity, title: "100% Coverage", desc: "Every call is analyzed, not just sampled. Trends you'd never see in 5% sampling become obvious." },
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

      <section className="py-32 text-center bg-white border-t border-slate-line">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-4xl font-display font-bold mb-6 text-ink">Turn your calls into your competitive advantage.</h2>
          <p className="text-xl text-ink-soft mb-10">Book a demo and see live insights from real Traya calls.</p>
          <Link href="/book-a-demo" className="inline-flex items-center gap-3 bg-red hover:bg-red-hover text-white px-12 py-5 rounded-full font-bold text-lg shadow-xl hover:-translate-y-1 transition-all">
            Book a demo <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
