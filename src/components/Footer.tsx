import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-background-alt border-t border-slate-line py-20 mt-auto">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4 group inline-flex">
              <div className="w-3 h-3 rounded-full bg-red group-hover:bg-red-hover transition-colors" />
              <span className="font-display font-bold text-xl tracking-tight text-ink">
                Leadvision AI
              </span>
            </Link>
            <p className="text-ink-soft text-sm leading-relaxed max-w-sm">
              The voice AI stack built for how India actually speaks. Clone voices, score calls, and automate conversations.
            </p>
          </div>

          <div>
            <h4 className="font-mono text-xs font-bold text-ink-faint uppercase tracking-wider mb-6">
              Products
            </h4>
            <div className="flex flex-col gap-4">
              <Link href="/products/voice-ai-agent" className="text-sm font-semibold text-ink hover:text-red transition-colors">Voice AI Agent</Link>
              <Link href="/products/speech-to-text" className="text-sm font-semibold text-ink hover:text-red transition-colors">Speech-to-Text</Link>
              <Link href="/products/text-to-speech" className="text-sm font-semibold text-ink hover:text-red transition-colors">Text-to-Speech</Link>
              <Link href="/products/qa-analytics" className="text-sm font-semibold text-ink hover:text-red transition-colors">QA & Analytics</Link>
              <Link href="/products/consumer-insights" className="text-sm font-semibold text-ink hover:text-red transition-colors">Consumer Insights</Link>
            </div>
          </div>

          <div>
            <h4 className="font-mono text-xs font-bold text-ink-faint uppercase tracking-wider mb-6">
              Company
            </h4>
            <div className="flex flex-col gap-4">
              <Link href="/company" className="text-sm font-semibold text-ink hover:text-red transition-colors">About</Link>
              <Link href="/company#hiring" className="text-sm font-semibold text-ink hover:text-red transition-colors">Careers</Link>
            </div>
          </div>

          <div>
            <h4 className="font-mono text-xs font-bold text-ink-faint uppercase tracking-wider mb-6">
              Legal & Contact
            </h4>
            <div className="flex flex-col gap-4">
              <Link href="/book-a-demo" className="text-sm font-semibold text-ink hover:text-red transition-colors">Book a demo</Link>
              <Link href="#" className="text-sm font-semibold text-ink hover:text-red transition-colors">Privacy policy</Link>
              <Link href="#" className="text-sm font-semibold text-ink hover:text-red transition-colors">Terms of service</Link>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-line pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-ink-faint">
            © {new Date().getFullYear()} Leadvision AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
