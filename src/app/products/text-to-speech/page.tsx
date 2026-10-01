"use client";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { Volume2, ArrowRight, Zap, Users, CheckCircle2 } from "lucide-react";

const fadeUp: Variants = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } } };
const stagger: Variants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } };

export default function TextToSpeech() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden bg-background">
      <section className="relative py-24 md:py-40 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-[radial-gradient(ellipse_at_top,_rgba(189,37,37,0.07)_0%,_transparent_65%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-red/30 bg-red-light text-red text-xs font-bold tracking-wider uppercase mb-8">
              <Volume2 size={12} /> Text-to-Speech
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-display font-bold leading-[1.05] tracking-tight mb-6 text-ink">
              Voices that <span className="text-red">actually sound Indian.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-xl text-ink-soft leading-relaxed mb-10 max-w-xl">
              Natural-sounding, emotionally expressive voices for IVR, AI agents, and notifications. Clone your best agents' voices and deploy at scale.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Link href="/book-a-demo" className="bg-ink text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-red transition-all shadow-lg group inline-flex">
                Book a demo <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>
          {/* TTS Mockup */}
          <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9, delay: 0.2 }}>
            <div className="rounded-2xl overflow-hidden border border-slate-line bg-[#0f0e0d] shadow-2xl p-6">
              <div className="flex gap-2 mb-5"><div className="w-3 h-3 rounded-full bg-[#ff5f57]"/><div className="w-3 h-3 rounded-full bg-[#ffbd2e]"/><div className="w-3 h-3 rounded-full bg-[#28c840]"/></div>
              <div className="font-mono text-[11px] text-[#5a4e42] mb-4 uppercase tracking-wider">Voice Studio</div>
              <div className="space-y-4">
                {[
                  { name: "Priya", lang: "Hindi", style: "Empathetic", bars: [60, 80, 70, 90, 75, 85, 65, 95, 70, 80] },
                  { name: "Arjun", lang: "Hinglish", style: "Professional", bars: [70, 65, 85, 75, 90, 80, 70, 85, 75, 88] },
                  { name: "Kavya", lang: "Tamil", style: "Friendly", bars: [80, 70, 90, 65, 85, 75, 95, 80, 70, 85] },
                ].map((v, vi) => (
                  <div key={v.name} className={`bg-[#1a1714] rounded-xl p-4 border ${vi === 0 ? "border-[#f0c060]/40" : "border-[#2a2018]"}`}>
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <span className="text-white font-bold text-sm">{v.name}</span>
                        <span className="text-[#5a4e42] text-[10px] ml-2">{v.lang} · {v.style}</span>
                      </div>
                      {vi === 0 && <span className="text-[9px] text-[#f0c060] font-bold border border-[#f0c060]/40 px-2 py-0.5 rounded-full">PLAYING</span>}
                    </div>
                    <div className="flex items-end gap-0.5 h-8">
                      {v.bars.map((b, i) => (
                        <div key={i} className="flex-1 rounded-t" style={{ height: `${b}%`, background: vi === 0 ? "#f0c060" : "#3a3028" }} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-32 bg-white border-t border-slate-line">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Users, title: "Voice Cloning", desc: "Clone any human agent's voice in under an hour. Deploy the cloned voice for outbound calls, IVR, or notifications." },
              { icon: Zap, title: "Real-time Streaming", desc: "Ultra-low latency streaming TTS for live conversation AI. First audio chunk in under 200ms." },
              { icon: Volume2, title: "Emotional Tone Control", desc: "Adjust warmth, urgency, enthusiasm, and empathy programmatically per conversation context." },
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
          <h2 className="text-4xl font-display font-bold mb-6 text-ink">Hear the difference.</h2>
          <p className="text-xl text-ink-soft mb-10">Listen to a sample call and compare with a real human agent.</p>
          <Link href="/book-a-demo" className="inline-flex items-center gap-3 bg-red hover:bg-red-hover text-white px-12 py-5 rounded-full font-bold text-lg shadow-xl hover:-translate-y-1 transition-all">
            Book a demo <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
