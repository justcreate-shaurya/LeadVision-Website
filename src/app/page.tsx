"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion";
import {
  Zap, Brain, Volume2, IndianRupee, Target, GitBranch, ArrowRight,
  CheckCircle2, Shield, Phone, BarChart3, MessageSquare, TrendingUp,
  Clock, Users, Activity, MicVocal, ChevronRight, Play
} from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
};

const stagger: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

// ─── INLINE QA DASHBOARD MOCKUP ────────────────────────────────────────────────
function DashboardMockup() {
  return (
    <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl border border-slate-line bg-[#0f0e0d]">
      <div className="flex items-center justify-between px-5 py-3 border-b border-[#2a2018] bg-[#161412]">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
          <div className="w-3 h-3 rounded-full bg-[#28c840]" />
        </div>
        <span className="font-mono text-[11px] text-[#5a4e42]">Leadvision — QA Dashboard</span>
        <span className="font-mono text-[11px] text-[#5a4e42]">LIVE</span>
      </div>
      <div className="flex items-center gap-6 px-5 py-3 border-b border-[#2a2018]">
        {["Overview", "Call Log", "Transcripts", "Insights", "Alerts"].map((t, i) => (
          <span key={t} className={`text-xs font-semibold ${i === 0 ? "text-[#f0c060] border-b border-[#f0c060] pb-1" : "text-[#4a3e32]"}`}>{t}</span>
        ))}
      </div>
      <div className="grid grid-cols-4 gap-px bg-[#2a2018] border-b border-[#2a2018]">
        {[
          { label: "Calls Today", value: "1,284", sub: "+12% vs yesterday", color: "#4ade80" },
          { label: "QA Score", value: "91.4%", sub: "↑ 3.2 pts this week", color: "#f0c060" },
          { label: "Avg Handle Time", value: "4m 32s", sub: "−18s vs target", color: "#60a5fa" },
          { label: "Escalations", value: "2.1%", sub: "↓ 0.4% vs last week", color: "#f87171" },
        ].map(s => (
          <div key={s.label} className="bg-[#141210] px-4 py-4">
            <div className="text-[11px] text-[#6b5a48] mb-1">{s.label}</div>
            <div className="text-2xl font-bold font-display" style={{ color: s.color }}>{s.value}</div>
            <div className="text-[10px] text-[#4a3e32] mt-1">{s.sub}</div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-px bg-[#2a2018]">
        <div className="bg-[#0f0e0d] p-4 space-y-2">
          <div className="text-[11px] font-bold text-[#6b5a48] uppercase tracking-wider mb-2">Live Transcript — Call #1024</div>
          <div className="flex flex-col gap-2 text-[11px]">
            <div><span className="text-[#5a4e42]">Customer: </span><span className="text-[#d4b896]">Mera order kab aayega? Teen din se wait kar raha hoon.</span></div>
            <div><span className="text-[#f0c060]">Agent: </span><span className="text-[#9ca3af]">Main abhi aapka order check karta hoon. Ek minute...</span></div>
            <div><span className="text-[#5a4e42]">Customer: </span><span className="text-[#d4b896]">Bahut time ho gaya. Koi solution batao.</span></div>
            <div><span className="text-[#f0c060]">Agent: </span><span className="text-[#9ca3af]">Order expected Thursday. I'm adding express shipping for free.</span></div>
          </div>
          <div className="flex items-center gap-2 mt-2 pt-2 border-t border-[#2a2018]">
            <span className="bg-[#22c55e]/20 text-[#22c55e] text-[10px] px-2 py-0.5 rounded-full font-bold">PASS</span>
            <span className="text-[10px] text-[#5a4e42]">Empathy: 9/10 · Resolution: Yes</span>
          </div>
        </div>
        <div className="bg-[#0f0e0d] p-4">
          <div className="text-[11px] font-bold text-[#6b5a48] uppercase tracking-wider mb-3">QA Score by Hour</div>
          <div className="flex items-end gap-1.5 h-20">
            {[72, 85, 88, 91, 87, 93, 90, 95, 88, 92, 89, 94].map((v, i) => (
              <div key={i} className="flex-1 rounded-t-sm" style={{ height: `${v}%`, background: v > 90 ? "#f0c060" : "#3a3028" }} />
            ))}
          </div>
          <div className="flex justify-between text-[9px] text-[#3a3028] mt-1"><span>8am</span><span>12pm</span><span>4pm</span><span>8pm</span></div>
        </div>
      </div>
    </div>
  );
}

// ─── INSIGHTS MOCKUP ────────────────────────────────────────────────────────────
function InsightsMockup() {
  return (
    <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl border border-slate-line bg-[#0f0e0d]">
      <div className="flex items-center justify-between px-5 py-3 border-b border-[#2a2018] bg-[#161412]">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
          <div className="w-3 h-3 rounded-full bg-[#28c840]" />
        </div>
        <span className="font-mono text-[11px] text-[#5a4e42]">Leadvision — Consumer Insights</span>
      </div>
      <div className="grid grid-cols-3 gap-px bg-[#2a2018] border-b border-[#2a2018]">
        {[
          { label: "Purchase Driver", value: "Hair Loss Concern", pct: "41%", color: "#4ade80" },
          { label: "Top Objection", value: "Price Sensitivity", pct: "28%", color: "#f87171" },
          { label: "Rising Topic ↑", value: "Natural Ingredients", pct: "+19%", color: "#f0c060" },
        ].map(c => (
          <div key={c.label} className="bg-[#141210] px-4 py-4">
            <div className="text-[10px] text-[#6b5a48] mb-1">{c.label}</div>
            <div className="text-sm font-bold text-white">{c.value}</div>
            <div className="text-xl font-bold mt-1" style={{ color: c.color }}>{c.pct}</div>
          </div>
        ))}
      </div>
      <div className="p-4 space-y-2">
        <div className="text-[11px] font-bold text-[#6b5a48] uppercase tracking-wider mb-3">Alert Feed</div>
        {[
          { icon: "🔴", text: "Spike in returns-related calls (+34%) over past 2h", time: "2m ago" },
          { icon: "🟡", text: "\"Competitor\" mentions up 12% today — tracking ZinCplex", time: "18m ago" },
          { icon: "🟢", text: "Post-purchase sentiment improved after new script rollout", time: "1h ago" },
        ].map((a, i) => (
          <div key={i} className="flex items-start gap-3 py-2 border-b border-[#2a2018]">
            <span className="text-base">{a.icon}</span>
            <p className="flex-1 text-[11px] text-[#b0a090]">{a.text}</p>
            <span className="text-[10px] text-[#4a3e32] whitespace-nowrap">{a.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── GRADIENT FEATURE CARD (original red palette gradients) ────────────────────
function GradientCard({ gradient, icon: Icon, title, items }: { gradient: string; icon: React.ElementType; title: string; items: string[] }) {
  return (
    <div className="bg-white rounded-3xl overflow-hidden border border-slate-line shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 group">
      <div className={`h-44 ${gradient} flex items-center justify-center relative overflow-hidden`}>
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_white_0%,_transparent_70%)]" />
        <Icon size={52} className="text-white/90 relative z-10" strokeWidth={1.5} />
      </div>
      <div className="p-8">
        <h3 className="text-xl font-display font-bold mb-5">{title}</h3>
        <div className="space-y-3">
          {items.map((item) => (
            <div key={item} className="flex items-center justify-between py-2 border-b border-slate-line last:border-0 text-sm text-ink-soft hover:text-ink transition-colors group/item">
              <span className="flex items-center gap-2"><ChevronRight size={14} className="text-red" /> {item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── HOMEPAGE ──────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/* HERO */}
      <section className="relative py-24 md:py-40 overflow-hidden bg-background">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-[radial-gradient(ellipse_at_top,_rgba(189,37,37,0.08)_0%,_transparent_65%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" animate="visible" variants={stagger}>
              <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-red/30 bg-red-light text-red text-xs font-bold tracking-wider uppercase mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-red animate-pulse" />
                Voice AI Platform for India
              </motion.div>

              <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-display font-bold leading-[1.05] tracking-tight mb-6 text-ink">
                AI agents that<br />sound like <span className="relative inline-block">
                  <span className="text-red">humans.</span>
                  <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 200 8" preserveAspectRatio="none">
                    <path d="M0 6 Q 100 0 200 6" stroke="#bd2525" strokeWidth="3" fill="none" opacity="0.4" />
                  </svg>
                </span>
              </motion.h1>

              <motion.p variants={fadeUp} className="text-lg md:text-xl text-ink-soft leading-relaxed mb-10 max-w-xl">
                The first voice AI stack built for Hinglish conversations. Low latency, 94% accuracy, cloned Indian voices, and adaptive workflows that handle real edge cases.
              </motion.p>

              <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
                <Link href="/book-a-demo" className="bg-ink text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-red transition-all shadow-lg group">
                  Book a demo <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="#products" className="bg-white border border-slate-line text-ink px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:border-red hover:text-red transition-all shadow-sm">
                  <Play size={15} className="fill-current" /> See it in action
                </Link>
              </motion.div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 60 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9, delay: 0.2 }}>
              <DashboardMockup />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ADVISORS STRIP */}
      <section className="border-y border-slate-line bg-white py-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center gap-8 sm:gap-12">
          <span className="font-mono text-xs font-bold text-ink-faint tracking-widest uppercase whitespace-nowrap">Advisors from</span>
          <div className="flex flex-wrap justify-center sm:justify-start gap-8 md:gap-12 opacity-50 grayscale">
            {["IIT Bombay", "IIT Madras", "IIM Ahmedabad", "Stanford", "IIM Bangalore", "Imperial College", "Cambridge"].map(name => (
              <span key={name} className="font-display font-bold text-base text-ink">{name}</span>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS GRID */}
      <section className="py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeUp} className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-ink">Why Leadvision is different</h2>
            <p className="text-lg text-ink-soft max-w-2xl mx-auto">Not another chatbot wrapper. A purpose-built voice AI stack for the hardest problems in Indian customer operations.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Zap, title: "Ultra-low Latency", stat: "<500ms", desc: "Responses arrive in under 500ms — below the human perception threshold for awkward pauses." },
              { icon: Brain, title: "Long Context Memory", stat: "45min+", desc: "Remembers every word from minute 1 to minute 45, maintaining perfect context across complex conversations." },
              { icon: MicVocal, title: "Cloned Indian Voices", stat: "Natural", desc: "Emotionally expressive, culturally authentic voices. Your agents cloned, your customers trust." },
              { icon: IndianRupee, title: "Cost-Effective at Scale", stat: "80% less", desc: "Replace expensive manual calling operations with AI that scales to millions of calls." },
              { icon: Target, title: "94% Accuracy", stat: "94%", desc: "Industry-leading ASR accuracy even in noisy Hinglish environments with heavy code-switching." },
              { icon: GitBranch, title: "Adaptive Workflows", stat: "Self-learns", desc: "Discovers edge cases in production and adjusts logic automatically — no re-prompting required." },
            ].map((b, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="bg-white border border-slate-line p-8 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group cursor-default"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-red-light text-red flex items-center justify-center group-hover:scale-110 transition-transform">
                    <b.icon size={26} strokeWidth={1.8} />
                  </div>
                  <span className="font-mono font-bold text-sm px-3 py-1 rounded-full bg-red-light text-red">{b.stat}</span>
                </div>
                <h3 className="text-xl font-display font-bold mb-3 text-ink">{b.title}</h3>
                <p className="text-ink-soft leading-relaxed text-sm">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCT STACK */}
      <section id="products" className="py-32 bg-white border-t border-slate-line">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-ink">Five products, one stack</h2>
            <p className="text-lg text-ink-soft max-w-2xl mx-auto">Everything you need to automate, analyze, and understand voice at scale.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <GradientCard gradient="bg-gradient-to-br from-red to-red-hover" icon={Phone} title="Voice AI Agent" items={["Outbound & inbound calls", "Hinglish native", "Adaptive workflow engine", "Human handoff"]} />
            <GradientCard gradient="bg-gradient-to-br from-ink to-slate-dark" icon={MicVocal} title="Speech-to-Text" items={["Real-time transcription", "12+ Indian languages", "95%+ accuracy", "Speaker diarization"]} />
            <GradientCard gradient="bg-gradient-to-br from-[#4a3020] to-[#8a5030]" icon={Volume2} title="Text-to-Speech" items={["Natural Indian voices", "Voice cloning", "Emotional tone control", "Real-time streaming"]} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 max-w-3xl mx-auto">
            <GradientCard gradient="bg-gradient-to-br from-[#1a3a2a] to-[#2a6a4a]" icon={BarChart3} title="QA & Analytics" items={["100% call scoring", "Custom scorecards", "Agent feedback loops", "Automated reporting"]} />
            <GradientCard gradient="bg-gradient-to-br from-[#2a1a3a] to-[#5a2a7a]" icon={TrendingUp} title="Consumer Insights" items={["Real-time alert feed", "Purchase driver analysis", "Competitor tracking", "Sentiment trending"]} />
          </div>
        </div>
      </section>

      {/* SPLIT: INSIGHTS DASHBOARD */}
      <section className="py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.div variants={fadeUp} className="inline-flex items-center gap-2 text-xs font-bold font-mono text-red tracking-wider uppercase mb-6">
                <Activity size={14} /> Consumer Insights
              </motion.div>
              <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-display font-bold mb-6 text-ink">Understand why customers call before they hang up.</motion.h2>
              <motion.p variants={fadeUp} className="text-lg text-ink-soft leading-relaxed mb-10">
                Real-time alerts tell your team when a new objection spikes, a competitor is being mentioned, or a script change is working. No dashboards to build. Just answers.
              </motion.p>
              <motion.div variants={stagger} className="space-y-4">
                {[
                  { icon: TrendingUp, label: "Trending topics across 100% of calls, updated hourly" },
                  { icon: MessageSquare, label: "Verbatim customer language extraction for product teams" },
                  { icon: Activity, label: "Spike alerts: know about issues within minutes, not days" },
                ].map(({ icon: Icon, label }) => (
                  <motion.div key={label} variants={fadeUp} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-lg bg-red-light text-red flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon size={16} />
                    </div>
                    <p className="text-ink-soft text-sm">{label}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <InsightsMockup />
            </motion.div>
          </div>
        </div>
      </section>

      {/* STATS BAND */}
      <section className="py-20 bg-white border-y border-slate-line">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "<500ms", label: "Response latency", icon: Zap },
              { value: "94%", label: "STT accuracy", icon: Target },
              { value: "45min", label: "Long call support", icon: Clock },
              { value: "100%", label: "Calls QA-scored", icon: BarChart3 },
            ].map(({ value, label, icon: Icon }) => (
              <div key={label} className="bg-background border border-slate-line p-8 rounded-2xl flex flex-col items-center text-center hover:-translate-y-1 transition-transform">
                <div className="w-12 h-12 rounded-xl bg-red-light text-red flex items-center justify-center mb-4">
                  <Icon size={22} />
                </div>
                <div className="text-4xl font-display font-bold mb-2 text-ink">{value}</div>
                <div className="text-sm text-ink-faint font-medium uppercase tracking-wide">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRAYA CASE STUDY */}
      <section className="py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="relative overflow-hidden bg-ink rounded-[2.5rem] p-12 md:p-20">
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-red/20 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-white/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-16">
              <div className="flex-1 text-white">
                <div className="font-mono text-xs font-bold text-slate-dark tracking-widest uppercase mb-6 flex items-center gap-3">
                  <span className="w-8 h-px bg-slate-dark" /> Flagship Customer
                </div>
                <h2 className="text-5xl md:text-7xl font-display font-bold mb-8">Traya<span className="text-red">.</span></h2>
                <p className="text-slate-dark text-lg leading-relaxed mb-10 max-w-md">
                  Automating thousands of complex pre-sales and retention calls daily with Leadvision's Voice AI stack and QA analytics.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { val: "3x", label: "Call volume increase" },
                    { val: "68%", label: "Cost reduction" },
                    { val: "91%", label: "QA score avg" },
                    { val: "100%", label: "Calls analyzed" },
                  ].map(s => (
                    <div key={s.label} className="border border-white/10 rounded-2xl p-5 bg-white/5">
                      <div className="text-3xl font-display font-bold text-white mb-1">{s.val}</div>
                      <div className="text-xs text-slate-dark">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex-1 w-full">
                <InsightsMockup />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PRIVACY */}
      <section className="py-32 bg-white border-t border-slate-line">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="w-16 h-16 bg-red-light rounded-2xl flex items-center justify-center mx-auto mb-8">
              <Shield size={28} className="text-red" />
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-ink">Enterprise-grade privacy, out of the box</h2>
            <p className="text-lg text-ink-soft max-w-2xl mx-auto mb-16">Built for healthcare, banking, and insurance. Your data never leaves your infrastructure.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Shield, title: "Data sovereignty", desc: "Customer conversations stay within your controlled infrastructure. No third-party model training on your data." },
              { icon: Users, title: "Human-in-the-loop", desc: "Agents monitor live calls and join seamlessly with full context — customers never repeat themselves." },
              { icon: Activity, title: "Real-time observability", desc: "Every call scored, every insight surfaced. Full auditability for regulated industries." },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-background border border-slate-line p-8 rounded-3xl text-left hover:-translate-y-1 transition-transform">
                <div className="w-12 h-12 bg-red-light rounded-xl flex items-center justify-center mb-6">
                  <Icon size={22} className="text-red" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-ink">{title}</h3>
                <p className="text-ink-soft text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 text-center bg-background">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeUp} className="text-5xl md:text-6xl font-display font-bold mb-6 text-ink">Ready to hear the difference?</motion.h2>
            <motion.p variants={fadeUp} className="text-xl text-ink-soft mb-12">Book a live demo and hear our AI agent handle a real call in Hinglish.</motion.p>
            <motion.div variants={fadeUp}>
              <Link href="/book-a-demo" className="inline-flex items-center gap-3 bg-red hover:bg-red-hover text-white px-12 py-5 rounded-full font-bold text-lg shadow-xl hover:shadow-red/20 hover:-translate-y-1 transition-all">
                Book a live demo <ArrowRight size={20} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
