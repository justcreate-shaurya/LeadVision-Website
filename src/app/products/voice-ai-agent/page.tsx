"use client";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { Phone, Zap, Brain, GitBranch, Users, CheckCircle2, ArrowRight, Activity, Clock, Shield, MicVocal } from "lucide-react";

const fadeUp: Variants = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } } };
const stagger: Variants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } };

function CallMockup() {
  return (
    <div className="rounded-2xl overflow-hidden border border-slate-line bg-[#0f0e0d] shadow-2xl">
      <div className="flex items-center justify-between px-5 py-3 bg-[#161412] border-b border-[#2a2018]">
        <div className="flex gap-2"><div className="w-3 h-3 rounded-full bg-[#ff5f57]"/><div className="w-3 h-3 rounded-full bg-[#ffbd2e]"/><div className="w-3 h-3 rounded-full bg-[#28c840]"/></div>
        <span className="font-mono text-[11px] text-[#5a4e42]">Live Call Monitor</span>
        <span className="flex items-center gap-1.5 text-[10px] text-[#22c55e] font-bold"><span className="w-1.5 h-1.5 rounded-full bg-[#22c55e] animate-pulse"/> LIVE</span>
      </div>
      <div className="p-5 space-y-4">
        <div className="flex items-center justify-between pb-4 border-b border-[#2a2018]">
          <div>
            <div className="text-xs text-[#6b5a48] mb-1">Current Call</div>
            <div className="text-white font-bold font-display">+91 98765 43210</div>
            <div className="text-xs text-[#4a3e32]">Traya Health · Pre-sales · 4m 12s</div>
          </div>
          <div className="text-right">
            <div className="text-xs text-[#6b5a48] mb-1">Sentiment</div>
            <div className="text-[#4ade80] font-bold">Positive ↑</div>
          </div>
        </div>
        <div className="space-y-3 text-[11px]">
          <div><span className="text-[#5a4e42]">Customer: </span><span className="text-[#d4b896]">Mujhe hair fall ki bahut problem hai, 3 saal se...</span></div>
          <div><span className="text-[#f0c060]">Agent: </span><span className="text-[#9ca3af]">Main samajhta hoon. Aapki concern valid hai. Traya ka personalized plan specifically addresses chronic hair fall. May I ask...</span></div>
          <div><span className="text-[#5a4e42]">Customer: </span><span className="text-[#d4b896]">Kitna time lagega results aane mein?</span></div>
          <div><span className="text-[#f0c060]">Agent: </span><span className="text-[#9ca3af]">Most customers see visible reduction in 8-12 weeks. We also offer a 60-day money-back guarantee...</span></div>
        </div>
        <div className="grid grid-cols-3 gap-2 pt-3 border-t border-[#2a2018]">
          {[{ l: "Latency", v: "420ms", c: "#4ade80" }, { l: "Node", v: "Objection", c: "#f0c060" }, { l: "Intent", v: "Buying", c: "#60a5fa" }].map(s => (
            <div key={s.l} className="bg-[#1a1714] rounded-lg p-2 text-center">
              <div className="text-[9px] text-[#5a4e42]">{s.l}</div>
              <div className="text-xs font-bold" style={{ color: s.c }}>{s.v}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="px-5 pb-5">
        <div className="flex items-end gap-1 h-10 opacity-50">
          {[...Array(32)].map((_, i) => (
            <div key={i} className="flex-1 rounded-t bg-[#f0c060]" style={{ height: `${20 + Math.sin(i * 0.7) * 60 + 20}%` }} />
          ))}
        </div>
        <div className="text-[9px] text-[#3a3028] text-center mt-1">Live waveform</div>
      </div>
    </div>
  );
}

export default function VoiceAIAgent() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden bg-background">

      {/* HERO */}
      <section className="relative py-24 md:py-40 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-[radial-gradient(ellipse_at_top,_rgba(189,37,37,0.07)_0%,_transparent_65%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-red/30 bg-red-light text-red text-xs font-bold tracking-wider uppercase mb-8">
              <Phone size={12} /> Voice AI Agent
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-display font-bold leading-[1.05] tracking-tight mb-6 text-ink">
              AI agents that <span className="text-red">don't sound like bots.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-xl text-ink-soft leading-relaxed mb-10 max-w-xl">
              Handle pre-sales, support, and retention calls at scale. Speaks Hinglish natively. Remembers context. Hands off seamlessly to humans when needed.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
              <Link href="/book-a-demo" className="bg-ink text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-red transition-all shadow-lg group">
                Book a demo <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9, delay: 0.2 }}>
            <CallMockup />
          </motion.div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-16 bg-white border-y border-slate-line">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: "<500ms", label: "Response latency", icon: Zap },
            { value: "94%", label: "Intent accuracy", icon: Activity },
            { value: "45min", label: "Long call support", icon: Clock },
            { value: "<1%", label: "Hallucination rate", icon: Shield },
          ].map(({ value, label, icon: Icon }) => (
            <div key={label} className="bg-background border border-slate-line p-6 rounded-2xl flex flex-col items-center text-center hover:-translate-y-1 transition-transform">
              <div className="w-11 h-11 rounded-xl bg-red-light text-red flex items-center justify-center mb-3"><Icon size={20} /></div>
              <div className="text-3xl font-display font-bold mb-1 text-ink">{value}</div>
              <div className="text-xs text-ink-faint font-medium uppercase tracking-wide">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-ink">Why this agent is different</h2>
            <p className="text-lg text-ink-soft max-w-2xl mx-auto">Not a scripted IVR. Not a chatbot wrapper. A truly adaptive voice intelligence.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { icon: GitBranch, title: "Adaptive Workflow Engine", desc: "Conversations are broken into independent nodes — each with focused prompts. The workflow engine routes between them deterministically, so the LLM never hallucinates the flow, only the phrasing.", badge: "No more prompt bloat" },
              { icon: Brain, title: "Global Knowledge Brain", desc: "A persistent context layer that retains customer details, conversation history, and product knowledge across the entire call — even at 45+ minutes.", badge: "45min+ context" },
              { icon: MicVocal, title: "Cloned Indian Voices", desc: "Natural-sounding, emotionally expressive voices cloned from your best human agents. Trained on actual Hinglish and regional accents.", badge: "Sounds human" },
              { icon: Users, title: "Invisible Human Handoffs", desc: "When the agent detects a situation requiring human expertise, it notifies a live agent who can join mid-call with full context — the customer never repeats themselves.", badge: "Zero friction" },
            ].map(({ icon: Icon, title, desc, badge }) => (
              <motion.div key={title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white border border-slate-line p-10 rounded-3xl hover:shadow-xl hover:-translate-y-1 transition-all group">
                <div className="flex items-start gap-5 mb-5">
                  <div className="w-14 h-14 rounded-2xl bg-red-light text-red flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Icon size={26} strokeWidth={1.8} />
                  </div>
                  <div>
                    <span className="font-mono text-xs font-bold text-red uppercase tracking-wider">{badge}</span>
                    <h3 className="text-xl font-display font-bold text-ink mt-1">{title}</h3>
                  </div>
                </div>
                <p className="text-ink-soft leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section className="py-32 bg-white border-t border-slate-line">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-4 text-ink">Where it works</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Pre-sales", items: ["Product discovery", "Objection handling", "Appointment booking", "Lead qualification"] },
              { title: "Customer Support", items: ["Order tracking & updates", "Return/refund processing", "Complaint resolution", "FAQs & policy queries"] },
              { title: "Retention & Renewals", items: ["Churn prevention", "Subscription upsell", "Satisfaction surveys", "Win-back campaigns"] },
            ].map(({ title, items }) => (
              <div key={title} className="bg-background border border-slate-line p-8 rounded-3xl">
                <h3 className="text-xl font-display font-bold mb-6 text-ink">{title}</h3>
                <ul className="space-y-3">
                  {items.map(item => (
                    <li key={item} className="flex items-center gap-3 text-sm text-ink-soft">
                      <CheckCircle2 size={16} className="text-red flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 text-center bg-background">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-ink">Hear it for yourself.</h2>
          <p className="text-xl text-ink-soft mb-10">Book a demo and we'll run a live Hinglish call while you listen.</p>
          <Link href="/book-a-demo" className="inline-flex items-center gap-3 bg-red hover:bg-red-hover text-white px-12 py-5 rounded-full font-bold text-lg shadow-xl hover:-translate-y-1 transition-all">
            Book a live demo <ArrowRight size={20} />
          </Link>
        </div>
      </section>

    </div>
  );
}
