"use client";

import { useState } from "react";
import Link from "next/link";
import { LogoMarquee } from "@/components/LogoMarquee";
import { InteractiveDashboard } from "@/components/InteractiveDashboard";
import { motion, Variants, AnimatePresence } from "framer-motion";
import {
  Zap, Target, BarChart3, ArrowRight, Shield,
  TrendingUp, MicVocal, Play, Pause,
  ChevronDown, GitBranch, Building2, Home as HomeIcon,
  ShoppingBag, Heart, Users, Activity
} from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};
const stagger: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

// ─── RECORDINGS SECTION ────────────────────────────────────────────────────────
const recordingTabs = ["Collections", "Sales", "Support"] as const;
type RecordingTab = (typeof recordingTabs)[number];

const recordings: Record<RecordingTab, { title: string; lang: string; duration: string }[]> = {
  Collections: [
    { title: "Payment reminder call", lang: "HINGLISH", duration: "2:14" },
    { title: "Overdue account follow-up", lang: "HINDI", duration: "3:02" },
    { title: "Settlement offer call", lang: "ENGLISH", duration: "1:48" },
  ],
  Sales: [
    { title: "Lead qualification — real estate", lang: "HINGLISH", duration: "4:11" },
    { title: "Insurance upsell call", lang: "HINDI", duration: "2:38" },
    { title: "Product demo booking", lang: "ENGLISH", duration: "1:55" },
  ],
  Support: [
    { title: "Order status inquiry", lang: "HINGLISH", duration: "1:42" },
    { title: "Return & refund handling", lang: "HINDI", duration: "3:17" },
    { title: "Account verification", lang: "ENGLISH", duration: "2:05" },
  ],
};

function RecordingsSection() {
  const [tab, setTab] = useState<RecordingTab>("Collections");
  const [playing, setPlaying] = useState<number | null>(null);

  return (
    <section className="py-20 md:py-32 bg-ink overflow-hidden relative">
      <div className="absolute -top-60 left-1/3 w-[500px] h-[500px] bg-red/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
          className="text-center mb-12"
        >
          <motion.div variants={fadeUp} className="font-mono text-[10px] font-bold text-red tracking-widest uppercase mb-4">
            Real calls · AI agent
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
            Listen to real calls,<br />handled by the AI agent
          </motion.h2>
          <motion.p variants={fadeUp} className="text-base text-[#8a7a6a] max-w-xl mx-auto">
            Hear how the agent handles different use cases, in the customer&apos;s own language.
          </motion.p>
        </motion.div>

        {/* Tabs */}
        <div className="flex gap-2 justify-center mb-8">
          {recordingTabs.map(t => (
            <button
              key={t}
              onClick={() => { setTab(t); setPlaying(null); }}
              className={`px-5 py-2 rounded-full text-sm font-bold transition-all border ${tab === t ? "bg-white text-ink border-white" : "bg-transparent text-[#6b5a48] border-[#2a2018] hover:border-[#5a4e42]"}`}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Recordings list */}
        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col gap-3"
          >
            {recordings[tab].map((r, i) => {
              const isPlaying = playing === i;
              return (
                <div
                  key={i}
                  className="flex items-center gap-4 bg-[#161412] border border-[#2a2018] rounded-2xl px-5 py-4 hover:border-[#4a3e32] transition-all group"
                >
                  <button
                    onClick={() => setPlaying(isPlaying ? null : i)}
                    className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-all ${isPlaying ? "bg-red" : "bg-[#2a2018] group-hover:bg-[#3a3028]"}`}
                  >
                    {isPlaying ? <Pause size={16} className="text-white" /> : <Play size={16} className="text-[#8a7a6a] group-hover:text-white" />}
                  </button>
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-white text-sm truncate">{r.title}</div>
                    {isPlaying && (
                      <div className="flex items-center gap-1 mt-1">
                        {Array.from({ length: 28 }).map((_, j) => (
                          <div
                            key={j}
                            className="w-0.5 bg-red rounded-full animate-pulse"
                            style={{ height: `${Math.random() * 16 + 4}px`, animationDelay: `${j * 50}ms` }}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                  <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full border ${r.lang === "HINGLISH" ? "border-[#f0c060]/30 text-[#f0c060] bg-[#f0c060]/10" : r.lang === "HINDI" ? "border-[#60a5fa]/30 text-[#60a5fa] bg-[#60a5fa]/10" : "border-[#4ade80]/30 text-[#4ade80] bg-[#4ade80]/10"}`}>
                    {r.lang}
                  </span>
                  <span className="font-mono text-sm text-[#4a3e32] shrink-0">{r.duration}</span>
                </div>
              );
            })}
          </motion.div>
        </AnimatePresence>

      <p className="text-center text-[12px] text-white/30 mt-6">
          Recordings are masked, with customer details removed.
        </p>

        {/* Working with */}
        <div className="text-center mt-16">
          <p className="font-mono text-[10px] text-white/25 uppercase tracking-widest mb-5">Working with currently</p>
          <span className="text-5xl md:text-7xl font-display font-bold text-white">Traya<span className="text-red">.</span></span>
        </div>
      </div>
    </section>
  );
}

// ─── USE CASES ─────────────────────────────────────────────────────────────────
const useCases = [
  {
    sector: "BFSI",
    label: "Collections",
    icon: Building2,
    problem: "Agents can only call a fraction of overdue accounts each day.",
    stat: "[XX]%",
    statLabel: "more accounts reached per day",
  },
  {
    sector: "Real Estate",
    label: "Lead qualification",
    icon: HomeIcon,
    problem: "Sales teams spend hours calling leads that never convert.",
    stat: "[XX]%",
    statLabel: "of leads qualified before a human calls",
  },
  {
    sector: "E-Commerce",
    label: "Customer support",
    icon: ShoppingBag,
    problem: "Support queues grow fastest during sales and returns spikes.",
    stat: "[XX]ms",
    statLabel: "average response time",
  },
  {
    sector: "Insurance",
    label: "Renewals & retention",
    icon: Heart,
    problem: "Renewal reminders get made late or not at all.",
    stat: "[XX]%",
    statLabel: "of renewals contacted on time",
  },
];

// ─── QUOTES ────────────────────────────────────────────────────────────────────
const quotes = [
  {
    product: "Voice AI Agent",
    quote: "Our collection calls run long. Customers negotiate, push back, and return to an amount they mentioned ten minutes earlier. The agent keeps up with all of it.",
    name: "[Name]",
    role: "[Role, Company]",
  },
  {
    product: "Speech-to-Text",
    quote: "We get the accuracy we need on noisy, code-switched calls, at a price that lets us transcribe every call instead of a sample.",
    name: "[Name]",
    role: "[Role, Company]",
  },
  {
    product: "Text-to-Speech",
    quote: "Customers stopped asking if they were talking to a recording. The voice sounds like someone from our own team.",
    name: "[Name]",
    role: "[Role, Company]",
  },
  {
    product: "QA & Analytics",
    quote: "We see the QA score while the call is still live, not a week later. Coaching happens the same day.",
    name: "[Name]",
    role: "[Role, Company]",
  },
];

// ─── FAQ ───────────────────────────────────────────────────────────────────────
const faqs = [
  { q: "How does pricing work?", a: "Pricing is based on call volume and the products you use. We'll work out a plan with you on a call." },
  { q: "How long can a call with the agent run?", a: "Calls of 30–45 minutes are routine. The agent keeps the full conversation in context throughout, so nothing said early on is lost later." },
  { q: "Which languages are supported?", a: "Hindi, English and Hinglish, including speakers who switch between them mid-sentence." },
  { q: "Can we use a custom or cloned voice?", a: "Yes. We can clone your brand's voice from recordings you hold the rights to." },
  { q: "Where is our call data stored?", a: "All call data is stored in data centres located in India." },
  { q: "How long does setup take?", a: "[XX] days from kickoff to the first live calls." },
  { q: "Can it integrate with our existing dialer or CRM?", a: "Yes, through our API and existing connectors." },
];

function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="py-20 md:py-32 bg-white border-t border-slate-line">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-ink mb-4">Common questions</h2>
          <p className="text-ink-soft">Everything you need before your first call.</p>
        </motion.div>
        <div className="flex flex-col gap-3">
          {faqs.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="border border-slate-line rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left bg-background hover:bg-white transition-colors"
              >
                <span className="font-semibold text-ink text-sm md:text-base">{f.q}</span>
                <ChevronDown size={18} className={`text-ink-faint shrink-0 ml-4 transition-transform ${open === i ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    exit={{ height: 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 text-ink-soft text-sm leading-relaxed border-t border-slate-line pt-4">
                      {f.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── PAGE ──────────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/* HERO */}
      <section className="relative py-24 md:py-44 overflow-hidden" style={{ background: "linear-gradient(170deg, #ffffff 0%, #fafafa 60%, #f7f2f2 100%)" }}>
        {/* Gradient blobs */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-[radial-gradient(ellipse_at_top,_rgba(189,37,37,0.09)_0%,_transparent_60%)] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[radial-gradient(circle,_rgba(189,37,37,0.04)_0%,_transparent_70%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <motion.div initial="hidden" animate="visible" variants={stagger}>
              <motion.h1
                variants={fadeUp}
                className="text-4xl sm:text-5xl md:text-7xl font-display font-bold leading-[1.05] tracking-tight mb-6 text-ink"
              >
                One bot stop for<br />
                <span className="relative inline-block">
                  <span className="text-red">calls and insight</span>
                  <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 300 8" preserveAspectRatio="none">
                    <path d="M0 6 Q 150 0 300 6" stroke="#bd2525" strokeWidth="2.5" fill="none" opacity="0.4" />
                  </svg>
                </span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="text-base md:text-xl text-ink-soft leading-relaxed mb-10 max-w-2xl mx-auto"
              >
                AI agents powered by our own STT and TTS models handle your calls, with live QA, consumer insights and edge-case discovery at a price that works for every call.
              </motion.p>

              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="/book-a-demo"
                  className="bg-ink text-white px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-red transition-all shadow-lg group"
                >
                  Book a demo <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="#products"
                  className="bg-white border border-slate-line text-ink px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:border-red hover:text-red transition-all shadow-sm"
                >
                  <Play size={15} className="fill-current" /> See the products
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ADVISORS MARQUEE */}
      <LogoMarquee />

      {/* INTERACTIVE PRODUCT DASHBOARD */}
      <InteractiveDashboard />

      {/* CALL RECORDINGS */}
      <RecordingsSection />

      {/* USE CASES */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-ink mb-4">
              Built for high-volume, high-stakes conversations
            </h2>
            <p className="text-ink-soft max-w-xl mx-auto">Sector-specific workflows, pre-built and ready to go.</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {useCases.map((u, i) => {
              const Icon = u.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="bg-white border border-slate-line rounded-3xl p-7 flex flex-col gap-5 hover:-translate-y-1 transition-all"
                  style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.05), 0 1px 3px rgba(0,0,0,0.03)" }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0" style={{ background: "linear-gradient(135deg, #fce8e8, #faf0f0)" }}>
                      <Icon size={21} className="text-red" />
                    </div>
                    <div>
                      <div className="font-mono text-[9px] font-bold text-ink-faint uppercase tracking-wider">{u.sector}</div>
                      <div className="font-bold text-ink text-sm">{u.label}</div>
                    </div>
                  </div>
                  <p className="text-ink-soft text-sm leading-relaxed flex-1">{u.problem}</p>
                  <div className="border-t border-slate-line pt-4">
                    <div className="text-3xl font-display font-bold text-ink">{u.stat}</div>
                    <div className="text-xs text-ink-faint mt-0.5">{u.statLabel}</div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* QUOTES */}
      <section className="py-20 md:py-32 bg-white border-t border-slate-line">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-ink mb-4">What teams say</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {quotes.map((q, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="border border-slate-line rounded-3xl p-8 flex flex-col gap-6 hover:-translate-y-1 transition-all"
                style={{ background: "linear-gradient(145deg, #ffffff 0%, #fafafa 100%)", boxShadow: "0 4px 24px rgba(0,0,0,0.05)" }}
              >
                <span className="font-mono text-[10px] font-bold text-red tracking-widest uppercase">{q.product}</span>
                <blockquote className="text-ink leading-relaxed text-[15px] flex-1">
                  &ldquo;{q.quote}&rdquo;
                </blockquote>
                <div>
                  <div className="font-bold text-sm text-ink">{q.name}</div>
                  <div className="text-xs text-ink-faint">{q.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS BAND */}
      <section className="py-14 md:py-20 border-y border-slate-line" style={{ background: "linear-gradient(180deg, #f5f4f2 0%, #fafafa 100%)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: "<500ms", label: "Response latency", sub: "Replies land inside a natural pause", icon: Zap, gradient: "from-red/10 to-red/5" },
              { value: "94%", label: "Transcription accuracy", sub: "Measured on real call audio", icon: Target, gradient: "from-blue-500/10 to-blue-500/5" },
              { value: "45 min", label: "Long call support", sub: "Full context held throughout", icon: Activity, gradient: "from-emerald-500/10 to-emerald-500/5" },
              { value: "8 in 10", label: "Listeners thought agent was human", sub: "Callers hear a conversation, not a script", icon: Users, gradient: "from-violet-500/10 to-violet-500/5" },
            ].map(({ value, label, sub, icon: Icon, gradient }) => (
              <div key={label} className={`bg-gradient-to-br ${gradient} border border-slate-line p-5 md:p-7 rounded-2xl flex flex-col hover:-translate-y-1 transition-transform`} style={{ boxShadow: "0 2px 16px rgba(0,0,0,0.04)" }}>
                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center mb-3" style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }}>
                  <Icon size={19} className="text-red" />
                </div>
                <div className="text-2xl md:text-3xl font-display font-bold text-ink mb-1">{value}</div>
                <div className="text-[11px] font-bold text-ink uppercase tracking-wide leading-tight mb-1">{label}</div>
                <div className="text-[10px] text-ink-faint leading-snug hidden md:block">{sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="py-20 md:py-32 bg-white border-b border-slate-line">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-ink mb-4">Why teams switch to Leadvision AI</h2>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="overflow-hidden rounded-3xl border border-slate-line">
            {/* Header */}
            <div className="grid grid-cols-3 bg-background border-b border-slate-line">
              <div className="px-6 py-5 text-xs font-bold text-ink-faint uppercase tracking-wider">Feature</div>
              <div className="px-6 py-5 text-xs font-bold text-ink-faint uppercase tracking-wider border-l border-slate-line">Doing it manually</div>
              <div className="px-6 py-5 text-xs font-bold text-white uppercase tracking-wider bg-ink border-l border-transparent rounded-tr-3xl">Leadvision AI</div>
            </div>
            {/* Rows */}
            {[
              {
                feature: "Cost",
                manual: "Grows with every seat you hire",
                ai: "₹[XX] per minute, scales with usage",
              },
              {
                feature: "Long, complex calls",
                manual: "Quality drops as calls run long",
                ai: "Full context held for the whole call",
              },
              {
                feature: "Transcription accuracy",
                manual: "Depends on who's listening",
                ai: "[XX]% on real call audio",
              },
              {
                feature: "QA coverage",
                manual: "Sample checks, days later",
                ai: "100% of calls scored, live",
              },
            ].map((r, i) => (
              <div key={i} className={`grid grid-cols-3 border-b border-slate-line last:border-b-0 ${i % 2 === 1 ? "bg-background" : "bg-white"}`}>
                <div className="px-6 py-5 text-sm font-bold text-ink">{r.feature}</div>
                <div className="px-6 py-5 text-sm text-ink-soft border-l border-slate-line">{r.manual}</div>
                <div className="px-6 py-5 text-sm font-semibold text-white bg-ink border-l border-[#2a2018]">{r.ai}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* COMPLIANCE */}
      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="w-14 h-14 bg-red-light rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Shield size={26} className="text-red" />
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-ink mb-4">All call data stays in India</h2>
            <p className="text-ink-soft max-w-xl mx-auto mb-12 text-base">
              Built for regulated industries. Customer conversations stay within your controlled infrastructure. No third-party model training on your data.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-10">
              {["SOC 2 Type II", "ISO 27001", "DPDP Compliant", "RBI Guidelines"].map(cert => (
                <div key={cert} className="border border-slate-line px-5 py-3 rounded-xl text-sm font-bold text-ink bg-white">
                  {cert}
                </div>
              ))}
            </div>
            <div className="mt-8">
              <div className="font-mono text-[10px] font-bold text-ink-faint uppercase tracking-widest mb-6">Fits into what you already use</div>
              <div className="flex flex-wrap justify-center gap-3">
                {["Dialers", "CRMs", "Data & BI", "API"].map(cat => (
                  <span key={cat} className="bg-white border border-slate-line px-5 py-2.5 rounded-xl text-sm font-semibold text-ink">
                    {cat}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection />

      {/* FINAL CTA */}
      <section className="py-20 md:py-32 text-center bg-ink overflow-hidden relative">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-red/15 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-display font-bold mb-5 text-white">
              Ready to see it on your own calls?
            </motion.h2>
            <motion.div variants={fadeUp}>
              <Link
                href="/book-a-demo"
                className="inline-flex items-center gap-3 bg-red hover:bg-red-hover text-white px-10 py-5 rounded-full font-bold text-base md:text-lg shadow-xl hover:-translate-y-1 transition-all"
              >
                Book a demo <ArrowRight size={20} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
