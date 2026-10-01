"use client";

// Infinite horizontal marquee — pure CSS animation, no JS scroll
// Duplicate the list to create seamless loop

const institutions = [
  { name: "IIT Bombay", sub: "Computer Science" },
  { name: "IIT Madras", sub: "AI & Machine Learning" },
  { name: "IIM Ahmedabad", sub: "Strategy & Growth" },
  { name: "Stanford University", sub: "Product Design" },
  { name: "IIM Bangalore", sub: "Operations" },
  { name: "Imperial College", sub: "Data Science" },
  { name: "Cambridge University", sub: "NLP Research" },
];

// Duplicate for seamless infinite loop
const items = [...institutions, ...institutions];

export function LogoMarquee() {
  return (
    <section className="border-y border-slate-line bg-white py-8 overflow-hidden">
      <p className="font-mono text-[10px] font-bold text-ink-faint tracking-widest uppercase text-center mb-6">
        Advisors from the world&rsquo;s top institutions
      </p>
      <div
        className="relative w-full overflow-hidden"
        style={{
          maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        }}
      >
        <div
          className="flex gap-4 w-max"
          style={{
            animation: "marquee 28s linear infinite",
          }}
        >
          {items.map((inst, i) => (
            <div
              key={i}
              className="flex-shrink-0 flex flex-col items-center justify-center px-8 py-4 min-w-[160px] bg-white border border-slate-line rounded-2xl shadow-sm"
            >
              {/* Institution wordmark */}
              <span className="font-display font-bold text-sm text-ink text-center leading-tight">
                {inst.name}
              </span>
              <span className="font-body text-[11px] text-ink-faint mt-1 text-center">{inst.sub}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
