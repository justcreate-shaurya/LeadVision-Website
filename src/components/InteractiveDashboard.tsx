"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone, MicVocal, Volume2, BarChart3, TrendingUp, GitBranch,
  CheckCircle2, XCircle, AlertTriangle, Play, Pause
} from "lucide-react";

const products = [
  {
    id: "voice",
    num: "01",
    name: "Voice AI Agent",
    desc: "Takes on 45-minute conversations, works through objections, never loses the flow.",
    icon: Phone,
    color: "#bd2525",
  },
  {
    id: "stt",
    num: "02",
    name: "Speech-to-Text",
    desc: "Live transcripts at 94% accuracy, through background noise and accents.",
    icon: MicVocal,
    color: "#1b2027",
  },
  {
    id: "tts",
    num: "03",
    name: "Text-to-Speech",
    desc: "Low-latency voices, indistinguishable from humans and clonable.",
    icon: Volume2,
    color: "#7c3a1a",
  },
  {
    id: "qa",
    num: "04",
    name: "QA & Analytics",
    desc: "Scores every call live against your scorecard, flags compliance breaches as they happen.",
    icon: BarChart3,
    color: "#1a3a2a",
  },
  {
    id: "insights",
    num: "05",
    name: "Consumer Insights",
    desc: "Purchase drivers, objections and brand perception, straight from customers.",
    icon: TrendingUp,
    color: "#2a1a3a",
  },
  {
    id: "edge",
    num: "06",
    name: "Edge Case Discovery",
    desc: "Finds the situations your scorecard never planned for, with transcript evidence.",
    icon: GitBranch,
    color: "#1a2a3a",
  },
];

// ── Dashboard panels per product ─────────────────────────────────────────────

function VoicePanel() {
  const lines = [
    { role: "Agent", text: "Namaste, kya main Rahul se baat kar sakta hoon?", time: "0:04" },
    { role: "Customer", text: "Haan, main hi hoon. Kaun bol raha hai?", time: "0:07" },
    { role: "Agent", text: "Main Aditya bol raha hoon, TrustFin se. Aapke loan ke baare mein ek important update hai.", time: "0:12" },
    { role: "Customer", text: "Haan, kya update hai? Main busy hoon.", time: "0:18" },
    { role: "Agent", text: "Samajh sakta hoon. Sirf 2 minute. Aapki EMI November mein due hai aur early settlement pe 12% waiver mil sakta hai.", time: "0:26" },
    { role: "Customer", text: "Interesting... kitna principal bacha hai?", time: "0:32" },
  ];
  const [playing, setPlaying] = useState(false);
  return (
    <div className="h-full flex flex-col gap-0 bg-[#0d0c0b] rounded-2xl overflow-hidden border border-[#2a2018]">
      <div className="flex items-center justify-between px-4 py-3 bg-[#161412] border-b border-[#2a2018]">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse" />
          <span className="font-mono text-[11px] text-[#6b5a48]">LIVE CALL — 0:38</span>
        </div>
        <span className="font-mono text-[10px] text-[#4a3e32] bg-[#1e1a16] px-2 py-0.5 rounded-full">COLLECTIONS</span>
      </div>
      <div className="flex-1 overflow-y-auto p-4 space-y-3 text-[12px]">
        {lines.map((l, i) => (
          <div key={i} className="flex gap-2">
            <span className={`font-bold shrink-0 ${l.role === "Agent" ? "text-[#f0c060]" : "text-[#60a5fa]"}`}>{l.role}:</span>
            <span className="text-[#c4b49a]">{l.text}</span>
            <span className="text-[#3a3028] shrink-0 ml-auto">{l.time}</span>
          </div>
        ))}
        <div className="flex gap-2 opacity-60">
          <span className="font-bold text-[#f0c060]">Agent:</span>
          <span className="text-[#c4b49a] italic">typing...</span>
        </div>
      </div>
      <div className="px-4 py-3 border-t border-[#2a2018] bg-[#111009] flex items-center justify-between">
        <button onClick={() => setPlaying(!playing)} className="flex items-center gap-2 text-[11px] text-[#6b5a48] hover:text-[#c4b49a] transition-colors">
          {playing ? <Pause size={14} /> : <Play size={14} />}
          {playing ? "Pause playback" : "Play demo call"}
        </button>
        <div className="flex gap-2">
          <span className="bg-[#22c55e]/20 text-[#22c55e] text-[10px] px-2 py-0.5 rounded-full font-bold">Empathy ✓</span>
          <span className="bg-[#f0c060]/20 text-[#f0c060] text-[10px] px-2 py-0.5 rounded-full font-bold">Objection handled</span>
        </div>
      </div>
    </div>
  );
}

function STTPanel() {
  const words = [
    { w: "Mera", c: 98 }, { w: "ek", c: 97 }, { w: "loan", c: 99 }, { w: "chal", c: 95 },
    { w: "raha", c: 94 }, { w: "hai,", c: 96 }, { w: "aur", c: 98 }, { w: "main", c: 97 },
    { w: "EMI", c: 99 }, { w: "bharna", c: 91 }, { w: "chahta", c: 92 }, { w: "hoon", c: 98 },
    { w: "but", c: 99 }, { w: "is", c: 98 }, { w: "mahine", c: 88 }, { w: "thodi", c: 85 },
    { w: "dikkat", c: 87 }, { w: "aa", c: 96 }, { w: "gayi.", c: 97 },
  ];
  return (
    <div className="h-full flex flex-col bg-[#0d0c0b] rounded-2xl overflow-hidden border border-[#2a2018]">
      <div className="px-4 py-3 bg-[#161412] border-b border-[#2a2018] flex items-center justify-between">
        <span className="font-mono text-[11px] text-[#6b5a48]">REAL-TIME TRANSCRIPTION</span>
        <span className="font-mono text-[10px] text-[#22c55e]">94.2% WER</span>
      </div>
      <div className="p-4 border-b border-[#2a2018]">
        <div className="text-[10px] text-[#4a3e32] mb-3 uppercase font-bold tracking-wider">Speaker 1 — Customer</div>
        <div className="flex flex-wrap gap-1.5">
          {words.map((w, i) => (
            <span key={i} className="inline-flex flex-col items-center">
              <span className="text-[13px] text-[#d4c4a8]">{w.w}</span>
              <span className="text-[8px] font-mono" style={{ color: w.c >= 95 ? "#4ade80" : w.c >= 88 ? "#f0c060" : "#f87171" }}>{w.c}%</span>
            </span>
          ))}
        </div>
      </div>
      <div className="p-4 grid grid-cols-3 gap-3">
        {[
          { label: "Language", value: "Hinglish" },
          { label: "Speakers", value: "2 detected" },
          { label: "Noise level", value: "Low" },
        ].map(s => (
          <div key={s.label} className="bg-[#161412] rounded-xl p-3 text-center">
            <div className="text-[9px] text-[#4a3e32] uppercase tracking-wider mb-1">{s.label}</div>
            <div className="text-[13px] font-bold text-[#d4c4a8]">{s.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function TTSPanel() {
  const bars = [3, 6, 12, 8, 14, 10, 16, 11, 7, 13, 9, 15, 6, 11, 8, 14, 10, 5, 12, 9, 7, 13, 11, 16, 8, 4, 10, 14, 6, 9];
  return (
    <div className="h-full flex flex-col bg-[#0d0c0b] rounded-2xl overflow-hidden border border-[#2a2018]">
      <div className="px-4 py-3 bg-[#161412] border-b border-[#2a2018] flex items-center justify-between">
        <span className="font-mono text-[11px] text-[#6b5a48]">TEXT-TO-SPEECH STUDIO</span>
        <span className="font-mono text-[10px] text-[#60a5fa]">~80ms latency</span>
      </div>
      <div className="p-4 border-b border-[#2a2018]">
        <div className="text-[10px] text-[#4a3e32] mb-2 uppercase font-bold tracking-wider">Voice</div>
        <div className="flex gap-2">
          {["Aditya — M", "Priya — F", "Custom clone"].map((v, i) => (
            <button key={v} className={`text-[11px] px-3 py-1.5 rounded-lg font-bold transition-colors ${i === 0 ? "bg-[#bd2525] text-white" : "bg-[#1e1a16] text-[#6b5a48] hover:text-[#d4c4a8]"}`}>{v}</button>
          ))}
        </div>
      </div>
      <div className="p-4 border-b border-[#2a2018]">
        <div className="text-[10px] text-[#4a3e32] mb-3 uppercase font-bold tracking-wider">Waveform Preview</div>
        <div className="flex items-center gap-px h-12">
          {bars.map((h, i) => (
            <div key={i} className="flex-1 rounded-sm bg-[#bd2525]/60" style={{ height: `${(h / 16) * 100}%` }} />
          ))}
        </div>
      </div>
      <div className="p-4">
        <div className="text-[11px] text-[#c4b49a] italic leading-relaxed">
          &ldquo;Namaste, main Priya bol rahi hoon, Axis Bank se. Aapki application process ho rahi hai...&rdquo;
        </div>
      </div>
    </div>
  );
}

function QAPanel() {
  const criteria = [
    { label: "Opening greeting", score: 9, pass: true },
    { label: "Product pitch accuracy", score: 8, pass: true },
    { label: "Objection handling", score: 7, pass: true },
    { label: "Compliance disclosure", score: 10, pass: true },
    { label: "Empathy demonstrated", score: 6, pass: true },
    { label: "Inappropriate language", score: 0, pass: false },
  ];
  const bars = [72, 85, 88, 91, 87, 93, 90, 95, 88, 92, 89, 94];
  return (
    <div className="h-full flex flex-col bg-[#0d0c0b] rounded-2xl overflow-hidden border border-[#2a2018]">
      <div className="px-4 py-3 bg-[#161412] border-b border-[#2a2018] flex items-center justify-between">
        <span className="font-mono text-[11px] text-[#6b5a48]">QA SCORECARD — LIVE</span>
        <span className="font-mono text-[11px] text-[#4ade80] font-bold">91.4 / 100</span>
      </div>
      <div className="flex-1 p-4 space-y-2">
        {criteria.map(c => (
          <div key={c.label} className="flex items-center gap-3">
            {c.pass ? <CheckCircle2 size={13} className="text-[#4ade80] shrink-0" /> : <XCircle size={13} className="text-[#f87171] shrink-0" />}
            <span className="text-[11px] text-[#c4b49a] flex-1">{c.label}</span>
            <div className="w-16 bg-[#2a2018] rounded-full h-1.5">
              <div className="h-1.5 rounded-full" style={{ width: `${(c.score / 10) * 100}%`, background: c.pass ? "#4ade80" : "#f87171" }} />
            </div>
            <span className="font-mono text-[10px] text-[#6b5a48] w-4">{c.score}</span>
          </div>
        ))}
      </div>
      <div className="px-4 py-3 border-t border-[#2a2018]">
        <div className="text-[9px] text-[#4a3e32] uppercase tracking-wider mb-2">Score by hour</div>
        <div className="flex items-end gap-0.5 h-8">
          {bars.map((v, i) => (
            <div key={i} className="flex-1 rounded-t-sm" style={{ height: `${v}%`, background: v > 90 ? "#4ade80" : "#3a3028" }} />
          ))}
        </div>
      </div>
    </div>
  );
}

function InsightsPanel() {
  return (
    <div className="h-full flex flex-col bg-[#0d0c0b] rounded-2xl overflow-hidden border border-[#2a2018]">
      <div className="px-4 py-3 bg-[#161412] border-b border-[#2a2018]">
        <span className="font-mono text-[11px] text-[#6b5a48]">CONSUMER INSIGHTS — LIVE</span>
      </div>
      <div className="grid grid-cols-3 gap-px bg-[#2a2018] border-b border-[#2a2018]">
        {[
          { label: "Top driver", value: "Hair concern", pct: "41%", c: "#4ade80" },
          { label: "Top objection", value: "Price", pct: "28%", c: "#f87171" },
          { label: "Rising topic", value: "Natural ingr.", pct: "+19%", c: "#f0c060" },
        ].map(c => (
          <div key={c.label} className="bg-[#141210] px-3 py-3">
            <div className="text-[9px] text-[#6b5a48] mb-1">{c.label}</div>
            <div className="text-[12px] font-bold text-white">{c.value}</div>
            <div className="text-lg font-bold" style={{ color: c.c }}>{c.pct}</div>
          </div>
        ))}
      </div>
      <div className="p-4 space-y-2">
        <div className="text-[10px] text-[#4a3e32] uppercase tracking-wider font-bold mb-2">Alert feed</div>
        {[
          { icon: "🔴", text: "Spike in returns-related calls (+34%) over past 2h", time: "2m" },
          { icon: "🟡", text: `"Competitor" mentions up 12% — tracking ZinCplex`, time: "18m" },
          { icon: "🟢", text: "Post-purchase sentiment up after script rollout", time: "1h" },
        ].map((a, i) => (
          <div key={i} className="flex items-start gap-2 py-1.5 border-b border-[#2a2018]">
            <span className="text-sm shrink-0">{a.icon}</span>
            <p className="flex-1 text-[11px] text-[#b0a090]">{a.text}</p>
            <span className="text-[10px] text-[#3a3028] shrink-0">{a.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function EdgePanel() {
  const cases = [
    { tag: "Unhandled", title: "Customer references a previous call agent", freq: "47 calls", severity: "high" },
    { tag: "Unhandled", title: "Call drops and customer calls back mid-script", freq: "31 calls", severity: "high" },
    { tag: "Partial", title: "Customer asks for a specific product variant not in flow", freq: "112 calls", severity: "medium" },
    { tag: "Partial", title: "Third-party verification required mid-call", freq: "28 calls", severity: "medium" },
  ];
  return (
    <div className="h-full flex flex-col bg-[#0d0c0b] rounded-2xl overflow-hidden border border-[#2a2018]">
      <div className="px-4 py-3 bg-[#161412] border-b border-[#2a2018] flex items-center justify-between">
        <span className="font-mono text-[11px] text-[#6b5a48]">EDGE CASE DISCOVERY</span>
        <span className="font-mono text-[10px] text-[#f0c060]">4 new this week</span>
      </div>
      <div className="flex-1 p-4 space-y-3 overflow-y-auto">
        {cases.map((c, i) => (
          <div key={i} className="bg-[#161412] rounded-xl p-3 border border-[#2a2018]">
            <div className="flex items-center gap-2 mb-1.5">
              <AlertTriangle size={11} className={c.severity === "high" ? "text-[#f87171]" : "text-[#f0c060]"} />
              <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded-full ${c.severity === "high" ? "bg-[#f87171]/20 text-[#f87171]" : "bg-[#f0c060]/20 text-[#f0c060]"}`}>{c.tag}</span>
              <span className="text-[9px] text-[#4a3e32] ml-auto">{c.freq}</span>
            </div>
            <p className="text-[12px] text-[#c4b49a]">{c.title}</p>
          </div>
        ))}
      </div>
    </div>
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

export function InteractiveDashboard() {
  const [active, setActive] = useState("voice");
  const activeProduct = products.find(p => p.id === active)!;

  return (
    <section id="products" className="py-20 md:py-32 bg-white border-t border-slate-line">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold text-ink mb-4">
            Every part of the call, covered
          </h2>
          <p className="text-base md:text-lg text-ink-soft max-w-xl mx-auto">
            Six integrated products that work together or stand alone — built on our own speech models.
          </p>
        </motion.div>

        {/* Mobile: product pills */}
        <div className="flex gap-2 overflow-x-auto no-scrollbar pb-3 mb-6 md:hidden">
          {products.map(p => (
            <button
              key={p.id}
              onClick={() => setActive(p.id)}
              className={`shrink-0 px-4 py-2 rounded-full text-xs font-bold border transition-all ${active === p.id ? "bg-ink text-white border-ink" : "bg-white border-slate-line text-ink-soft"}`}
            >
              {p.num} {p.name}
            </button>
          ))}
        </div>

        {/* Desktop: side-by-side */}
        <div className="grid grid-cols-1 md:grid-cols-[340px_1fr] gap-6 lg:gap-10 items-start">
          {/* Left: product list */}
          <div className="hidden md:flex flex-col gap-1">
            {products.map(p => {
              const Icon = p.icon;
              const isActive = active === p.id;
              return (
                <button
                  key={p.id}
                  onClick={() => setActive(p.id)}
                  className={`group text-left px-5 py-4 rounded-2xl border transition-all duration-200 ${isActive ? "bg-ink border-ink shadow-lg" : "bg-transparent border-transparent hover:bg-background hover:border-slate-line"}`}
                >
                  <div className="flex items-center gap-3 mb-1">
                    <span className={`font-mono text-[10px] font-bold ${isActive ? "text-white/40" : "text-ink-faint"}`}>{p.num}</span>
                    <div className={`w-7 h-7 rounded-lg flex items-center justify-center transition-colors ${isActive ? "bg-white/10" : "bg-red-light"}`}>
                      <Icon size={15} className={isActive ? "text-white" : "text-red"} />
                    </div>
                    <span className={`font-display font-bold text-sm ${isActive ? "text-white" : "text-ink"}`}>{p.name}</span>
                  </div>
                  <p className={`text-xs leading-relaxed pl-[calc(10px+12px+12px)] ${isActive ? "text-white/50" : "text-ink-faint"}`}>{p.desc}</p>
                </button>
              );
            })}
          </div>

          {/* Right: interactive dashboard */}
          <div className="relative">
            <div className="sticky top-28">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="h-[420px] md:h-[480px]"
                >
                  {panels[active]}
                </motion.div>
              </AnimatePresence>

              {/* Mobile panel label */}
              <div className="mt-4 flex items-center gap-2 md:hidden">
                <div className="w-2 h-2 rounded-full bg-red" />
                <span className="text-xs text-ink-soft">{activeProduct.desc}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
