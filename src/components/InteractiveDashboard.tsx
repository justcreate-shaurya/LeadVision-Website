"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone, MicVocal, Volume2, BarChart3, TrendingUp, GitBranch,
  CheckCircle2, XCircle, AlertTriangle, Play, Pause, ChevronRight, Settings2, SlidersHorizontal
} from "lucide-react";

const products = [
  { id: "voice", num: "01", name: "Voice AI Agent", tagline: "45-min conversations, zero drop", icon: Phone, accent: "#bd2525" },
  { id: "stt", num: "02", name: "Speech-to-Text", tagline: "94% accuracy on real call audio", icon: MicVocal, accent: "#bd2525" },
  { id: "tts", num: "03", name: "Text-to-Speech", tagline: "8 in 10 thought it was human", icon: Volume2, accent: "#bd2525" },
  { id: "qa", num: "04", name: "QA & Analytics", tagline: "100% of calls scored, live", icon: BarChart3, accent: "#bd2525" },
  { id: "insights", num: "05", name: "Consumer Insights", tagline: "Purchase drivers from every call", icon: TrendingUp, accent: "#bd2525" },
  { id: "edge", num: "06", name: "Edge Case Discovery", tagline: "Finds what your scorecard missed", icon: GitBranch, accent: "#bd2525" },
];

// ─── LIGHT/GLASS THEME PANEL ────────────────────────────────────────────────
function Panel({ children, title, badge }: { children: React.ReactNode; title: string; badge?: string }) {
  return (
    <div className="h-full flex flex-col bg-white/90 backdrop-blur-xl rounded-[24px] overflow-hidden border border-white/60 shadow-[0_32px_80px_rgba(189,37,37,0.08)]">
      {/* Chrome bar */}
      <div className="flex items-center justify-between px-5 py-4 bg-white/50 border-b border-slate-line/50">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-[#ff5f57] border border-black/10" />
            <div className="w-3 h-3 rounded-full bg-[#febc2e] border border-black/10" />
            <div className="w-3 h-3 rounded-full bg-[#28c840] border border-black/10" />
          </div>
          <span className="font-mono text-[11px] font-bold text-ink-soft ml-2">{title}</span>
        </div>
        {badge && (
          <span className="font-mono text-[10px] font-bold px-2.5 py-1 rounded-full bg-red-light text-red border border-red/20">
            {badge}
          </span>
        )}
      </div>
      {children}
    </div>
  );
}

// ─── STAT CHIP ───────────────────────────────────────────────────────────────
function Chip({ label, value, color }: { label: string; value: string; color: string }) {
  return (
    <div className="bg-white/60 border border-slate-line/50 rounded-2xl p-4 flex-1">
      <div className="text-[10px] font-bold text-ink-faint uppercase tracking-wider mb-1.5">{label}</div>
      <div className="text-xl font-bold font-display" style={{ color }}>{value}</div>
    </div>
  );
}

// ─── PANELS ──────────────────────────────────────────────────────────────────

function VoicePanel() {
  const [playing, setPlaying] = useState(false);
  const turns = [
    { role: "C", text: "Haan, main hi hoon. Kaun bol raha hai?", time: "0:07", sentiment: "neutral" },
    { role: "A", text: "Main Aditya hoon, TrustFin se. Loan ke baare mein ek update hai — sirf 2 minute.", time: "0:14", sentiment: "friendly" },
    { role: "C", text: "Theek hai, batao. Main kuch kaam mein tha.", time: "0:21", sentiment: "neutral" },
    { role: "A", text: "Aapki November EMI due hai. Early settlement pe 12% waiver milega — aaj ki taareek tak.", time: "0:31", sentiment: "positive" },
    { role: "C", text: "Interesting... kitna principal bacha hai?", time: "0:39", sentiment: "curious" },
    { role: "A", text: "₹3.2 lakh. Ek minute mein breakdown bhej sakta hoon — WhatsApp pe?", time: "0:47", sentiment: "positive" },
  ];
  return (
    <Panel title="Leadvision — Voice AI Agent" badge="● LIVE  0:52">
      {/* Stats row */}
      <div className="flex gap-2 p-3 bg-background/50 border-b border-slate-line/50">
        <Chip label="Duration" value="0:52" color="#10b981" />
        <Chip label="Latency" value="340ms" color="#3b82f6" />
        <Chip label="Context" value="100%" color="#f59e0b" />
      </div>
      {/* Transcript */}
      <div className="flex-1 overflow-y-auto p-5 space-y-4 bg-white/30">
        {turns.map((t, i) => (
          <div key={i} className={`flex gap-3 items-end ${t.role === "A" ? "flex-row-reverse" : ""}`}>
            <div className={`w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 shadow-sm ${t.role === "A" ? "bg-red text-white" : "bg-ink text-white"}`}>
              {t.role}
            </div>
            <div className={`max-w-[75%] rounded-3xl px-4 py-3 shadow-sm border ${t.role === "A" ? "bg-red-light/30 border-red/10 rounded-br-sm" : "bg-white border-slate-line/50 rounded-bl-sm"}`}>
              <p className="text-[13px] leading-relaxed text-ink">{t.text}</p>
              <div className="flex items-center gap-2 mt-1.5 opacity-60">
                <span className="text-[10px] font-mono font-bold">{t.time}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Bottom bar */}
      <div className="px-5 py-4 border-t border-slate-line/50 bg-white/80 flex items-center gap-4">
        <button onClick={() => setPlaying(!playing)} className="flex items-center justify-center w-10 h-10 rounded-full bg-red hover:bg-red-hover text-white transition-all shadow-md">
          {playing ? <Pause size={16} className="fill-current" /> : <Play size={16} className="fill-current ml-1" />}
        </button>
        <div className="flex gap-2">
          <span className="text-[10px] font-bold px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 border border-emerald-200">Empathy ✓</span>
          <span className="text-[10px] font-bold px-3 py-1 rounded-full bg-amber-100 text-amber-700 border border-amber-200">Objection handled</span>
        </div>
      </div>
    </Panel>
  );
}

function STTPanel() {
  const words = [
    { w: "Mera", c: 98 }, { w: "loan", c: 99 }, { w: "chal", c: 95 }, { w: "raha", c: 93 },
    { w: "hai,", c: 96 }, { w: "aur", c: 98 }, { w: "main", c: 97 }, { w: "EMI", c: 99 },
    { w: "bharna", c: 89 }, { w: "chahta", c: 91 }, { w: "hoon", c: 98 }, { w: "but", c: 99 },
    { w: "is", c: 98 }, { w: "mahine", c: 86 }, { w: "thodi", c: 84 }, { w: "dikkat", c: 88 },
    { w: "aa", c: 95 }, { w: "gayi.", c: 96 },
  ];
  const getColor = (c: number) => c >= 95 ? "#10b981" : c >= 87 ? "#f59e0b" : "#ef4444";
  return (
    <Panel title="Leadvision — Speech-to-Text" badge="94.2% WER">
      <div className="flex gap-2 p-3 bg-background/50 border-b border-slate-line/50">
        <Chip label="Language" value="Hinglish" color="#3b82f6" />
        <Chip label="Speakers" value="2 detected" color="#10b981" />
        <Chip label="Noise" value="Low" color="#f59e0b" />
      </div>
      <div className="p-6 border-b border-slate-line/50 bg-white/40">
        <div className="flex items-center justify-between mb-4">
          <div className="text-[10px] text-ink-faint uppercase font-bold tracking-widest">Customer (word confidence)</div>
          <Settings2 size={14} className="text-ink-soft cursor-pointer hover:text-red transition-colors" />
        </div>
        <div className="flex flex-wrap gap-x-2.5 gap-y-4">
          {words.map((w, i) => (
            <span key={i} className="flex flex-col items-center gap-1 group cursor-pointer">
              <span className="text-[15px] font-medium text-ink group-hover:text-red transition-colors">{w.w}</span>
              <div className="w-full h-1 rounded-full opacity-80" style={{ background: getColor(w.c) }} />
              <span className="text-[9px] font-mono font-bold" style={{ color: getColor(w.c) }}>{w.c}%</span>
            </span>
          ))}
        </div>
      </div>
    </Panel>
  );
}

function TTSPanel() {
  const [voice, setVoice] = useState(0);
  const voices = ["Aditya", "Priya", "Karan", "Custom"];
  
  // Dynamic waveform data based on selected voice to make it feel interactive
  const baseBars = [3,7,12,8,15,10,17,11,6,14,9,16,7,12,8,14,10,5,13,9,7,14,11,17,8,4,11,15,6,10,8,13];
  const activeBars = baseBars.map((b, i) => Math.max(2, Math.min(18, b + (voice * 2) - (i % 3 === 0 ? voice : 0))));

  return (
    <Panel title="Leadvision — Text-to-Speech" badge="~80ms">
      <div className="p-5 border-b border-slate-line/50 bg-white/40">
        <div className="text-[10px] text-ink-faint uppercase font-bold tracking-widest mb-3">Voice selection</div>
        <div className="flex gap-2 p-1.5 bg-slate-100 rounded-xl w-fit border border-slate-line">
          {voices.map((v, i) => (
            <button key={v} onClick={() => setVoice(i)} className={`text-[12px] px-5 py-2 rounded-lg font-bold transition-all shadow-sm ${voice === i ? "bg-white text-red border border-red/10" : "bg-transparent text-ink-soft hover:text-ink shadow-none"}`}>
              {v}
            </button>
          ))}
        </div>
      </div>
      <div className="p-5 border-b border-slate-line/50 bg-background/30">
        <div className="flex items-center justify-between mb-4">
          <div className="text-[10px] text-ink-faint uppercase font-bold tracking-widest">Generated Waveform</div>
          <SlidersHorizontal size={14} className="text-ink-soft cursor-pointer hover:text-red transition-colors" />
        </div>
        <div className="flex items-center gap-1 h-20 px-2">
          {activeBars.map((h, i) => (
            <div key={i} className="flex-1 rounded-full origin-center transition-all duration-300" style={{ height: `${(h / 18) * 100}%`, background: `linear-gradient(to top, #bd2525, #ffb347)` }} />
          ))}
        </div>
      </div>
      <div className="p-5 flex-1 bg-white/60">
        <div className="text-[10px] text-ink-faint uppercase font-bold tracking-widest mb-3">Sample output</div>
        <div className="bg-white rounded-2xl p-4 border border-slate-line shadow-sm">
          <p className="text-[14px] text-ink font-medium leading-relaxed">
            &ldquo;Namaste, main {voices[voice]} bol {voice === 1 ? 'rahi' : 'raha'} hoon, TrustFin se. Aapki application successfully process ho chuki hai.&rdquo;
          </p>
        </div>
      </div>
    </Panel>
  );
}

function QAPanel() {
  const criteria = [
    { label: "Opening greeting", score: 9, pass: true },
    { label: "Product pitch accuracy", score: 8, pass: true },
    { label: "Objection handling", score: 7, pass: true },
    { label: "Compliance disclosure", score: 10, pass: true },
    { label: "Empathy demonstrated", score: 7, pass: true },
    { label: "Inappropriate language", score: 10, pass: true },
  ];
  return (
    <Panel title="Leadvision — QA & Analytics" badge="LIVE SCORING">
      <div className="p-6 bg-gradient-to-br from-white to-red-light/20 border-b border-slate-line/50 flex items-center justify-between">
        <div>
          <div className="text-[10px] text-ink-faint uppercase font-bold tracking-widest mb-1">Overall score</div>
          <div className="text-5xl font-display font-bold text-ink">91<span className="text-2xl text-ink-soft">.4</span></div>
        </div>
        <div className="w-24 h-24 rounded-full border-8 border-slate-100 flex items-center justify-center relative shadow-inner">
           <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 100 100">
             <circle cx="50" cy="50" r="46" fill="none" stroke="#10b981" strokeWidth="8" strokeDasharray="289" strokeDashoffset="28" strokeLinecap="round" />
           </svg>
           <span className="text-xs font-bold text-emerald-600">PASS</span>
        </div>
      </div>
      <div className="flex-1 p-5 space-y-3 overflow-y-auto bg-white/40">
        {criteria.map(c => (
          <div key={c.label} className="flex items-center gap-4 bg-white p-3 rounded-xl border border-slate-line shadow-sm hover:border-red/30 transition-colors cursor-default">
            {c.pass ? <CheckCircle2 size={16} className="text-emerald-500 shrink-0" /> : <XCircle size={16} className="text-red shrink-0" />}
            <span className="text-[13px] font-medium text-ink flex-1">{c.label}</span>
            <div className="w-24 bg-slate-100 rounded-full h-2">
              <div className="h-2 rounded-full transition-all" style={{ width: `${(c.score / 10) * 100}%`, background: c.pass ? "linear-gradient(90deg, #34d399, #10b981)" : "linear-gradient(90deg, #f87171, #ef4444)" }} />
            </div>
            <span className="font-mono text-[11px] font-bold text-ink-soft w-6 text-right">{c.score}</span>
          </div>
        ))}
      </div>
    </Panel>
  );
}

function InsightsPanel() {
  return (
    <Panel title="Leadvision — Consumer Insights" badge="LIVE">
      <div className="flex gap-2 p-3 bg-background/50 border-b border-slate-line/50">
        <Chip label="Top driver" value="Hair 41%" color="#10b981" />
        <Chip label="Top objection" value="Price 28%" color="#ef4444" />
        <Chip label="Rising topic" value="Natural +19%" color="#f59e0b" />
      </div>
      <div className="p-5 border-b border-slate-line/50 bg-white/50">
        <div className="text-[10px] text-ink-faint uppercase font-bold tracking-widest mb-4">Topic frequency (this week)</div>
        {[
          { topic: "Hairfall concern", pct: 41, c: "#10b981" },
          { topic: "Price / affordability", pct: 28, c: "#ef4444" },
          { topic: "Natural ingredients", pct: 19, c: "#f59e0b" },
        ].map(t => (
          <div key={t.topic} className="flex items-center gap-4 mb-3">
            <span className="text-[12px] font-medium text-ink w-36 shrink-0">{t.topic}</span>
            <div className="flex-1 h-2.5 bg-slate-100 rounded-full overflow-hidden shadow-inner">
              <div className="h-full rounded-full" style={{ width: `${t.pct}%`, background: t.c }} />
            </div>
            <span className="font-mono text-[11px] font-bold w-10 text-right" style={{ color: t.c }}>{t.pct}%</span>
          </div>
        ))}
      </div>
    </Panel>
  );
}

function EdgePanel() {
  const cases = [
    { tag: "Unhandled", title: "Customer references a previous call agent", freq: "47 calls", severity: "high", trend: "+8 this week" },
    { tag: "Unhandled", title: "Call drops and customer calls back mid-script", freq: "31 calls", severity: "high", trend: "+2 this week" },
    { tag: "Partial", title: "Customer asks for a specific product variant", freq: "112 calls", severity: "medium", trend: "stable" },
  ];
  return (
    <Panel title="Leadvision — Edge Case Discovery" badge="4 new this week">
      <div className="flex-1 p-5 space-y-4 overflow-y-auto bg-background/30">
        {cases.map((c, i) => {
          const isHigh = c.severity === "high";
          return (
            <div key={i} className="bg-white rounded-2xl p-4 border shadow-sm hover:shadow-md transition-all cursor-pointer group" style={{ borderColor: isHigh ? 'rgba(239,68,68,0.2)' : 'rgba(245,158,11,0.2)' }}>
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle size={14} className={isHigh ? "text-red" : "text-amber-500"} />
                <span className={`text-[10px] font-bold rounded-full px-2.5 py-1 ${isHigh ? "bg-red-light text-red" : "bg-amber-50 text-amber-600"}`}>{c.tag}</span>
                <span className="text-[10px] font-mono text-ink-faint ml-auto">{c.trend}</span>
              </div>
              <p className="text-[13px] font-medium text-ink leading-snug">{c.title}</p>
              <div className="flex items-center justify-between mt-3 pt-3 border-t border-slate-line/50">
                <span className="text-[11px] font-bold text-ink-soft">{c.freq}</span>
                <button className="text-[11px] font-bold text-red opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                  View transcripts <ChevronRight size={12} />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </Panel>
  );
}

const panels: Record<string, React.ReactNode> = {
  voice: <VoicePanel />,
  stt: <STTPanel />,
  tts: <TTSPanel />,
  qa: <QAPanel />,
  insights: <InsightsPanel />,
  edge: <EdgePanel />,
};

// ─── MAIN EXPORT ────────────────────────────────────────────────────────────
export function InteractiveDashboard() {
  const [active, setActive] = useState("voice");

  return (
    <section id="products" className="py-24 md:py-36 border-t border-slate-line overflow-hidden relative" style={{ background: "linear-gradient(180deg, #ffffff 0%, #fafafa 50%, #f7f2f2 100%)" }}>
      {/* Decorative background blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14 md:mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold text-ink mb-6">
            Every part of the call, covered
          </h2>
          <p className="text-lg md:text-xl text-ink-soft max-w-2xl mx-auto">
            Six integrated products built on our own speech models — explore each one below.
          </p>
        </motion.div>

        {/* Desktop layout */}
        <div className="grid grid-cols-1 md:grid-cols-[340px_1fr] lg:grid-cols-[380px_1fr] gap-6 lg:gap-10 items-start max-w-6xl mx-auto">
          {/* Left: Glass sidebar */}
          <div className="hidden md:block rounded-[24px] overflow-hidden border border-slate-line/60 bg-white/60 backdrop-blur-2xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] p-3">
            <div className="flex flex-col gap-1.5">
              {products.map(p => {
                const Icon = p.icon;
                const isActive = active === p.id;
                return (
                  <button
                    key={p.id}
                    onClick={() => setActive(p.id)}
                    className={`w-full text-left px-4 py-4 rounded-xl transition-all relative group flex items-center gap-4 ${isActive ? 'bg-white shadow-md border border-slate-line/50 scale-[1.02]' : 'hover:bg-white/50 border border-transparent'}`}
                  >
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors shrink-0 shadow-sm ${isActive ? 'bg-red text-white' : 'bg-background border border-slate-line text-ink-soft group-hover:text-red'}`}>
                      <Icon size={18} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className={`font-mono text-[10px] font-bold ${isActive ? 'text-red' : 'text-ink-faint'}`}>{p.num}</span>
                        <span className={`text-[15px] font-display font-bold truncate transition-colors ${isActive ? 'text-ink' : 'text-ink-soft group-hover:text-ink'}`}>{p.name}</span>
                      </div>
                      <p className={`text-[12px] truncate transition-colors ${isActive ? 'text-ink-soft' : 'text-ink-faint'}`}>{p.tagline}</p>
                    </div>
                    {isActive && <ChevronRight size={16} className="text-red shrink-0" />}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right: dashboard panel */}
          <div className="relative">
            <div className="sticky top-28">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, x: 20, filter: "blur(4px)" }}
                  animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, x: -20, filter: "blur(4px)" }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="h-[520px] md:h-[580px]"
                >
                  {panels[active]}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
