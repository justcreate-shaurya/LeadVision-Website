import os

css_to_add = """
/* ========================================================
   GLOBAL GRID & CARD ALIASES FOR CONSISTENCY ACROSS PAGES
   ======================================================== */

/* Grid Layouts (3 Columns) */
.format-grid, .founders-grid, .pricing-grid, .dash-grid, .demo-grid, .upload-grid, .right-list, .logo-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

@media (max-width: 880px) {
  .format-grid, .founders-grid, .pricing-grid, .dash-grid, .demo-grid, .upload-grid, .right-list, .logo-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 560px) {
  .format-grid, .founders-grid, .pricing-grid, .dash-grid, .demo-grid, .upload-grid, .right-list, .logo-grid {
    grid-template-columns: 1fr;
  }
}

/* Card Styling for all sections */
.format-card, .founder-card, .pricing-card, .dash-card, .alert-card, .scorecard, .right-row {
  background: var(--white);
  border: 1px solid var(--slate-line);
  border-radius: var(--radius);
  padding: 32px 24px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.02);
  transition: all 0.2s ease;
  display: flex;
  flex-direction: column;
}

.format-card:hover, .founder-card:hover, .pricing-card:hover, .dash-card:hover, .alert-card:hover, .scorecard:hover, .right-row:hover {
  border-color: var(--slate);
  box-shadow: 0 12px 40px rgba(0,0,0,0.06);
  transform: translateY(-2px);
}

/* Standardizing Headers in Cards */
.format-card h3, .founder-card h3, .pricing-card h3, .dash-card h3, .alert-card h3, .scorecard h3, .right-title {
  font-family: var(--display);
  font-size: 1.15rem;
  font-weight: 700;
  margin: 0 0 12px 0;
  color: var(--ink);
}

/* Standardizing Paragraphs in Cards */
.format-card p, .founder-card p, .pricing-card p, .dash-card p, .alert-card p, .scorecard p, .right-example {
  color: var(--ink-soft);
  font-size: 0.95rem;
  margin: 0;
  flex: 1;
  line-height: 1.6;
}

/* Special treatments based on screenshot feedback */

/* 1. What it gets right */
.right-row {
  border-top: 4px solid var(--ink);
}
.right-row:hover {
  border-top-color: var(--red);
}
.right-row::before {
  content: "▸";
  color: var(--red);
  font-size: 1.5rem;
  margin-bottom: 12px;
  line-height: 1;
}

/* 2. How it compares panel */
.compare-panel {
  background: var(--bg-alt);
  border: 1px solid var(--slate-line);
  border-radius: 20px;
  padding: 60px 40px;
  box-shadow: 0 12px 40px rgba(0,0,0,0.04);
  text-align: center;
  position: relative;
  overflow: hidden;
}
.compare-panel::after {
  content: "";
  position: absolute;
  top: 0; left: 0; right: 0; height: 6px;
  background: linear-gradient(90deg, var(--red), var(--yellow));
}
.compare-fine {
  margin-top: 24px;
  font-size: 0.85rem;
  color: var(--ink-faint);
}

/* 3. Pricing fixes */
.pricing-grid {
  grid-template-columns: repeat(2, 1fr); /* Pricing usually looks better in 2 columns */
  max-width: 900px;
  margin: 0 auto;
}
.pricing-card {
  padding: 40px;
  border-top: 4px solid var(--ink);
  text-align: center;
}
.pricing-card:hover {
  border-top-color: var(--yellow);
}

/* 4. Stats Strips */
.stats-strip, .stats-row {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 32px;
  background: var(--bg-alt);
  border: 1px solid var(--slate-line);
  border-radius: 20px;
  padding: 40px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.02);
}
.stat-num, .stat-big {
  font-family: var(--display);
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--ink);
  margin-bottom: 8px;
}
.stat-label, .stat-sub {
  font-size: 0.95rem;
  color: var(--ink-soft);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

/* 5. Misc grids */
.founders-grid {
  grid-template-columns: repeat(2, 1fr);
  max-width: 800px;
  margin: 0 auto;
}
.founder-card {
  text-align: center;
}
"""

with open('global.css', 'a', encoding='utf-8') as f:
    f.write("\n" + css_to_add)
