"use client";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { ArrowRight, CheckCircle2, Users, Building2, MapPin, Briefcase } from "lucide-react";
import { LogoMarquee } from "@/components/LogoMarquee";

const fadeUp: Variants = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } } };
const stagger: Variants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } };

export default function Company() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden bg-background">
      {/* HERO */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-[radial-gradient(ellipse_at_top,_rgba(189,37,37,0.07)_0%,_transparent_65%)] pointer-events-none" />
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-red/30 bg-red-light text-red text-xs font-bold tracking-wider uppercase mb-8">
              <Building2 size={12} /> About Leadvision
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-display font-bold leading-[1.05] tracking-tight mb-8 text-ink">
              We are building the<br /><span className="text-red">voice of Indian AI.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-xl text-ink-soft leading-relaxed max-w-3xl mx-auto">
              Leadvision AI was built because AI voice platforms built for English simply don't work for India. We speak Hinglish natively, understand Indian context deeply, and build infrastructure that handles how India's 1.4 billion people actually communicate.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* MISSION */}
      <section className="py-20 bg-white border-y border-slate-line">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { label: "Founded", value: "2024", desc: "Born from the frustration of building customer operations in India" },
              { label: "Flagship client", value: "Traya Health", desc: "Thousands of calls per day, analyzed and scored automatically" },
              { label: "Focus", value: "India-first", desc: "Every model, every voice, every workflow built for Indian languages" },
            ].map(s => (
              <div key={s.label} className="p-8">
                <div className="font-mono text-xs text-ink-faint uppercase tracking-wider mb-2">{s.label}</div>
                <div className="text-3xl font-display font-bold text-ink mb-3">{s.value}</div>
                <p className="text-ink-soft text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ADVISORS */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 text-center mb-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-4xl font-display font-bold text-ink mb-4">Backed by world-class advisors</h2>
            <p className="text-lg text-ink-soft max-w-2xl mx-auto">Our team is advised by experts from India&apos;s and the world&apos;s top institutions.</p>
          </motion.div>
        </div>
        <LogoMarquee />
      </section>

      {/* HIRING */}
      <section id="hiring" className="py-32 bg-white border-t border-slate-line">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-ink mb-4">Join the team</h2>
            <p className="text-lg text-ink-soft max-w-2xl mx-auto">We are a small, high-ownership team building the most important AI infrastructure in India. We are always looking for exceptional people.</p>
          </motion.div>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              { role: "AI/ML Engineer", type: "Full-time", location: "Mumbai / Remote", desc: "LLM fine-tuning, ASR model improvements, and latency optimization." },
              { role: "Full-Stack Engineer", type: "Full-time", location: "Mumbai / Remote", desc: "Build the dashboard, APIs, and real-time pipeline infrastructure." },
              { role: "Sales & Partnerships", type: "Full-time", location: "Mumbai", desc: "Own enterprise deals and build our go-to-market in D2C and BFSI." },
              { role: "Product Designer", type: "Full-time", location: "Mumbai / Remote", desc: "Own the design system, dashboard UX, and marketing site." },
            ].map(j => (
              <div key={j.role} className="bg-background border border-slate-line p-6 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:border-red hover:shadow-md transition-all group">
                <div>
                  <h3 className="font-display font-bold text-lg text-ink group-hover:text-red transition-colors">{j.role}</h3>
                  <p className="text-ink-soft text-sm mt-1">{j.desc}</p>
                  <div className="flex items-center gap-4 mt-2">
                    <span className="flex items-center gap-1 text-xs text-ink-faint"><Briefcase size={12} /> {j.type}</span>
                    <span className="flex items-center gap-1 text-xs text-ink-faint"><MapPin size={12} /> {j.location}</span>
                  </div>
                </div>
                <Link href="mailto:hello@leadvision.ai" className="bg-ink text-white text-sm font-bold px-6 py-2.5 rounded-full hover:bg-red transition-colors whitespace-nowrap flex-shrink-0">
                  Apply now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 text-center bg-background">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-4xl font-display font-bold mb-6 text-ink">Want to work with us?</h2>
          <p className="text-xl text-ink-soft mb-10">Talk to us about a product demo or a career opportunity.</p>
          <Link href="/book-a-demo" className="inline-flex items-center gap-3 bg-red hover:bg-red-hover text-white px-12 py-5 rounded-full font-bold text-lg shadow-xl hover:-translate-y-1 transition-all">
            Get in touch <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
