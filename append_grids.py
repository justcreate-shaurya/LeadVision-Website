import os

css_to_add = """
/* ---------- Reusable Grids and Cards for other pages ---------- */

/* Voice Cards */
.voice-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}
@media (max-width: 880px) { .voice-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 560px) { .voice-grid { grid-template-columns: 1fr; } }
.voice-card {
  background: var(--white);
  border: 1px solid var(--slate-line);
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.02);
  transition: all 0.2s ease;
  position: relative;
}
.voice-card:hover { transform: translateY(-4px); border-color: var(--slate); box-shadow: 0 12px 30px rgba(0,0,0,0.06); }
.voice-card .vname { font-weight: 700; color: var(--ink); margin-bottom: 4px; font-family: var(--display); font-size: 1.1rem; }
.voice-card .vmeta { font-size: 0.85rem; color: var(--ink-soft); margin-bottom: 20px; }
.voice-card .vwave { height: 32px; background: repeating-linear-gradient(90deg, var(--slate-line), var(--slate-line) 2px, transparent 2px, transparent 6px); border-radius: 4px; margin-bottom: 20px; opacity: 0.5; }
.voice-card .vplay { font-size: 0.95rem; font-weight: 600; color: var(--ink); cursor: pointer; transition: color 0.2s; }
.voice-card:hover .vplay { color: var(--red); }

/* Alias usecase-col and usecase-card to the premium .usecase style */
.usecase-col, .usecase-card {
  border: 1px solid var(--slate-line);
  border-radius: var(--radius);
  padding: 32px 24px;
  background: var(--white);
  border-top: 4px solid var(--ink);
  box-shadow: 0 4px 20px rgba(0,0,0,0.03);
  transition: transform 0.2s ease, border-top-color 0.2s ease;
}
.usecase-col:hover, .usecase-card:hover {
  transform: translateY(-4px);
  border-top-color: var(--red);
}
.usecase-col h3, .usecase-card h3 {
  font-family: var(--display);
  font-size: 1.15rem;
  font-weight: 700;
  margin: 0 0 12px;
  color: var(--ink);
}
.usecase-col p, .usecase-card p {
  font-size: 0.95rem;
  color: var(--ink-soft);
  margin: 0;
  line-height: 1.6;
}

/* Integration Grid */
.int-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}
@media (max-width: 880px) { .int-grid { grid-template-columns: repeat(2, 1fr); } }
.int-block {
  background: var(--white);
  border: 1px solid var(--slate-line);
  border-radius: 16px;
  padding: 32px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.02);
  transition: all 0.2s ease;
}
.int-block:hover { transform: translateY(-4px); border-color: var(--slate); box-shadow: 0 12px 30px rgba(0,0,0,0.06); }
.int-block h3 {
  font-family: var(--display);
  font-size: 1.15rem;
  font-weight: 700;
  margin: 0 0 12px 0;
}
.int-block p {
  color: var(--ink-soft);
  font-size: 0.95rem;
  margin: 0;
}

/* Common overrides for plain h2s that need to be larger */
.section-head h2 {
  font-family: var(--display);
  font-weight: 700;
  font-size: clamp(2.2rem, 4vw, 2.8rem);
  letter-spacing: -0.02em;
  color: var(--ink);
  line-height: 1.1;
  margin: 0 0 16px;
}
"""

with open('global.css', 'a', encoding='utf-8') as f:
    f.write("\n" + css_to_add)
