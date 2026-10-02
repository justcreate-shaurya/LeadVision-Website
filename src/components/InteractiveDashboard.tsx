"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone, MicVocal, Volume2, BarChart3, TrendingUp, GitBranch,
  CheckCircle2, XCircle, AlertTriangle, Play, Pause, ChevronRight, Settings2, SlidersHorizontal, ArrowLeft
} from "lucide-react";

const products = [
  { id: "voice", num: "01", name: "Voice AI Agent", tagline: "45-min conversations, zero drop", icon: Phone, accent: "#bd2525" },
  { id: "stt", num: "02", name: "Speech-to-Text", tagline: "94% accuracy on real call audio", icon: MicVocal, accent: "#3b82f6" },
  { id: "tts", num: "03", name: "Text-to-Speech", tagline: "8 in 10 thought it was human", icon: Volume2, accent: "#f59e0b" },
  { id: "qa", num: "04", name: "QA & Analytics", tagline: "100% of calls scored, live", icon: BarChart3, accent: "#10b981" },
  { id: "insights", num: "05", name: "Consumer Insights", tagline: "Purchase drivers from every call", icon: TrendingUp, accent: "#8b5cf6" },
  { id: "edge", num: "06", name: "Edge Case Discovery", tagline: "Finds what your scorecard missed", icon: GitBranch, accent: "#06b6d4" },
];

// ─── DARK THEME PANEL ────────────────────────────────────────────────────────
function Panel({ children, title, badge, accentColor = "#bd2525" }: { children: React.ReactNode; title: string; badge?: string; accentColor?: string }) {
  return (
    <div className="h-full flex flex-col bg-[#0d0c0b] rounded-[24px] overflow-hidden border border-[#241e17] shadow-[0_32px_80px_rgba(0,0,0,0.4)] relative">
      {/* Chrome bar */}
      <div className="flex items-center justify-between px-5 py-4 bg-[#141210] border-b border-[#241e17] z-10 relative shrink-0">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
            <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
            <div className="w-3 h-3 rounded-full bg-[#28c840]" />
          </div>
          <span className="font-mono text-[11px] font-bold text-[#6a5a4a] ml-2">{title}</span>
        </div>
        {badge && (
          <span className="font-mono text-[10px] font-bold px-2.5 py-1 rounded-full" style={{ color: accentColor, background: `${accentColor}18`, border: `1px solid ${accentColor}30` }}>
            {badge}
          </span>
        )}
      </div>
      <div className="relative flex-1 flex flex-col min-h-0 z-10">
        {children}
      </div>
    </div>
  );
}

// ─── STAT CHIP ───────────────────────────────────────────────────────────────
function Chip({ label, value, color }: { label: string; value: string; color: string }) {
  return (
    <div className="bg-[#141210]/80 border border-[#241e17] rounded-2xl p-4 flex-1">
      <div className="text-[10px] font-bold text-[#5a4e42] uppercase tracking-wider mb-1.5">{label}</div>
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
    <Panel title="Leadvision — Voice AI Agent" badge="● LIVE  0:52" accentColor="#bd2525">
      <div className="flex gap-2 p-3 bg-[#1a1612] border-b border-[#241e17]">
        <Chip label="Duration" value="0:52" color="#4ade80" />
        <Chip label="Latency" value="340ms" color="#60a5fa" />
        <Chip label="Context" value="100%" color="#f0c060" />
      </div>
      <div className="flex-1 overflow-y-auto p-5 space-y-4">
        {turns.map((t, i) => (
          <div key={i} className={`flex gap-3 items-end ${t.role === "A" ? "flex-row-reverse" : ""}`}>
            <div className={`w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 ${t.role === "A" ? "bg-[#bd2525]/30 text-[#bd2525]" : "bg-[#1e3a5f]/60 text-[#60a5fa]"}`}>
              {t.role}
            </div>
            <div className={`max-w-[75%] rounded-3xl px-4 py-3 border ${t.role === "A" ? "bg-[#1e1410] border-[#bd2525]/20 rounded-br-sm" : "bg-[#161820] border-[#241e17] rounded-bl-sm"}`}>
              <p className="text-[13px] leading-relaxed" style={{ color: t.role === "A" ? "#d4b896" : "#a8b8d0" }}>{t.text}</p>
              <div className="flex items-center gap-2 mt-1.5 opacity-60">
                <span className="text-[10px] font-mono font-bold" style={{ color: t.role === "A" ? "#d4b896" : "#a8b8d0" }}>{t.time}</span>
              </div>
            </div>
          </div>
        ))}
        {playing && (
          <div className="flex gap-3 items-end flex-row-reverse">
            <div className="w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 bg-[#bd2525]/30 text-[#bd2525]">A</div>
            <div className="bg-[#1e1410] border border-[#bd2525]/20 rounded-3xl rounded-br-sm px-4 py-3">
              <div className="flex gap-1.5 items-center h-4">
                <div className="w-1.5 h-1.5 rounded-full bg-[#bd2525] animate-bounce" style={{ animationDelay: "0ms" }} />
                <div className="w-1.5 h-1.5 rounded-full bg-[#bd2525] animate-bounce" style={{ animationDelay: "150ms" }} />
                <div className="w-1.5 h-1.5 rounded-full bg-[#bd2525] animate-bounce" style={{ animationDelay: "300ms" }} />
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="px-5 py-4 border-t border-[#241e17] bg-[#0f0d0b] flex items-center gap-4">
        <button onClick={() => setPlaying(!playing)} className="flex items-center justify-center w-10 h-10 rounded-full bg-[#bd2525] hover:bg-[#a01c1c] text-white transition-all shadow-md">
          {playing ? <Pause size={16} className="fill-current" /> : <Play size={16} className="fill-current ml-1" />}
        </button>
        <div className="flex gap-2">
          <span className="text-[10px] font-bold px-3 py-1 rounded-full bg-[#22c55e]/15 text-[#22c55e] border border-[#22c55e]/30">Empathy ✓</span>
          <span className="text-[10px] font-bold px-3 py-1 rounded-full bg-[#f0c060]/15 text-[#f0c060] border border-[#f0c060]/30">Objection handled</span>
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
      <div className="flex gap-2 p-3 bg-[#1a1612] border-b border-[#241e17]">
        <Chip label="Language" value="Hinglish" color="#60a5fa" />
        <Chip label="Speakers" value="2 detected" color="#4ade80" />
        <Chip label="Noise" value="Low" color="#f0c060" />
      </div>
      <div className="p-6 flex-1">
        <div className="flex items-center justify-between mb-4">
          <div className="text-[10px] text-[#4a3e32] uppercase font-bold tracking-widest">Customer (word confidence)</div>
          <Settings2 size={14} className="text-[#5a4e42] cursor-pointer hover:text-white transition-colors" />
        </div>
        <div className="flex flex-wrap gap-x-2.5 gap-y-4">
          {words.map((w, i) => (
            <span key={i} className="flex flex-col items-center gap-1 group cursor-pointer">
              <span className="text-[15px] font-medium text-[#c4b49a] group-hover:text-white transition-colors">{w.w}</span>
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
  
  const baseBars = [3,7,12,8,15,10,17,11,6,14,9,16,7,12,8,14,10,5,13,9,7,14,11,17,8,4,11,15,6,10,8,13];
  const activeBars = baseBars.map((b, i) => Math.max(2, Math.min(18, b + (voice * 2) - (i % 3 === 0 ? voice : 0))));

  return (
    <Panel title="Leadvision — Text-to-Speech" badge="~80ms" accentColor="#f59e0b">
      <div className="p-5 border-b border-[#241e17] bg-[#1a1612]">
        <div className="text-[10px] text-[#4a3e32] uppercase font-bold tracking-widest mb-3">Voice selection</div>
        <div className="flex gap-2 p-1.5 bg-[#0d0b09] rounded-xl w-fit border border-[#241e17]">
          {voices.map((v, i) => (
            <button key={v} onClick={() => setVoice(i)} className={`text-[12px] px-5 py-2 rounded-lg font-bold transition-all ${voice === i ? "bg-[#bd2525] text-white shadow-md" : "bg-transparent text-[#5a4e42] hover:text-[#d4c4a8]"}`}>
              {v}
            </button>
          ))}
        </div>
      </div>
      <div className="p-5 border-b border-[#241e17]">
        <div className="flex items-center justify-between mb-4">
          <div className="text-[10px] text-[#4a3e32] uppercase font-bold tracking-widest">Generated Waveform</div>
          <SlidersHorizontal size={14} className="text-[#5a4e42] cursor-pointer hover:text-white transition-colors" />
        </div>
        <div className="flex items-center gap-1 h-20 px-2">
          {activeBars.map((h, i) => (
            <div key={i} className="flex-1 rounded-sm origin-center transition-all duration-300" style={{ height: `${(h / 18) * 100}%`, background: `linear-gradient(to top, #bd2525, #f0c060)` }} />
          ))}
        </div>
      </div>
      <div className="p-5 flex-1">
        <div className="text-[10px] text-[#4a3e32] uppercase font-bold tracking-widest mb-3">Sample output</div>
        <div className="bg-[#141210] rounded-2xl p-4 border border-[#241e17]">
          <p className="text-[14px] text-[#c4b49a] font-medium leading-relaxed italic">
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
    <Panel title="Leadvision — QA & Analytics" badge="LIVE SCORING" accentColor="#10b981">
      <div className="p-6 bg-[#0f0d0b] border-b border-[#241e17] flex items-center justify-between">
        <div>
          <div className="text-[10px] text-[#4a3e32] uppercase font-bold tracking-widest mb-1">Overall score</div>
          <div className="text-5xl font-display font-bold" style={{ background: "linear-gradient(90deg, #4ade80, #10b981)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>91<span className="text-2xl text-[#10b981]/50">.4</span></div>
        </div>
        <div className="w-24 h-24 rounded-full border-8 border-[#1a1612] flex items-center justify-center relative shadow-inner">
           <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 100 100">
             <circle cx="50" cy="50" r="46" fill="none" stroke="#10b981" strokeWidth="8" strokeDasharray="289" strokeDashoffset="28" strokeLinecap="round" />
           </svg>
           <span className="text-xs font-bold text-[#4ade80]">PASS</span>
        </div>
      </div>
      <div className="flex-1 p-5 space-y-3 overflow-y-auto">
        {criteria.map(c => (
          <div key={c.label} className="flex items-center gap-4 bg-[#141210] p-3 rounded-xl border border-[#241e17] hover:border-[#bd2525]/30 transition-colors cursor-default">
            {c.pass ? <CheckCircle2 size={16} className="text-[#4ade80] shrink-0" /> : <XCircle size={16} className="text-[#f87171] shrink-0" />}
            <span className="text-[13px] font-medium text-[#c4b49a] flex-1">{c.label}</span>
            <div className="w-24 bg-[#1a1612] rounded-full h-2">
              <div className="h-2 rounded-full transition-all" style={{ width: `${(c.score / 10) * 100}%`, background: c.pass ? "linear-gradient(90deg, #10b981, #4ade80)" : "linear-gradient(90deg, #f87171, #ef4444)" }} />
            </div>
            <span className="font-mono text-[11px] font-bold text-[#5a4e42] w-6 text-right">{c.score}</span>
          </div>
        ))}
      </div>
    </Panel>
  );
}

function InsightsPanel() {
  return (
    <Panel title="Leadvision — Consumer Insights" badge="LIVE" accentColor="#8b5cf6">
      <div className="flex gap-2 p-3 bg-[#1a1612] border-b border-[#241e17]">
        <Chip label="Top driver" value="Hair 41%" color="#4ade80" />
        <Chip label="Top objection" value="Price 28%" color="#f87171" />
        <Chip label="Rising topic" value="Natural +19%" color="#f0c060" />
      </div>
      <div className="p-5 flex-1">
        <div className="text-[10px] text-[#4a3e32] uppercase font-bold tracking-widest mb-4">Topic frequency (this week)</div>
        {[
          { topic: "Hairfall concern", pct: 41, c: "#4ade80" },
          { topic: "Price / affordability", pct: 28, c: "#f87171" },
          { topic: "Natural ingredients", pct: 19, c: "#f0c060" },
        ].map(t => (
          <div key={t.topic} className="flex items-center gap-4 mb-3">
            <span className="text-[12px] font-medium text-[#c4b49a] w-36 shrink-0">{t.topic}</span>
            <div className="flex-1 h-2.5 bg-[#1a1612] rounded-full overflow-hidden">
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
  const [viewingTranscript, setViewingTranscript] = useState<number | null>(null);

  const cases = [
    { 
      tag: "Auto-resolved", title: "Customer references previous human agent's promise", freq: "47 calls", severity: "success", trend: "100% resolved",
      intent: "Cross-channel Context", sentiment: "Frustrated → Happy", action: "Memory sync (CRM)", time: "Yesterday, 14:32 PM", log: 'Querying CRM: Contact="Rahul"... Match found.',
      transcript: [
        { role: "C", text: "Hello, this is my third time calling. I spoke to Rahul yesterday about my return, and he said it would be picked up today. Where is the guy?" },
        { role: "A", text: "Hi there! I can see your conversation with Rahul in our system. I am so sorry for the delay. The pickup agent was delayed by rain, but is currently 10 minutes away from your location." },
        { role: "C", text: "Oh wow. Okay, I didn't expect you to actually know that. Thank you, I will wait for him." }
      ]
    },
    { 
      tag: "Auto-resolved", title: "Customer interrupts pitch with complex multi-part query", freq: "31 calls", severity: "success", trend: "98% resolved",
      intent: "Compound Intent", sentiment: "Neutral → Impressed", action: "Intent Disambiguation", time: "Today, 09:15 AM", log: "Detected 3 parallel intents. Restructuring response.",
      transcript: [
        { role: "A", text: "Hi, I'm calling from TrustFin about your pre-approved personal loan—" },
        { role: "C", text: "Wait, hold on. Is the interest rate fixed, can I prepay it after 6 months without penalty, and do you need my physical PAN card?" },
        { role: "A", text: "Great questions! Let me answer them one by one. Yes, the interest rate is fixed at 11.5%. You can prepay with zero penalty after 6 months. And no, a digital copy of your PAN is perfectly fine." }
      ]
    },
    { 
      tag: "Needs review", title: "Customer uses highly obscure regional slang for 'credit'", freq: "12 calls", severity: "medium", trend: "requires training",
      intent: "Language Ambiguity", sentiment: "Confused → Escalated", action: "Human Handoff", time: "Yesterday, 18:45 PM", log: "Confidence < 60% for slang. Triggering smooth handoff.",
      transcript: [
        { role: "A", text: "Would you like to proceed with the application?" },
        { role: "C", text: "Nahi bhai, mereko batao ki khata udhaar mein kitna time milega?" },
        { role: "A", text: "I want to make sure I give you the most accurate information regarding that. Let me quickly connect you to our regional specialist who can assist you immediately." }
      ]
    },
  ];

  if (viewingTranscript !== null) {
    const c = cases[viewingTranscript];
    return (
      <Panel title="Conversation Insights" badge="OMNI-CHANNEL MEMORY" accentColor="#4ade80">
        <div className="p-4 border-b border-[#241e17] bg-[#1a1612]">
          <button onClick={() => setViewingTranscript(null)} className="text-[11px] text-[#8a7a6a] hover:text-white flex items-center gap-1.5 transition-colors mb-4">
            <ArrowLeft size={12} /> Back to discovery
          </button>
          
          {/* Insights Dashboard Header */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-2">
            <div className="bg-[#0a0908] border border-[#241e17] rounded-xl p-3">
              <div className="text-[9px] text-[#5a4e42] font-bold uppercase tracking-wider mb-1">Detected Intent</div>
              <div className="text-[12px] text-[#4ade80] font-medium">{c.intent}</div>
            </div>
            <div className="bg-[#0a0908] border border-[#241e17] rounded-xl p-3 hidden sm:block">
              <div className="text-[9px] text-[#5a4e42] font-bold uppercase tracking-wider mb-1">Sentiment Shift</div>
              <div className="text-[12px] text-[#c4b49a] font-medium">{c.sentiment}</div>
            </div>
            <div className="bg-[#0a0908] border border-[#241e17] rounded-xl p-3 hidden sm:block">
              <div className="text-[9px] text-[#5a4e42] font-bold uppercase tracking-wider mb-1">Action Taken</div>
              <div className="text-[12px] text-[#c4b49a] font-medium">{c.action}</div>
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-5 bg-[#0a0908] space-y-5">
          <div className="text-[10px] text-[#4a3e32] uppercase font-bold tracking-widest text-center shrink-0">{c.time}</div>
          
          {c.transcript.map((turn, i) => (
            <React.Fragment key={i}>
              <div className={`flex gap-3 ${turn.role === 'A' ? 'flex-row-reverse' : ''}`}>
                <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[9px] font-bold shrink-0 ${turn.role === 'A' ? 'bg-[#4ade80]/20 text-[#4ade80]' : 'bg-[#1e3a5f]/60 text-[#60a5fa]'}`}>
                  {turn.role}
                </div>
                <div className={`border rounded-2xl px-3 py-2 text-[13px] ${turn.role === 'A' ? 'bg-[#101a14] border-[#4ade80]/20 rounded-tr-sm text-[#d4b896]' : 'bg-[#161820] border-[#241e17] rounded-tl-sm text-[#a8b8d0]'}`}>
                  {turn.text}
                </div>
              </div>

              {/* Show AI Internal Insight after the first customer turn (or before first agent turn) */}
              {i === 0 && c.log && (
                <div className="flex justify-end pr-10 -my-2">
                  <div className="bg-[#1a1612] border border-[#241e17] rounded-lg px-3 py-1.5 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#4ade80] animate-pulse shrink-0" />
                    <span className="text-[10px] font-mono text-[#8a7a6a] line-clamp-1 sm:line-clamp-none">{c.log}</span>
                  </div>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </Panel>
    );
  }

  return (
    <Panel title="Leadvision — Edge Case Auto-Resolution" badge="LIVE LEARNING" accentColor="#06b6d4">
      <div className="p-4 bg-[#1a1612] border-b border-[#241e17] flex justify-between items-end">
         <p className="text-[12px] text-[#8a7a6a] max-w-[200px]">How the AI handles complex, unexpected scenarios natively.</p>
         <div className="text-right">
           <div className="text-[24px] font-display font-bold text-[#4ade80]">94%</div>
           <div className="text-[9px] font-bold text-[#5a4e42] tracking-wider uppercase">Auto-resolved</div>
         </div>
      </div>
      <div className="flex-1 p-5 space-y-4 overflow-y-auto">
        {cases.map((c, i) => {
          const isSuccess = c.severity === "success";
          return (
            <div key={i} className="bg-[#141210] rounded-2xl p-4 border hover:border-[#4ade80]/40 transition-all cursor-pointer group" style={{ borderColor: isSuccess ? 'rgba(74,222,128,0.15)' : 'rgba(240,192,96,0.15)' }}>
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle2 size={14} className={isSuccess ? "text-[#4ade80]" : "text-[#f0c060]"} />
                <span className={`text-[10px] font-bold rounded-full px-2.5 py-1 ${isSuccess ? "bg-[#4ade80]/15 text-[#4ade80]" : "bg-[#f0c060]/15 text-[#f0c060]"}`}>{c.tag}</span>
                <span className="text-[10px] font-mono text-[#5a4e42] ml-auto">{c.trend}</span>
              </div>
              <p className="text-[13px] font-medium text-[#d4c4a8] leading-snug group-hover:text-white transition-colors">{c.title}</p>
              <div className="flex items-center justify-between mt-3 pt-3 border-t border-[#241e17]">
                <span className="text-[11px] font-bold text-[#8a7a6a]">{c.freq}</span>
                <button onClick={() => setViewingTranscript(i)} className="text-[11px] font-bold text-[#4ade80] opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 hover:text-white">
                  View Insights <ChevronRight size={12} />
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
    <section id="products" className="py-24 md:py-36 overflow-hidden relative" style={{ background: "#0a0908" }}>
      {/* Decorative background blur (Red + Gold mix) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,_rgba(189,37,37,0.15)_0%,_rgba(240,192,96,0.08)_40%,_transparent_70%)] rounded-full blur-[80px] pointer-events-none" />
      
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14 md:mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
            Every part of the call, covered
          </h2>
          <p className="text-lg md:text-xl text-[#8a7a6a] max-w-2xl mx-auto">
            Six integrated products built on our own speech models — explore each one below.
          </p>
        </motion.div>

        {/* Mobile Horizontal Navigation */}
        <div className="md:hidden flex overflow-x-auto gap-2 pb-4 mb-6 scrollbar-hide snap-x" style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}>
          {products.map(p => {
            const Icon = p.icon;
            const isActive = active === p.id;
            return (
              <button
                key={p.id}
                onClick={() => setActive(p.id)}
                className={`flex-shrink-0 snap-start flex items-center gap-2 px-4 py-2.5 rounded-full transition-colors border ${isActive ? 'bg-[#bd2525] border-[#bd2525] text-white shadow-md' : 'bg-[#141210] border-[#241e17] text-[#8a7a6a]'}`}
              >
                <Icon size={14} />
                <span className="text-[13px] font-bold font-display">{p.name}</span>
              </button>
            )
          })}
        </div>

        {/* Desktop layout */}
        <div className="grid grid-cols-1 md:grid-cols-[340px_1fr] lg:grid-cols-[380px_1fr] gap-6 lg:gap-10 items-start max-w-6xl mx-auto">
          {/* Left: Dark Glass sidebar */}
          <div className="hidden md:block rounded-[24px] overflow-hidden border border-[#241e17] bg-[#0d0b09]/80 backdrop-blur-2xl shadow-[0_8px_30px_rgba(0,0,0,0.4)] p-3">
            <div className="flex flex-col gap-1.5">
              {products.map(p => {
                const Icon = p.icon;
                const isActive = active === p.id;
                return (
                  <button
                    key={p.id}
                    onClick={() => setActive(p.id)}
                    className={`w-full text-left px-4 py-4 rounded-xl transition-all relative group flex items-center gap-4 ${isActive ? 'bg-[#1a1410] shadow-md border border-[#bd2525]/40 scale-[1.02]' : 'hover:bg-[#141210] border border-transparent'}`}
                  >
                    {/* Active glow dot indicator */}
                    {isActive && (
                      <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-1.5 h-6 bg-[#bd2525] rounded-full shadow-[0_0_12px_rgba(189,37,37,0.8)]" />
                    )}

                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors shrink-0 shadow-sm ${isActive ? 'bg-[#bd2525] text-white' : 'bg-[#141210] border border-[#241e17] text-[#5a4e42] group-hover:text-white'}`}>
                      <Icon size={18} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className={`font-mono text-[10px] font-bold ${isActive ? 'text-[#bd2525]' : 'text-[#3a3028]'}`}>{p.num}</span>
                        <span className={`text-[15px] font-display font-bold truncate transition-colors ${isActive ? 'text-white' : 'text-[#8a7a6a] group-hover:text-white'}`}>{p.name}</span>
                      </div>
                      <p className={`text-[12px] truncate transition-colors ${isActive ? 'text-[#a89a8a]' : 'text-[#5a4e42]'}`}>{p.tagline}</p>
                    </div>
                    {isActive && <ChevronRight size={16} className="text-[#bd2525] shrink-0" />}
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
