"use client";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { MicVocal, ArrowRight, CheckCircle2, Activity, Globe, Zap } from "lucide-react";

const fadeUp: Variants = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } } };
const stagger: Variants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } };

export default function SpeechToText() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden bg-background">
      <section className="relative py-24 md:py-40 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-[radial-gradient(ellipse_at_top,_rgba(189,37,37,0.07)_0%,_transparent_65%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-red/30 bg-red-light text-red text-xs font-bold tracking-wider uppercase mb-8">
              <MicVocal size={12} /> Speech-to-Text
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-display font-bold leading-[1.05] tracking-tight mb-6 text-ink">
              Every word. <span className="text-red">Every language.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-xl text-ink-soft leading-relaxed mb-10 max-w-xl">
              Real-time transcription across 12+ Indian languages with 95%+ accuracy, even in noisy Hinglish environments. Live streaming or batch — your choice.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Link href="/book-a-demo" className="bg-ink text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-red transition-all shadow-lg group inline-flex">
                Book a demo <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>
          {/* STT mockup */}
          <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9, delay: 0.2 }}>
            <div className="rounded-2xl overflow-hidden border border-slate-line bg-[#0f0e0d] shadow-2xl p-6">
              <div className="flex gap-2 mb-4"><div className="w-3 h-3 rounded-full bg-[#ff5f57]"/><div className="w-3 h-3 rounded-full bg-[#ffbd2e]"/><div className="w-3 h-3 rounded-full bg-[#28c840]"/></div>
              <div className="font-mono text-[11px] text-[#5a4e42] mb-4 uppercase tracking-wider">Real-time Transcript</div>
              <div className="space-y-3 text-sm">
                {[
                  { speaker: "CUST", text: "Mera subscription renew nahi hua, mujhe kal hi notification aayi thi.", lang: "hi-IN", conf: "98%" },
                  { speaker: "AGENT", text: "I understand — let me check your account right now.", lang: "en-IN", conf: "99%" },
                  { speaker: "CUST", text: "Aur payment bhi deduct ho gayi hai account se.", lang: "hi-IN", conf: "96%" },
                ].map((t, i) => (
                  <div key={i} className="bg-[#1a1714] rounded-lg p-3 border border-[#2a2018]">
                    <div className="flex items-center justify-between mb-1">
                      <span className={`text-[10px] font-bold font-mono ${t.speaker === "CUST" ? "text-[#f0c060]" : "text-[#60a5fa]"}`}>{t.speaker}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-[9px] text-[#5a4e42]">{t.lang}</span>
                        <span className="text-[9px] font-bold text-[#4ade80]">{t.conf}</span>
                      </div>
                    </div>
                    <p className="text-[#d4b896] text-xs">{t.text}</p>
                  </div>
                ))}
                <div className="flex items-center gap-2 pt-2">
                  <div className="flex items-end gap-0.5 h-4">
                    {[...Array(12)].map((_, i) => (
                      <div key={i} className="w-1 rounded-t bg-[#f0c060]/60" style={{ height: `${30 + Math.sin(i * 1.2) * 50 + 20}%` }} />
                    ))}
                  </div>
                  <span className="text-[10px] text-[#5a4e42] font-mono animate-pulse">Transcribing...</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-32 bg-white border-t border-slate-line">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Globe, title: "12+ Indian Languages", desc: "Hindi, Tamil, Telugu, Kannada, Malayalam, Bengali, Gujarati, Marathi, Punjabi, Odia, Assamese, Hinglish." },
              { icon: Zap, title: "Real-time Streaming", desc: "Sub-200ms streaming latency for live call transcription. Also supports batch processing of recordings." },
              { icon: Activity, title: "Speaker Diarization", desc: "Automatically separates and labels agent vs. customer speech in multi-speaker recordings." },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-background border border-slate-line p-8 rounded-3xl hover:-translate-y-1 transition-transform group">
                <div className="w-12 h-12 rounded-2xl bg-red-light text-red flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon size={22} strokeWidth={1.8} />
                </div>
                <h3 className="text-lg font-display font-bold mb-3 text-ink">{title}</h3>
                <p className="text-ink-soft text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 text-center bg-background">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-4xl font-display font-bold mb-6 text-ink">Hear it. Read it. Act on it.</h2>
          <p className="text-xl text-ink-soft mb-10">Test our STT on your own recordings.</p>
          <Link href="/book-a-demo" className="inline-flex items-center gap-3 bg-red hover:bg-red-hover text-white px-12 py-5 rounded-full font-bold text-lg shadow-xl hover:-translate-y-1 transition-all">
            Book a demo <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
