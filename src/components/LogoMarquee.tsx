"use client";

// Infinite horizontal logo marquee — actual authentic institution logos via remote CDN
// Duplicated list for seamless infinite loop

const institutions = [
  { name: "IIT Bombay",        dept: "Computer Science",     logo: "https://upload.wikimedia.org/wikipedia/en/thumb/1/1d/Indian_Institute_of_Technology_Bombay_Logo.svg/200px-Indian_Institute_of_Technology_Bombay_Logo.svg.png" },
  { name: "IIT Madras",        dept: "AI & Machine Learning", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/6/69/IIT_Madras_Logo.svg/200px-IIT_Madras_Logo.svg.png" },
  { name: "IIM Ahmedabad",     dept: "Strategy & Growth",    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e2/IIMA_logo.svg/200px-IIMA_logo.svg.png" },
  { name: "Stanford",          dept: "Product Design",       logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Seal_of_Leland_Stanford_Junior_University.svg/200px-Seal_of_Leland_Stanford_Junior_University.svg.png" },
  { name: "IIM Bangalore",     dept: "Operations",           logo: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f2/IIM_Bangalore_Logo.svg/200px-IIM_Bangalore_Logo.svg.png" },
  { name: "Imperial College",  dept: "Data Science",         logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Imperial_College_London_new_logo.png/320px-Imperial_College_London_new_logo.png" },
  { name: "Cambridge",         dept: "NLP Research",         logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/University_of_Cambridge_crest.svg/200px-University_of_Cambridge_crest.svg.png" },
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
