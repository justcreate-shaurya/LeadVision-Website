"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone, MicVocal, Volume2, BarChart3, TrendingUp, GitBranch,
  CheckCircle2, XCircle, AlertTriangle, Play, Pause, Mic,
  Signal, Wifi, Clock, ChevronRight, Zap, Globe
} from "lucide-react";

const products = [
  {
    id: "voice",
    num: "01",
    name: "Voice AI Agent",
    tagline: "45-min conversations, zero drop",
    icon: Phone,
    accent: "#bd2525",
  },
  {
    id: "stt",
    num: "02",
    name: "Speech-to-Text",
    tagline: "94% accuracy on real call audio",
    icon: MicVocal,
    accent: "#3b82f6",
  },
  {
    id: "tts",
    num: "03",
    name: "Text-to-Speech",
    tagline: "8 in 10 thought it was human",
    icon: Volume2,
    accent: "#f59e0b",
  },
  {
    id: "qa",
    num: "04",
    name: "QA & Analytics",
    tagline: "100% of calls scored, live",
    icon: BarChart3,
    accent: "#10b981",
  },
  {
    id: "insights",
    num: "05",
    name: "Consumer Insights",
    tagline: "Purchase drivers from every call",
    icon: TrendingUp,
    accent: "#8b5cf6",
  },
  {
    id: "edge",
    num: "06",
    name: "Edge Case Discovery",
    tagline: "Finds what your scorecard missed",
    icon: GitBranch,
    accent: "#06b6d4",
  },
];

// ─── SHARED DARK PANEL WRAPPER ────────────────────────────────────────────────
function Panel({ children, title, badge, accentColor = "#bd2525" }: {
  children: React.ReactNode;
  title: string;
  badge?: string;
  accentColor?: string;
}) {
  return (
    <div className="h-full flex flex-col bg-[#0d0c0b] rounded-2xl overflow-hidden border border-[#2a2018] shadow-[0_32px_80px_rgba(0,0,0,0.4)]">
      {/* Chrome bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#141210] border-b border-[#241e17]">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
          </div>
          <span className="font-mono text-[10px] text-[#5a4e42] ml-2">{title}</span>
        </div>
        {badge && (
          <span className="font-mono text-[9px] font-bold px-2 py-0.5 rounded-full" style={{ color: accentColor, background: `${accentColor}18`, border: `1px solid ${accentColor}30` }}>
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
    <div className="bg-[#141210] border border-[#241e17] rounded-xl p-3">
      <div className="text-[9px] text-[#5a4e42] uppercase tracking-wider mb-1">{label}</div>
      <div className="text-base font-bold font-display" style={{ color }}>{value}</div>
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
  const sentimentColor: Record<string, string> = {
    neutral: "#6b7280", friendly: "#10b981", positive: "#22c55e", curious: "#f0c060"
  };
  return (
    <Panel title="Leadvision — Voice AI Agent" badge="● LIVE  0:52" accentColor="#bd2525">
      {/* Stats row */}
      <div className="grid grid-cols-4 gap-px bg-[#1a1612] border-b border-[#241e17]">
        {[
          { l: "Duration", v: "0:52", c: "#4ade80" },
          { l: "Latency", v: "340ms", c: "#60a5fa" },
          { l: "Context", v: "100%", c: "#f0c060" },
          { l: "QA flag", v: "0", c: "#4ade80" },
        ].map(s => (
          <div key={s.l} className="bg-[#0f0d0b] px-2 py-2 text-center">
            <div className="text-[8px] text-[#4a3e32] uppercase tracking-wide">{s.l}</div>
            <div className="text-sm font-bold font-mono mt-0.5" style={{ color: s.c }}>{s.v}</div>
          </div>
        ))}
      </div>
      {/* Transcript */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {turns.map((t, i) => (
          <div key={i} className={`flex gap-3 items-start ${t.role === "A" ? "flex-row-reverse" : ""}`}>
            <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[9px] font-bold shrink-0 mt-0.5 ${t.role === "A" ? "bg-[#bd2525]/30 text-[#bd2525]" : "bg-[#1e3a5f]/60 text-[#60a5fa]"}`}>
              {t.role}
            </div>
            <div className={`max-w-[78%] rounded-2xl px-3 py-2 ${t.role === "A" ? "bg-[#1e1410] rounded-tr-sm" : "bg-[#161820] rounded-tl-sm"}`}>
              <p className="text-[12px] leading-relaxed" style={{ color: t.role === "A" ? "#d4b896" : "#a8b8d0" }}>{t.text}</p>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-[9px] text-[#3a3028]">{t.time}</span>
                <span className="text-[9px] font-medium" style={{ color: sentimentColor[t.sentiment] }}>● {t.sentiment}</span>
              </div>
            </div>
          </div>
        ))}
        <div className="flex gap-3 items-start flex-row-reverse">
          <div className="w-6 h-6 rounded-full flex items-center justify-center text-[9px] font-bold shrink-0 bg-[#bd2525]/30 text-[#bd2525]">A</div>
          <div className="bg-[#1e1410] rounded-2xl rounded-tr-sm px-3 py-2">
            <div className="flex gap-1 items-center">
              <div className="w-1.5 h-1.5 rounded-full bg-[#bd2525] animate-bounce" style={{ animationDelay: "0ms" }} />
              <div className="w-1.5 h-1.5 rounded-full bg-[#bd2525] animate-bounce" style={{ animationDelay: "150ms" }} />
              <div className="w-1.5 h-1.5 rounded-full bg-[#bd2525] animate-bounce" style={{ animationDelay: "300ms" }} />
            </div>
          </div>
        </div>
      </div>
      {/* Bottom bar */}
      <div className="px-4 py-2.5 border-t border-[#241e17] bg-[#0f0d0b] flex items-center gap-3">
        <button onClick={() => setPlaying(!playing)} className="flex items-center gap-1.5 text-[10px] text-[#5a4e42] hover:text-white transition-colors">
          {playing ? <Pause size={13} /> : <Play size={13} />}
          {playing ? "Pause demo" : "Play demo call"}
        </button>
        <div className="ml-auto flex gap-2">
          <span className="text-[9px] px-2 py-0.5 rounded-full bg-[#22c55e]/15 text-[#22c55e] font-bold">Empathy ✓</span>
          <span className="text-[9px] px-2 py-0.5 rounded-full bg-[#f0c060]/15 text-[#f0c060] font-bold">Objection handled</span>
          <span className="text-[9px] px-2 py-0.5 rounded-full bg-[#bd2525]/15 text-[#bd2525] font-bold">CTA delivered</span>
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
  const getColor = (c: number) => c >= 95 ? "#4ade80" : c >= 87 ? "#f0c060" : "#f87171";
  return (
    <Panel title="Leadvision — Speech-to-Text" badge="94.2% WER" accentColor="#3b82f6">
      <div className="grid grid-cols-3 gap-px bg-[#1a1612] border-b border-[#241e17]">
        <Chip label="Language" value="Hinglish" color="#60a5fa" />
        <Chip label="Speakers" value="2 detected" color="#4ade80" />
        <Chip label="Noise" value="Low" color="#f0c060" />
      </div>
      <div className="p-4 border-b border-[#241e17]">
        <div className="text-[9px] text-[#4a3e32] uppercase font-bold tracking-widest mb-3">Speaker 1 — Customer (word confidence)</div>
        <div className="flex flex-wrap gap-x-2 gap-y-3">
          {words.map((w, i) => (
            <span key={i} className="flex flex-col items-center gap-0.5">
              <span className="text-[13px] text-[#d4c4a8]">{w.w}</span>
              <div className="w-full h-0.5 rounded-full" style={{ background: getColor(w.c) }} />
              <span className="text-[8px] font-mono" style={{ color: getColor(w.c) }}>{w.c}%</span>
            </span>
          ))}
        </div>
      </div>
      <div className="p-4 flex-1">
        <div className="text-[9px] text-[#4a3e32] uppercase font-bold tracking-widest mb-3">Speaker 2 — Agent (live)</div>
        <div className="flex gap-1 items-end h-8 mb-3">
          {Array.from({ length: 32 }).map((_, i) => (
            <div key={i} className="flex-1 rounded-full bg-[#3b82f6]/60 origin-bottom" style={{ height: `${(Math.sin(i * 0.8) + 1) * 50 + 10}%`, animationName: "waveBar", animationDuration: `${0.6 + (i % 4) * 0.15}s`, animationTimingFunction: "ease-in-out", animationIterationCount: "infinite", animationDelay: `${i * 30}ms` }} />
          ))}
        </div>
        <p className="text-[12px] text-[#c4b49a] italic">
          &ldquo;Aapki November EMI due hai. Early settlement pe 12% waiver milega...&rdquo;
        </p>
      </div>
    </Panel>
  );
}

function TTSPanel() {
  const [voice, setVoice] = useState(0);
  const voices = ["Aditya — M", "Priya — F", "Karan — M", "Custom clone"];
  const bars = [3,7,12,8,15,10,17,11,6,14,9,16,7,12,8,14,10,5,13,9,7,14,11,17,8,4,11,15,6,10,8,13];
  return (
    <Panel title="Leadvision — Text-to-Speech" badge="~80ms" accentColor="#f59e0b">
      <div className="grid grid-cols-4 gap-px bg-[#1a1612] border-b border-[#241e17]">
        <Chip label="Latency" value="78ms" color="#4ade80" />
        <Chip label="Quality" value="24kHz" color="#f0c060" />
        <Chip label="Model" value="v3.1" color="#60a5fa" />
        <Chip label="Cloning" value="Yes" color="#a78bfa" />
      </div>
      <div className="p-4 border-b border-[#241e17]">
        <div className="text-[9px] text-[#4a3e32] uppercase font-bold tracking-widest mb-3">Voice selection</div>
        <div className="flex gap-2 flex-wrap">
          {voices.map((v, i) => (
            <button key={v} onClick={() => setVoice(i)} className={`text-[11px] px-3 py-1.5 rounded-lg font-bold transition-all ${voice === i ? "text-white shadow-md" : "bg-[#1a1612] text-[#5a4e42] hover:text-[#d4c4a8]"}`} style={voice === i ? { background: `linear-gradient(135deg, #bd2525, #7c1919)` } : {}}>
              {v}
            </button>
          ))}
        </div>
      </div>
      <div className="p-4 border-b border-[#241e17]">
        <div className="text-[9px] text-[#4a3e32] uppercase font-bold tracking-widest mb-3">Waveform</div>
        <div className="flex items-center gap-px h-14">
          {bars.map((h, i) => (
            <div key={i} className="flex-1 rounded-sm origin-bottom" style={{ height: `${(h / 17) * 100}%`, background: `linear-gradient(to top, #bd2525, #f0c060)` }} />
          ))}
        </div>
      </div>
      <div className="p-4 flex-1">
        <div className="text-[9px] text-[#4a3e32] uppercase font-bold tracking-widest mb-3">Sample output</div>
        <div className="bg-[#141210] rounded-xl p-4 border border-[#241e17]">
          <p className="text-[12px] text-[#c4b49a] italic leading-relaxed">
            &ldquo;Namaste, main Priya bol rahi hoon, Axis Bank se. Aapki application successfully process ho chuki hai. Kya main aapko next steps bata sakti hoon?&rdquo;
          </p>
          <div className="flex items-center gap-2 mt-3">
            <div className="flex-1 h-1 bg-[#241e17] rounded-full">
              <div className="w-2/5 h-full bg-gradient-to-r from-red to-yellow rounded-full" />
            </div>
            <span className="font-mono text-[10px] text-[#5a4e42]">1.2 / 3.1s</span>
          </div>
        </div>
      </div>
    </Panel>
  );
}

function QAPanel() {
  const criteria = [
    { label: "Opening greeting", score: 9, pass: true, weight: "5%" },
    { label: "Product pitch accuracy", score: 8, pass: true, weight: "20%" },
    { label: "Objection handling", score: 7, pass: true, weight: "20%" },
    { label: "Compliance disclosure", score: 10, pass: true, weight: "25%" },
    { label: "Empathy demonstrated", score: 7, pass: true, weight: "20%" },
    { label: "Inappropriate language", score: 10, pass: true, weight: "10%" },
  ];
  const bars = [72, 85, 88, 91, 87, 93, 90, 95, 88, 92, 89, 94];
  return (
    <Panel title="Leadvision — QA & Analytics" badge="LIVE SCORING" accentColor="#10b981">
      {/* Live score */}
      <div className="px-4 py-3 bg-[#0f0d0b] border-b border-[#241e17] flex items-center gap-4">
        <div>
          <div className="text-[9px] text-[#4a3e32] uppercase tracking-wider">Overall score</div>
          <div className="text-3xl font-bold font-display" style={{ background: "linear-gradient(90deg, #4ade80, #10b981)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>91.4</div>
        </div>
        <div className="flex-1 h-2 bg-[#1a1612] rounded-full overflow-hidden">
          <div className="h-full rounded-full" style={{ width: "91.4%", background: "linear-gradient(90deg, #10b981, #4ade80)" }} />
        </div>
        <div className="text-[10px] text-[#4ade80] font-bold">↑ 3.2 pts</div>
      </div>
      {/* Criteria */}
      <div className="flex-1 p-4 space-y-2.5 overflow-y-auto">
        {criteria.map(c => (
          <div key={c.label} className="flex items-center gap-3">
            {c.pass ? <CheckCircle2 size={14} className="text-[#4ade80] shrink-0" /> : <XCircle size={14} className="text-[#f87171] shrink-0" />}
            <span className="text-[11px] text-[#c4b49a] flex-1">{c.label}</span>
            <span className="text-[9px] text-[#3a3028] w-7">{c.weight}</span>
            <div className="w-20 bg-[#1a1612] rounded-full h-1.5">
              <div className="h-1.5 rounded-full transition-all" style={{ width: `${(c.score / 10) * 100}%`, background: c.pass ? "linear-gradient(90deg, #10b981, #4ade80)" : "linear-gradient(90deg, #f87171, #ef4444)" }} />
            </div>
            <span className="font-mono text-[10px] text-[#5a4e42] w-5 text-right">{c.score}</span>
          </div>
        ))}
      </div>
      {/* Chart */}
      <div className="px-4 pb-3 border-t border-[#241e17] pt-3">
        <div className="text-[9px] text-[#3a3028] uppercase tracking-wider mb-2">Score by hour (today)</div>
        <div className="flex items-end gap-1 h-10">
          {bars.map((v, i) => (
            <div key={i} className="flex-1 rounded-t-sm" style={{ height: `${v}%`, background: v > 90 ? "linear-gradient(to top, #10b981, #4ade80)" : "#2a2018" }} />
          ))}
        </div>
      </div>
    </Panel>
  );
}

function InsightsPanel() {
  return (
    <Panel title="Leadvision — Consumer Insights" badge="LIVE" accentColor="#8b5cf6">
      <div className="grid grid-cols-3 gap-px bg-[#1a1612] border-b border-[#241e17]">
        <Chip label="Top driver" value="Hair concern 41%" color="#4ade80" />
        <Chip label="Top objection" value="Price 28%" color="#f87171" />
        <Chip label="Rising topic" value="Natural +19%" color="#f0c060" />
      </div>
      <div className="p-4 border-b border-[#241e17]">
        <div className="text-[9px] text-[#4a3e32] uppercase font-bold tracking-widest mb-3">Topic frequency (this week)</div>
        {[
          { topic: "Hairfall concern", pct: 41, c: "#4ade80" },
          { topic: "Price / affordability", pct: 28, c: "#f87171" },
          { topic: "Natural ingredients", pct: 19, c: "#f0c060" },
          { topic: "Competitor comparison", pct: 12, c: "#a78bfa" },
        ].map(t => (
          <div key={t.topic} className="flex items-center gap-3 mb-2">
            <span className="text-[11px] text-[#c4b49a] w-36 shrink-0">{t.topic}</span>
            <div className="flex-1 h-1.5 bg-[#1a1612] rounded-full">
              <div className="h-1.5 rounded-full" style={{ width: `${t.pct}%`, background: t.c }} />
            </div>
            <span className="font-mono text-[10px] w-8 text-right" style={{ color: t.c }}>{t.pct}%</span>
          </div>
        ))}
      </div>
      <div className="p-4 flex-1 overflow-y-auto">
        <div className="text-[9px] text-[#4a3e32] uppercase font-bold tracking-widest mb-3">Alert feed</div>
        {[
          { icon: "🔴", text: "Spike in returns-related calls (+34%) over past 2h", time: "2m" },
          { icon: "🟡", text: `"Competitor" mentions up 12% today`, time: "18m" },
          { icon: "🟢", text: "Post-purchase sentiment improved after new script", time: "1h" },
        ].map((a, i) => (
          <div key={i} className="flex items-start gap-2.5 py-2 border-b border-[#1a1612]">
            <span className="text-sm shrink-0">{a.icon}</span>
            <p className="flex-1 text-[11px] text-[#c4b49a]">{a.text}</p>
            <span className="text-[10px] text-[#3a3028] shrink-0">{a.time}</span>
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
    { tag: "Partial", title: "Customer asks for a specific product variant not in flow", freq: "112 calls", severity: "medium", trend: "stable" },
    { tag: "Partial", title: "Third-party verification required mid-call", freq: "28 calls", severity: "medium", trend: "-3 this week" },
  ];
  const getSeverityStyle = (s: string) => s === "high"
    ? { bg: "rgba(248,113,113,0.12)", text: "#f87171", border: "rgba(248,113,113,0.25)" }
    : { bg: "rgba(240,192,96,0.12)", text: "#f0c060", border: "rgba(240,192,96,0.25)" };

  return (
    <Panel title="Leadvision — Edge Case Discovery" badge="4 new this week" accentColor="#06b6d4">
      <div className="grid grid-cols-3 gap-px bg-[#1a1612] border-b border-[#241e17]">
        <Chip label="Cases found" value="421" color="#06b6d4" />
        <Chip label="Unhandled" value="78" color="#f87171" />
        <Chip label="Partial" value="140" color="#f0c060" />
      </div>
      <div className="flex-1 p-4 space-y-3 overflow-y-auto">
        {cases.map((c, i) => {
          const style = getSeverityStyle(c.severity);
          return (
            <div key={i} className="rounded-xl p-3.5 border" style={{ background: style.bg, borderColor: style.border }}>
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle size={12} style={{ color: style.text }} />
                <span className="text-[9px] font-bold rounded-full px-2 py-0.5" style={{ color: style.text, background: `${style.text}18` }}>{c.tag}</span>
                <span className="text-[9px] text-[#3a3028] ml-auto">{c.trend}</span>
              </div>
              <p className="text-[12px] text-[#d4c4a8] leading-snug">{c.title}</p>
              <div className="flex items-center justify-between mt-2">
                <span className="text-[10px] text-[#5a4e42]">{c.freq}</span>
                <button className="text-[9px] text-[#5a4e42] hover:text-white transition-colors flex items-center gap-1">
                  View transcripts <ChevronRight size={10} />
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
  const activeProduct = products.find(p => p.id === active)!;

  return (
    <section id="products" className="py-20 md:py-32 border-t border-slate-line overflow-hidden" style={{ background: "linear-gradient(180deg, #ffffff 0%, #fafafa 50%, #f5f4f2 100%)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
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
            Six integrated products built on our own speech models — each one interactive below.
          </p>
        </motion.div>

        {/* Mobile product pills */}
        <div className="flex gap-2 overflow-x-auto no-scrollbar pb-4 mb-6 md:hidden">
          {products.map(p => {
            const Icon = p.icon;
            const isActive = active === p.id;
            return (
              <button
                key={p.id}
                onClick={() => setActive(p.id)}
                className="shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-bold border transition-all"
                style={isActive ? { background: p.accent, color: "#fff", borderColor: p.accent, boxShadow: `0 4px 16px ${p.accent}40` } : { background: "white", color: "#4a5568", borderColor: "#edf2f7" }}
              >
                <Icon size={13} />
                {p.name}
              </button>
            );
          })}
        </div>

        {/* Desktop layout */}
        <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] lg:grid-cols-[320px_1fr] gap-4 lg:gap-6 items-start">
          {/* Left: gradient sidebar */}
          <div className="hidden md:block rounded-2xl overflow-hidden border border-[#241e17] shadow-[0_24px_60px_rgba(0,0,0,0.25)]" style={{ background: "linear-gradient(160deg, #1a1410 0%, #0d0b09 60%, #0a0908 100%)" }}>
            <div className="px-4 pt-5 pb-3 border-b border-[#241e17]">
              <span className="font-mono text-[9px] text-[#3a3028] uppercase tracking-widest">Products</span>
            </div>
            <div className="p-2">
              {products.map(p => {
                const Icon = p.icon;
                const isActive = active === p.id;
                return (
                  <button
                    key={p.id}
                    onClick={() => setActive(p.id)}
                    className="w-full text-left px-3 py-3.5 rounded-xl transition-all relative group mb-1"
                    style={isActive ? {
                      background: `linear-gradient(90deg, ${p.accent}18 0%, transparent 100%)`,
                      borderLeft: `2px solid ${p.accent}`,
                    } : {}}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center transition-colors shrink-0" style={{ background: isActive ? `${p.accent}25` : "#1a1612" }}>
                        <Icon size={16} style={{ color: isActive ? p.accent : "#5a4e42" }} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-[9px]" style={{ color: isActive ? p.accent : "#3a3028" }}>{p.num}</span>
                          <span className="text-[13px] font-bold truncate" style={{ color: isActive ? "#ffffff" : "#8a7a6a" }}>{p.name}</span>
                        </div>
                        <p className="text-[10px] mt-0.5 truncate" style={{ color: isActive ? "#6a5a4a" : "#3a3028" }}>{p.tagline}</p>
                      </div>
                      {isActive && <ChevronRight size={14} style={{ color: p.accent }} className="shrink-0" />}
                    </div>
                  </button>
                );
              })}
            </div>
            <div className="p-4 border-t border-[#1a1612] mt-2">
              <div className="flex items-center gap-2 text-[10px] text-[#3a3028]">
                <div className="w-1.5 h-1.5 rounded-full bg-[#22c55e] animate-pulse" />
                All products active
              </div>
            </div>
          </div>

          {/* Right: dashboard panel */}
          <div className="relative">
            <div className="sticky top-28">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 16, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -16, scale: 0.98 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="h-[480px] md:h-[520px]"
                >
                  {panels[active]}
                </motion.div>
              </AnimatePresence>
              {/* Mobile hint */}
              <p className="text-xs text-ink-faint mt-3 md:hidden">{activeProduct.tagline}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
