"use client";

// Infinite horizontal logo marquee — actual institution logos, greyscale, transparent bg
// Duplicated list for seamless infinite loop

const institutions = [
  { name: "IIT Bombay",        dept: "Computer Science",     logo: "/logos/iitb.svg" },
  { name: "IIT Madras",        dept: "AI & Machine Learning", logo: "/logos/iitm.svg" },
  { name: "IIM Ahmedabad",     dept: "Strategy & Growth",    logo: "/logos/iima.svg" },
  { name: "Stanford University", dept: "Product Design",    logo: "/logos/stanford.svg" },
  { name: "IIM Bangalore",     dept: "Operations",           logo: "/logos/iimb.svg" },
  { name: "Imperial College",  dept: "Data Science",         logo: "/logos/imperial.svg" },
  { name: "Cambridge University", dept: "NLP Research",     logo: "/logos/cambridge.svg" },
];

// Duplicate for seamless loop
const items = [...institutions, ...institutions];

export function LogoMarquee() {
  return (
    <section className="border-y border-slate-line bg-white py-6 overflow-hidden">
      <p className="font-mono text-[10px] font-bold text-ink-faint tracking-widest uppercase text-center mb-5">
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
          className="flex items-center gap-10 w-max"
          style={{ animation: "marquee 36s linear infinite" }}
        >
          {items.map((inst, i) => (
            <div
              key={i}
              className="flex-shrink-0 flex flex-col items-center gap-2 px-6"
            >
              {/* Institution logo — greyscale + reduced opacity */}
              <img
                src={inst.logo}
                alt={inst.name}
                width={120}
                height={48}
                className="object-contain"
                style={{
                  filter: "grayscale(100%) opacity(0.45)",
                  height: "44px",
                  width: "auto",
                  maxWidth: "130px",
                }}
              />
              {/* Subtle separator dot between name + dept */}
              <div className="text-center">
                <span className="font-display font-bold text-[11px] text-ink-faint">{inst.name}</span>
                <span className="text-ink-faint/50 mx-1.5 text-[10px]">·</span>
                <span className="text-[10px] text-ink-faint/60">{inst.dept}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
