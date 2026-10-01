"use client";
import { useState } from "react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { ArrowRight, CheckCircle2, Calendar, Building2, Users, Phone } from "lucide-react";

const fadeUp: Variants = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } } };
const stagger: Variants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } };

export default function BookADemo() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="flex flex-col min-h-screen overflow-hidden bg-background">
      <section className="relative py-24 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-[radial-gradient(ellipse_at_top,_rgba(189,37,37,0.07)_0%,_transparent_65%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* LEFT — COPY */}
            <motion.div initial="hidden" animate="visible" variants={stagger} className="pt-8">
              <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-red/30 bg-red-light text-red text-xs font-bold tracking-wider uppercase mb-8">
                <Calendar size={12} /> Book a Demo
              </motion.div>
              <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl font-display font-bold leading-[1.1] tracking-tight mb-6 text-ink">
                See Leadvision in action.
              </motion.h1>
              <motion.p variants={fadeUp} className="text-xl text-ink-soft leading-relaxed mb-12 max-w-xl">
                In 30 minutes, we will show you a live Hinglish call, our QA dashboard, and consumer insights on real data. No slides. Just a live product demo.
              </motion.p>

              <motion.div variants={stagger} className="space-y-5">
                {[
                  { icon: Phone, text: "Hear a live AI call in Hinglish — with real edge cases" },
                  { icon: Building2, text: "See the QA dashboard score a call in real time" },
                  { icon: Users, text: "Explore consumer insights from actual Traya data" },
                ].map(({ icon: Icon, text }) => (
                  <motion.div key={text} variants={fadeUp} className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-xl bg-red-light text-red flex items-center justify-center flex-shrink-0">
                      <Icon size={18} />
                    </div>
                    <p className="text-ink-soft pt-1.5">{text}</p>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div variants={fadeUp} className="mt-12 p-6 bg-white border border-slate-line rounded-2xl">
                <p className="text-sm text-ink-soft italic">"Within 2 weeks of deployment, Leadvision was handling 3x our previous call volume with zero additional headcount."</p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-ink text-white flex items-center justify-center font-bold text-sm">T</div>
                  <div>
                    <div className="font-bold text-sm text-ink">Traya Health Team</div>
                    <div className="text-xs text-ink-faint">Operations Lead</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* RIGHT — FORM */}
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}>
              {submitted ? (
                <div className="bg-white border border-slate-line rounded-3xl p-12 text-center shadow-lg">
                  <div className="w-16 h-16 bg-red-light rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 size={32} className="text-red" />
                  </div>
                  <h2 className="text-2xl font-display font-bold mb-4 text-ink">We'll be in touch within 2 hours.</h2>
                  <p className="text-ink-soft">Our team will reach out to confirm your demo slot and send a calendar invite.</p>
                </div>
              ) : (
                <div className="bg-white border border-slate-line rounded-3xl p-10 shadow-lg">
                  <h2 className="text-2xl font-display font-bold mb-8 text-ink">Book your 30-min demo</h2>
                  <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-bold text-ink mb-2">First name</label>
                        <input required type="text" className="w-full px-4 py-3 rounded-xl border border-slate-line bg-background focus:outline-none focus:border-red focus:ring-2 focus:ring-red/10 transition text-ink" placeholder="Arjun" />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-ink mb-2">Last name</label>
                        <input required type="text" className="w-full px-4 py-3 rounded-xl border border-slate-line bg-background focus:outline-none focus:border-red focus:ring-2 focus:ring-red/10 transition text-ink" placeholder="Sharma" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-ink mb-2">Work email</label>
                      <input required type="email" className="w-full px-4 py-3 rounded-xl border border-slate-line bg-background focus:outline-none focus:border-red focus:ring-2 focus:ring-red/10 transition text-ink" placeholder="arjun@company.com" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-ink mb-2">Company</label>
                      <input required type="text" className="w-full px-4 py-3 rounded-xl border border-slate-line bg-background focus:outline-none focus:border-red focus:ring-2 focus:ring-red/10 transition text-ink" placeholder="Your company name" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-ink mb-2">Phone number</label>
                      <input required type="tel" className="w-full px-4 py-3 rounded-xl border border-slate-line bg-background focus:outline-none focus:border-red focus:ring-2 focus:ring-red/10 transition text-ink" placeholder="+91 98765 43210" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-ink mb-2">What would you like to demo?</label>
                      <select required className="w-full px-4 py-3 rounded-xl border border-slate-line bg-background focus:outline-none focus:border-red focus:ring-2 focus:ring-red/10 transition text-ink">
                        <option value="">Select a product</option>
                        <option>Voice AI Agent</option>
                        <option>QA & Analytics</option>
                        <option>Consumer Insights</option>
                        <option>Full stack demo</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-ink mb-2">Monthly call volume (approx.)</label>
                      <select className="w-full px-4 py-3 rounded-xl border border-slate-line bg-background focus:outline-none focus:border-red focus:ring-2 focus:ring-red/10 transition text-ink">
                        <option>Under 1,000</option>
                        <option>1,000 – 10,000</option>
                        <option>10,000 – 100,000</option>
                        <option>100,000+</option>
                      </select>
                    </div>
                    <button type="submit" className="w-full bg-red hover:bg-red-hover text-white py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 transition-all hover:-translate-y-0.5 shadow-lg hover:shadow-red/20">
                      Request demo <ArrowRight size={20} />
                    </button>
                    <p className="text-xs text-ink-faint text-center">We'll respond within 2 hours on business days.</p>
                  </form>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
