"use client";

// Infinite horizontal logo marquee — actual authentic institution logos via remote CDN
// Duplicated list for seamless infinite loop

const institutions = [
  { name: "IIT Bombay",        dept: "Computer Science",     logo: "https://logo.uplead.com/iitb.ac.in" },
  { name: "IIT Madras",        dept: "AI & Machine Learning", logo: "https://logo.uplead.com/iitm.ac.in" },
  { name: "IIM Ahmedabad",     dept: "Strategy & Growth",    logo: "https://logo.uplead.com/iima.ac.in" },
  { name: "Stanford",          dept: "Product Design",       logo: "https://logo.uplead.com/stanford.edu" },
  { name: "IIM Bangalore",     dept: "Operations",           logo: "https://logo.uplead.com/iimb.ac.in" },
  { name: "Imperial College",  dept: "Data Science",         logo: "https://logo.uplead.com/imperial.ac.uk" },
  { name: "Cambridge",         dept: "NLP Research",         logo: "https://logo.uplead.com/cam.ac.uk" },
];

// Duplicate for seamless loop
const items = [...institutions, ...institutions];

export function LogoMarquee() {
  return (
    <section className="border-y border-slate-line bg-background py-8 overflow-hidden">
      <p className="font-mono text-[10px] font-bold text-ink-faint tracking-widest uppercase text-center mb-6">
        Advisors from the world&rsquo;s top institutions
      </p>
      <div
        className="relative w-full overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
        }}
      >
        <div
          className="flex items-center gap-14 w-max"
          style={{ animation: "marquee 40s linear infinite" }}
        >
          {items.map((inst, i) => (
            <div
              key={i}
              className="flex-shrink-0 flex flex-col items-center gap-3 px-4 group"
            >
              {/* Authentic Institution logo — greyscale + opacity, color on hover */}
              <div className="h-[48px] flex items-center justify-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={inst.logo}
                  alt={inst.name}
                  className="max-h-full max-w-[140px] object-contain transition-all duration-300 opacity-40 grayscale group-hover:grayscale-0 group-hover:opacity-100"
                />
              </div>
              {/* Subtle separator dot between name + dept */}
              <div className="text-center">
                <span className="font-display font-bold text-[11px] text-ink-soft transition-colors group-hover:text-ink">{inst.name}</span>
                <span className="text-ink-faint/40 mx-2 text-[10px]">·</span>
                <span className="text-[10px] text-ink-faint transition-colors group-hover:text-ink-soft">{inst.dept}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
