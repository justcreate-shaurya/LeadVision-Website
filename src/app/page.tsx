"use client";

import Link from "next/link";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { ArrowRight, CheckCircle2, Shield, BrainCircuit, Activity, Users, Network, Zap } from "lucide-react";
import { useRef } from "react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <div className="flex flex-col min-h-screen bg-background text-ink overflow-hidden" ref={containerRef}>
      
      {/* HERO SECTION - Voice AI 2.0 */}
      <section className="relative pt-32 pb-40 overflow-hidden flex flex-col items-center justify-center min-h-[90vh]">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--red-light)_0%,_transparent_50%)] opacity-50 pointer-events-none" />
        
        <div className="max-w-5xl mx-auto px-6 text-center z-10">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="flex flex-col items-center gap-8">
            <motion.div variants={fadeUp} className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white border border-slate shadow-sm">
              <span className="w-2 h-2 rounded-full bg-red animate-pulse" />
              <span className="text-xs font-bold font-mono tracking-widest text-ink-soft uppercase">Introducing Voice AI 2.0</span>
            </motion.div>
            
            <motion.div variants={fadeUp}>
              <h1 className="text-6xl md:text-8xl font-display font-bold tracking-tight leading-[1.05] text-ink">
                Where simple bots <span className="text-red">stop.</span>
              </h1>
            </motion.div>
            
            <motion.p variants={fadeUp} className="text-xl md:text-2xl text-ink-soft leading-relaxed max-w-3xl mt-4">
              Voice quality is table stakes. But existing platforms are built as Q&A engines. Real conversations need a fundamentally different architecture.
            </motion.p>
            
            <motion.div variants={fadeUp} className="flex flex-wrap items-center justify-center gap-4 mt-8">
              <Link href="/book-a-demo" className="bg-ink hover:bg-red text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg hover:shadow-red/20 flex items-center gap-2 group">
                Book a demo <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Floating abstract tech nodes */}
        <motion.div 
          style={{ y }}
          className="absolute -right-20 top-1/4 w-[600px] h-[600px] border border-slate-line rounded-full opacity-20 pointer-events-none"
        />
        <motion.div 
          style={{ y: useTransform(scrollYProgress, [0, 1], [-100, 100]) }}
          className="absolute -left-40 bottom-10 w-[800px] h-[800px] border border-slate-line rounded-full opacity-20 pointer-events-none"
        />
      </section>

      {/* THE PROBLEM WITH TRADITIONAL PROMPTS */}
      <section className="py-32 bg-white border-y border-slate-line relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="mb-20">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">The trap of prompt-first workflows.</h2>
            <p className="text-xl text-ink-soft max-w-3xl leading-relaxed">
              Traditional architectures rely on a single, massive prompt. By the end of the call, the LLM is trying to remember everything. The context window explodes, logic breaks, and hallucinations begin.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Prompt Hallucinations", desc: "Small prompt changes lead to drastically different outcomes, breaking personalisation." },
              { title: "Edge Cases Fail", desc: "Real journeys are non-linear. Simple Q&A flows cannot reliably handle ambiguous user interruptions." },
              { title: "Black-Box Logic", desc: "Limited visibility into why conversations fail. Product managers can't see the logic clearly." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-background border border-slate-line p-10 rounded-[2rem] hover:border-red/30 transition-colors"
              >
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate flex items-center justify-center mb-6 text-ink-soft">
                  <Activity size={24} />
                </div>
                <h3 className="text-xl font-display font-bold mb-3">{item.title}</h3>
                <p className="text-ink-soft leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* THE SOLUTION: ADAPTIVE WORKFLOW */}
      <section className="py-40 bg-ink text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(189,37,37,0.15)_0%,_transparent_70%)] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-24">
            <div className="font-mono text-sm font-bold text-slate-dark tracking-widest uppercase mb-4">The Solution</div>
            <h2 className="text-5xl md:text-7xl font-display font-bold mb-8">Adaptive Workflows.</h2>
            <p className="text-xl text-slate-dark max-w-3xl mx-auto leading-relaxed">
              Inspired by advanced backend orchestration. Every conversation is broken into independent, deterministic nodes powered by a Global Knowledge Brain.
            </p>
          </motion.div>

          {/* Abstract Workflow Visual */}
          <div className="relative w-full max-w-5xl mx-auto h-[400px] border border-white/10 rounded-3xl bg-white/5 backdrop-blur-sm p-8 flex items-center justify-center">
            <div className="absolute inset-0 flex items-center justify-center">
              <svg className="w-full h-full absolute opacity-20" preserveAspectRatio="none">
                <path d="M 100 200 C 300 200, 300 100, 500 100" stroke="white" strokeWidth="2" strokeDasharray="4 4" fill="none" />
                <path d="M 100 200 C 300 200, 300 300, 500 300" stroke="white" strokeWidth="2" strokeDasharray="4 4" fill="none" />
                <path d="M 500 100 C 700 100, 700 200, 900 200" stroke="white" strokeWidth="2" strokeDasharray="4 4" fill="none" />
                <path d="M 500 300 C 700 300, 700 200, 900 200" stroke="white" strokeWidth="2" strokeDasharray="4 4" fill="none" />
              </svg>
            </div>
            
            <div className="relative z-10 flex w-full justify-between items-center px-10">
              <Node title="Greeting" />
              <div className="flex flex-col gap-16">
                <Node title="Delivery Timeline" active />
                <Node title="Usage Check" />
              </div>
              <Node title="Brand Intro" />
              <div className="w-48 h-48 rounded-full border border-red bg-red/10 flex items-center justify-center text-center p-4 shadow-[0_0_50px_rgba(189,37,37,0.3)]">
                <span className="font-bold font-display text-lg">Global<br/>Knowledge<br/>Brain</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16 max-w-5xl mx-auto">
            <div className="p-8 border border-white/10 rounded-2xl bg-white/5">
              <h4 className="text-xl font-bold mb-2">Deterministic Routing</h4>
              <p className="text-slate-dark text-sm leading-relaxed">The workflow engine decides what happens next based on strict rules. The LLM only decides exactly how to phrase it. Predictable and reliable.</p>
            </div>
            <div className="p-8 border border-white/10 rounded-2xl bg-white/5">
              <h4 className="text-xl font-bold mb-2">Smaller, Focused Prompts</h4>
              <p className="text-slate-dark text-sm leading-relaxed">Each node contains only the instructions relevant to that exact step. Massive reduction in hallucinations and context-window overload.</p>
            </div>
          </div>
        </div>
      </section>

      {/* HUMAN IN THE LOOP & QUALITY */}
      <section className="py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
              <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-display font-bold mb-8">
                Invisible Human Handoffs.
              </motion.h2>
              <motion.p variants={fadeUp} className="text-lg text-ink-soft mb-8 leading-relaxed">
                Most platforms escalate only after a failure. Leadvision predicts when human expertise is needed *before* the conversation fails.
              </motion.p>
              <motion.ul variants={fadeUp} className="space-y-6">
                <li className="flex gap-4">
                  <div className="mt-1 bg-red-light text-red p-1 rounded-full h-fit"><CheckCircle2 size={16} /></div>
                  <div>
                    <strong className="block text-ink font-bold">Monitor Live</strong>
                    <span className="text-ink-soft">Agents monitor live conversations and join instantly with full context.</span>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="mt-1 bg-red-light text-red p-1 rounded-full h-fit"><CheckCircle2 size={16} /></div>
                  <div>
                    <strong className="block text-ink font-bold">Seamless Transition</strong>
                    <span className="text-ink-soft">Customers experience a seamless transition with the exact same voice and context. No repeating themselves.</span>
                  </div>
                </li>
              </motion.ul>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="grid grid-cols-2 gap-4">
              <StatCard value="<500ms" label="Real-time Latency" />
              <StatCard value="95%+" label="STT Accuracy" />
              <StatCard value="45+ min" label="Long Call Management" />
              <StatCard value="<1%" label="Hallucination Rate" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ENTERPRISE PRIVACY */}
      <section className="py-32 bg-white border-t border-slate-line">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <Shield className="w-16 h-16 text-red mx-auto mb-8" />
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Open-Source Data Privacy</h2>
            <p className="text-lg text-ink-soft max-w-2xl mx-auto leading-relaxed mb-16">
              Built for healthcare, banking, and insurance. Adopt AI without exposing sensitive customer information to external model providers.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PrivacyCard title="Data never leaves" desc="Customer conversations and sensitive business data remain entirely within a controlled infrastructure." />
            <PrivacyCard title="No vendor training" desc="Because you host the model, your proprietary data is never used to improve another company's foundation model." />
            <PrivacyCard title="Data sovereignty" desc="Keep data strictly within specific regions to comply with complex legal and contractual obligations." />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-background border-t border-slate-line text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-5xl font-display font-bold mb-8">Ready for Voice AI 2.0?</h2>
          <Link href="/book-a-demo" className="inline-block bg-red hover:bg-red-hover text-white px-10 py-5 rounded-full font-bold text-lg transition-all shadow-xl hover:shadow-red/20 hover:-translate-y-1">
            Book an enterprise demo
          </Link>
        </div>
      </section>

    </div>
  );
}

// Helper components
function Node({ title, active = false }: { title: string, active?: boolean }) {
  return (
    <div className={`px-6 py-3 rounded-xl border font-mono text-sm font-bold shadow-lg transition-all ${active ? 'bg-red border-red text-white scale-110' : 'bg-[#1c1815] border-[#3a3028] text-white'}`}>
      {title}
    </div>
  );
}

function StatCard({ value, label }: { value: string, label: string }) {
  return (
    <div className="bg-white border border-slate-line p-8 rounded-[2rem] shadow-sm flex flex-col items-center justify-center text-center aspect-square hover:border-red transition-colors">
      <div className="text-4xl lg:text-5xl font-display font-bold text-ink mb-2">{value}</div>
      <div className="text-sm font-bold text-ink-soft uppercase tracking-wider">{label}</div>
    </div>
  );
}

function PrivacyCard({ title, desc }: { title: string, desc: string }) {
  return (
    <div className="text-left bg-background border border-slate-line p-8 rounded-3xl hover:-translate-y-1 transition-transform">
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-ink-soft leading-relaxed">{desc}</p>
    </div>
  );
}
